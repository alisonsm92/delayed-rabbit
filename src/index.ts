import dotenv from 'dotenv'
dotenv.config()
import amqp from 'amqplib'
import env from './environment'
import Producer from './producer'
import Consumer from './consumer'
import DeadLetterQueue from './dead-letter-queue'

const EXCHANGE = 'messages'
const DEAD_LETTER_EXCHANGE = 'delayed.messages'
const DELAYED_QUEUE = 'work.later'
const DESTINATION_QUEUE = 'work.now'

const messages = [
    'First',
    'Second',
    'Third'
]

function calculateTTL(ttl: number, index: number) {
    return ttl * (index + 1)
}

async function execute() {
    const connection = await amqp.connect(env.rabbitMQ.url)
    const producerChannel = await connection.createChannel()
    const consumerChannel = await connection.createChannel()

    const producer = new Producer(producerChannel, EXCHANGE)
    await producer.setup()

    const delayedQueue = new DeadLetterQueue(consumerChannel, DELAYED_QUEUE)
    await delayedQueue.setup(EXCHANGE, DEAD_LETTER_EXCHANGE)

    const consumer = new Consumer(consumerChannel, DESTINATION_QUEUE)
    await consumer.setup(DEAD_LETTER_EXCHANGE)

    await consumer.consume()

    await messages.forEach((message, index) => 
        producer.publish(message, calculateTTL(env.rabbitMQ.messageTTL, index))
    )
}

execute()