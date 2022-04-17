import { Channel } from 'amqplib'
import ExchangeTypes from './exchange-types'

export default class DeadLetterQueue {
    private channel: Channel
    private queue: string

    constructor(channel: Channel, queue: string) {
        this.channel = channel
        this.queue = queue
    }

    async setup(originExchange: string, destinationExchange: string, ttl: number) {
        await this.channel.assertExchange(
            destinationExchange, 
            ExchangeTypes.DIRECT, 
            { durable: true }
        )
        await this.channel.assertQueue(this.queue, {
            messageTtl: ttl,
            deadLetterExchange: destinationExchange
        })
        await this.channel.bindQueue(this.queue, originExchange, '')
    }
}