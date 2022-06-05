import inquirer from 'inquirer'
import initializers from './questions/initializers'
import exchange from './questions/exchange'
import messages from './questions/messages'
import Configuration from '../contracts/configuration'
import defaults from '../config/defaults'
import Initializers from '../contracts/initializers'
import ExchangeTypes from '../contracts/exchange-types'
import ExchangeConfigOptions from '../contracts/exchange-config-options'

type InputConfiguration = {
    initializers: Initializers[]
    exchangeConfigOptions: ExchangeConfigOptions
    exchangeName?: string
    exchangeType?: ExchangeTypes
    routingKey?: string,
    numberOfMessages?: number
    delay?: number
}

function setDefaults(inputConfig: InputConfiguration): Configuration {
    return { 
        initializers: inputConfig.initializers,
        exchangeConfigOptions: inputConfig.exchangeConfigOptions,
        exchangeName: inputConfig.exchangeName || defaults.DESTINATION_EXCHANGE,
        exchangeType: inputConfig.exchangeType || defaults.DESTINATION_EXCHANGE_TYPE,
        routingKey: inputConfig.routingKey || defaults.ROUTING_KEY,
        numberOfMessages: inputConfig.numberOfMessages || defaults.NUMBER_OF_MESSAGES,
        delay: inputConfig.delay || defaults.MESSAGE_TTL
     }
}

export default async function execute() {
    const inputConfig = await inquirer.prompt<Configuration>([
        ...initializers.questions,
        ...messages.questions,
        ...exchange.questions,
    ])
    return setDefaults(inputConfig)
}