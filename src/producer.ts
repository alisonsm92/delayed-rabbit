import { Channel } from 'amqplib'
import { Buffer } from 'buffer'
import ExchangeTypes from './exchange-types'
import logger from './logger'

export default class Producer {
    private channel: Channel
    private exchange: string

    constructor(channel: Channel, exchange: string) {
        this.channel = channel
        this.exchange = exchange
    }

    async setup() {
        await this.channel.assertExchange(
            this.exchange, 
            ExchangeTypes.DIRECT, 
            { durable: true }
        )
    }

    async publish(message: string) {
        await this.channel.publish(this.exchange, '', Buffer.from(message))
        logger.info({ exchange: this.exchange, message }, 'New message published')
    }
}