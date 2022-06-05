import { Question } from 'inquirer'
import defaults from '../../config/defaults'
import * as Configuration from '../../contracts/configuration'

const numberOfMessages: Question = {
    name: Configuration.properties.numberOfMessages,
    type: 'number',
    message: 'Defina o número de mensagens a serem publicadas:',
    default: defaults.NUMBER_OF_MESSAGES
}

const delay: Question = {
    name: Configuration.properties.delay,
    type: 'number',
    message: 'Defina tempo de atraso entre as mensagens (em Milissegundos):',
    default: defaults.MESSAGE_TTL
}

const questions: Question[] = [ numberOfMessages, delay ]

export default { questions }