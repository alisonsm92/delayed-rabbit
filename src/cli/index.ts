import inquirer from 'inquirer'
import startup, { StartupAnswers } from './questions/startup'

enum Initializers { producer = 'PRODUCER', consumer = 'CONSUMER' }

let initializers: Initializers[] = []

const setInitializers = (options: Initializers[]) => () => initializers = options
const exit = () => process.exit()

const startupMapper = {
    [startup.answers.producer]: setInitializers([Initializers.producer]),
    [startup.answers.consumer]: setInitializers([Initializers.consumer]),
    [startup.answers.producerAndConsumer]: setInitializers([
        Initializers.producer, Initializers.consumer]
    ),
    [startup.answers.exit]: exit,
}

export default async function execute() {
    const  answers = await inquirer.prompt<{startup: StartupAnswers}>([
        startup.question
    ])
    startupMapper[answers.startup]() ?? exit()
}