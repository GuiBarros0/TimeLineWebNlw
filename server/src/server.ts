import fastify from 'fastify'
const app = fastify()

app.get('/hello', () => {
    return 'Hello Word'
})

app
    .listen({
        port: 3333,
    }).then(() => {
        console.log('🐱‍🏍HTTP SERVER RUNNING ON http://localhost:3333')
    })