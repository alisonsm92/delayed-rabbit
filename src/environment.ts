export default {
    appName: process.env.APP_NAME || 'DELAYED-RABBIT',
    rabbitMQ: {
        url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
        messageTTL: Number(process.env.MESSAGE_TTL_MS) || 10000
    }
}