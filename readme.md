# Delayed-Rabbit 🐰🕓

Implementação de uma solução para consumir mensagens com "atraso" utilizando [RabbitMQ](https://www.rabbitmq.com/).

Utilizada a solução sugerida na documentação do CloudAMQP ([delayed-messages](https://www.cloudamqp.com/docs/delayed-messages.html)) que combina as funcionalidades de [message TTL](https://www.rabbitmq.com/ttl.html) e [dead-lettering](https://www.rabbitmq.com/dlx.html).

### To-do list:

- [ ] Implementar um CLI para configurar e executar comandos;
  - [ ] Definir o número de mensagens a serem publicadas;
  - [ ] Definir o intervalo de "atraso" entre as mensagens;
  - [ ] Executar comando para publicar mensagens.
- [ ] Desenhar um fluxograma para ilustrar solução.
