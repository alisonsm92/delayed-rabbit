import { Channel } from 'amqplib'
import ExchangeTypes from './contracts/exchange-types'

export default class DeadLetterQueue {
    private channel: Channel
    private queue: string
    private routingKey: string

    constructor(channel: Channel, queue: string) {
        this.channel = channel
        this.queue = queue
        this.routingKey = ''
    }

    async setup(originExchange: string, destinationExchange: string) {
        await this.channel.assertExchange(
            destinationExchange, 
            ExchangeTypes.DIRECT, 
            { durable: true }
        )
        await this.channel.assertQueue(this.queue, {
            deadLetterExchange: destinationExchange
        })
        await this.channel.bindQueue(this.queue, originExchange, this.routingKey)
    }
}