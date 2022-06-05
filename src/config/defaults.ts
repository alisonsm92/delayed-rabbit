import ExchangeTypes from "../contracts/exchange-types";

export default {
    EXCHANGE: 'messages',
    DESTINATION_EXCHANGE: 'delayed.messages',
    DESTINATION_EXCHANGE_TYPE: ExchangeTypes.DIRECT,
    ROUTING_KEY: '',
    DELAYED_QUEUE: 'work_later',
    DESTINATION_QUEUE: 'work_now',
    NUMBER_OF_MESSAGES: 3,
    MESSAGE_TTL: 10000
}