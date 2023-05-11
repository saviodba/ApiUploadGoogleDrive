
const express = require('express')
const route = express.Router()


const upload = require('../controllers/fileController')

route.get('/data', async(req, res)=>{
    await res.status(200).json(new Date())
})

route.post('/api/upload-files', async (req, res) => {
    await upload.upload_file_google(req, res)
})


module.exports = route


