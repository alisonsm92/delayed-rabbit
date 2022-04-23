import { Channel, ConsumeMessage } from 'amqplib'
import logger from './logger'

export default class DelayedConsumer {
    private channel: Channel
    private queue: string
    private routingKey: string

    constructor(channel: Channel, queue: string) {
        this.channel = channel
        this.queue = queue
        this.routingKey = ''
    }

    async setup(exchange: string) {
        await this.channel.assertQueue(this.queue)
        await this.channel.bindQueue(this.queue, exchange, this.routingKey)
    }

    messageHandler(message: ConsumeMessage | null) {
        if(!message) throw new Error('Invalid message')
        const content = message?.content.toString()
        logger.info({ content }, 'Message consumed')
        this.channel.ack(message)
    }

    async consume() {
        await this.channel.consume(this.queue, this.messageHandler.bind(this))
    }
}