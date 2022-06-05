import dotenv from 'dotenv'
dotenv.config()
import amqp from 'amqplib'
import env from './config/environment'
import defaults from './config/defaults'
import Producer from './producer'
import Consumer from './consumer'
import DeadLetterQueue from './dead-letter-queue'
import Initializers from './contracts/initializers'
import cli from './cli'

function calculateTTL(ttl: number, index: number) {
    return ttl * (index + 1)
}

function generateMessages(numberOfMessage: number) {
    return [...Array(numberOfMessage).keys()].map(number => `Message nº ${number+1}`)
}

async function execute() {
    const config = await cli()
    const connection = await amqp.connect(env.rabbitMQ.url)
    const producerChannel = await connection.createChannel()
    const consumerChannel = await connection.createChannel()

    if(config.initializers.includes(Initializers.producer)) {
        const producer = new Producer(producerChannel, defaults.EXCHANGE)
        await producer.setup()

        const delayedQueue = new DeadLetterQueue(consumerChannel, defaults.DELAYED_QUEUE)
        await delayedQueue.setup(defaults.EXCHANGE, config.exchangeName)

        const messages = generateMessages(config.numberOfMessages)

        await messages.forEach((message, index) => 
            producer.publish(message, calculateTTL(config.delay, index))
        )
    }

    if(config.initializers.includes(Initializers.consumer)) {
        const consumer = new Consumer(consumerChannel, defaults.DESTINATION_QUEUE)
        await consumer.setup(config.exchangeName)
        await consumer.consume()
    }
}

execute()