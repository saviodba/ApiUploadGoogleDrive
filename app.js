require('dotenv').config()
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const routes = require('./src/routes')

let app = express()
let PORT = process.env.PORT || 3000

app.use(routes)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


//consign().include('./src/routes').into(app)


app.listen(PORT, (err) => {
    if (err) {
        console.log(`Ocorreu um erro: ${err}`)
    } else {
        console.log(`Serviço online, porta : ${PORT}`)
    }
})
