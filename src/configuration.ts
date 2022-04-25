import Initializers from "./initializers"
import ExchangeConfigOptions from "./exchange-config-options"
import ExchangeTypes from "./exchange-types"

type Configuration = {
    initializers: Initializers[]
    exchangeConfigOptions: ExchangeConfigOptions
    exchangeName: string
    exchangeType: ExchangeTypes
    routingKey: string,
    numberOfMessages: number
    delay: number
}

export default Configuration
export const properties = new Proxy({}, {
    get: (_, prop) => prop,}) as { [P in keyof Configuration]: P 
}