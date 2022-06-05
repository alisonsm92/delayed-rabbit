export default {
    appName: process.env.APP_NAME || 'DELAYED-RABBIT',
    logger: {
        level: process.env.LOG_LEVEL || 'debug',
        prettyPrint: process.env.LOG_PRETTY_PRINT === 'true' || false
    },
    rabbitMQ: {
        url: process.env.RABBITMQ_URL || 'amqp://guest:guest@localhost:5672'
    }
}