import { Channel, ConsumeMessage } from 'amqplib'

export default class DelayedConsumer {
    private channel: Channel
    private queue: string

    constructor(channel: Channel, queue: string) {
        this.channel = channel
        this.queue = queue
    }

    async setup(exchange: string) {
        await this.channel.assertQueue(this.queue)
        await this.channel.bindQueue(this.queue, exchange, '')
    }

    messageHandler(message: ConsumeMessage | null) {
        if(!message) throw new Error('Invalid message')
        const content = message?.content.toString()
        console.info('Message consumed', { content })
        this.channel.ack(message)
    }

    async consume() {
        await this.channel.consume(this.queue, this.messageHandler.bind(this))
    }
}