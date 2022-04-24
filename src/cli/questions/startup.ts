import inquirer from 'inquirer'

const question = {
    name: 'startup',
    type: 'list',
    message: 'Escolha o que deseja inicializar:',
    choices: [
        { name: 'Produtor de mensagens', value: 'PRODUCER' },
        { name: 'Consumidor de mensagens', value: 'CONSUMER' },
        { name: 'Produtor e consumidor de mensagens', value: 'PRODUCER_AND_CONSUMER' },
        new inquirer.Separator(),
        { name: 'Sair', value: 'EXIT' },
    ]
}

enum answers {
    producer = 'PRODUCER',
    consumer = 'CONSUMER',
    producerAndConsumer = 'PRODUCER_AND_CONSUMER',
    exit = 'EXIT',
}

export default { question, answers }
export type StartupAnswers = `${answers}`;