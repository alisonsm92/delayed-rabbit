# Delayed-Rabbit 🐰🕓

Implementação de uma solução para consumir mensagens com "atraso" utilizando [RabbitMQ](https://www.rabbitmq.com/).

Utilizada a solução sugerida na documentação do CloudAMQP ([delayed-messages](https://www.cloudamqp.com/docs/delayed-messages.html)) que combina as funcionalidades de [message TTL](https://www.rabbitmq.com/ttl.html) e [dead-lettering](https://www.rabbitmq.com/dlx.html).

## To-do list

- [ ] Implementar um CLI para configurar e executar comandos;
  - [ ] Definir o número de mensagens a serem publicadas;
  - [ ] Definir o intervalo de "atraso" entre as mensagens;
  - [ ] Executar comando para publicar mensagens.
- [ ] Desenhar um fluxograma para ilustrar solução.

## CLI

- Selecione o que deseja executar:
  - Produtor de mensagens:
    - Exchange:
      - Opções:
        - Configurar
          - Tipo
          - Nome
          - Routing key
        - Usar configuração padrão
    - Mensagens:
      - Nº de mensagens a serem publicado
      - Intervalo de delay entre as mensagens (em Milissegundos)
    - Inicializar produtor de mensagens?
      - Sim
        - Inicializa o envio dos mensagens
      - Não
        - Encerra o processo
  - Consumidor de mensagens:
    - Exchange:
      - Opções:
        - Configurar
          - Tipo
          - Nome
          - Routing key
        - Usar configuração padrão
    - Executar consumidor de mensagens?
      - Sim
        - Inicializa consumidor
      - Não
        - Encerra o processo
  - Produtor e consumidor mensagens:
    - Exchange:
      - Opções:
        - Configurar
          - Tipo
          - Nome
          - Routing key
        - Usar configuração padrão
    - Mensagens:
      - Nº de mensagens a serem publicado
      - Intervalo de delay entre as mensagens (em Milissegundos)
    - Executar consumidor de mensagens?
      - Sim
        - Inicializa consumidor
      - Não
        - Encerra o processo
