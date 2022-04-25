import { Answers, ListQuestion, Question } from 'inquirer'
import * as Configuration from '../../configuration'
import defaults from '../../defaults'
import ExchangeConfigOptions from '../../exchange-config-options'
import ExchangeTypes from '../../exchange-types'

const isManualConfig = (answers: Answers) => answers.exchangeConfigOptions === ExchangeConfigOptions.manual

const exchangeConfigOptions: ListQuestion = {
    name: Configuration.properties.exchangeConfigOptions,
    type: 'list',
    message: 'Em relação a exchange para a publicação das mensagens:',
    choices: [
        { name: 'Utilizar configuração padrão', value: ExchangeConfigOptions.default },
        { name: 'Configurar manualmente', value: ExchangeConfigOptions.manual }
    ]
}

const exchangeName: Question = {
    name: Configuration.properties.exchangeName,
    type: 'input',
    message: 'Nome da exchange:',
    default: defaults.DESTINATION_EXCHANGE,
    when: isManualConfig
}

const exchangeType: ListQuestion = {
    name: Configuration.properties.exchangeType,
    type: 'list',
    message: 'Tipo da exchange:',
    default: defaults.DESTINATION_EXCHANGE_TYPE,
    choices: [
        { name: 'direct', value: ExchangeTypes.DIRECT },
        { name: 'topic', value: ExchangeTypes.TOPIC },
        { name: 'headers', value: ExchangeTypes.HEADERS },
        { name: 'fanout', value: ExchangeTypes.FANOUT },
    ],
    when: isManualConfig
}

const routingKey: Question = {
    name: Configuration.properties.routingKey,
    type: 'input',
    message: 'Padrão para a routing key:',
    default: defaults.ROUTING_KEY,
    when: isManualConfig
}

const exchangeConfig = [ exchangeName, exchangeType, routingKey ]

const questions: Question[] = [ exchangeConfigOptions, ...exchangeConfig ]

export default { questions }