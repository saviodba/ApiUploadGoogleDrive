const {Router} = require('express')

const routes = Router()

const upload = require('./files')

routes.use(upload)

module.exports = {routes}