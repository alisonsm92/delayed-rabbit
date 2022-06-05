import { Channel } from 'amqplib'
import { Buffer } from 'buffer'
import ExchangeTypes from './contracts/exchange-types'
import logger from './logger'

export default class Producer {
    private channel: Channel
    private exchange: string
    private routingKey: string

    constructor(channel: Channel, exchange: string) {
        this.channel = channel
        this.exchange = exchange
        this.routingKey = ''
    }

    async setup() {
        await this.channel.assertExchange(
            this.exchange, 
            ExchangeTypes.DIRECT, 
            { durable: true }
        )
    }

    async publish(message: string, ttl: number) {
        await this.channel.publish(
            this.exchange,
            this.routingKey, 
            Buffer.from(message), 
            { expiration: ttl }
        )
        logger.info({ exchange: this.exchange, message }, 'New message published')
    }
}