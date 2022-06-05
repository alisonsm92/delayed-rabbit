import pino from 'pino'
import environment from './config/environment'

const config: pino.LoggerOptions = {
  level: environment.logger.level,
  serializers: { error: pino.stdSerializers.err },
  transport: environment.logger.prettyPrint
    ? { target: 'pino-pretty', options: { colorize: true, translateTime: true } }
    : undefined
}

export default pino(config)