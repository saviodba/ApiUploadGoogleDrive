require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const {routes} = require('./src/routes')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')


let app = express()
let PORT = process.env.PORT || 3100

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(routes)

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Ocorreu um erro: ${err}`)
    } else {
        console.log(`Serviço online, porta : ${PORT}`)
    }
})
