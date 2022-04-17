export default {
    appName: process.env.APP_NAME || 'DELAYED-RABBIT',
    logger: {
        level: process.env.LOG_LEVEL || 'debug',
        prettyPrint: process.env.LOG_PRETTY_PRINT === 'true' || false
    },
    rabbitMQ: {
        url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
        messageTTL: Number(process.env.MESSAGE_TTL_MS) || 10000
    }
}