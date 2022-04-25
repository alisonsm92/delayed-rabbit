import { ListQuestion, Question } from 'inquirer'
import * as Configuration from '../../configuration'
import Initializers from '../../initializers'

const initializers: ListQuestion = {
    name: Configuration.properties.initializers,
    type: 'list',
    message: 'Escolha o que deseja inicializar:',
    choices: [
        { name: 'Produtor de mensagens', value: [Initializers.producer] },
        { name: 'Consumidor de mensagens', value: [Initializers.consumer] },
        { name: 'Produtor e consumidor de mensagens', value: [
            Initializers.producer,
            Initializers.consumer
        ]}
    ]
}

const questions: Question[] = [ initializers ]

export default { questions }