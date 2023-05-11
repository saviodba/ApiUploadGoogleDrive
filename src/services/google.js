const fs = require('fs')
const { google } = require('googleapis')


async function uploadFile(file, fileName, mType) {
    try {

        const auth = new google.auth.GoogleAuth({
            keyFile: './googledrive.json',
            scopes: [process.env.GOOGLE_SCOPES]
        })

        const driveService = google.drive({
            version: 'v3',
            auth
        })

        const fileMetaData = {
            'name': fileName,
            'parents': [process.env.GOOOGLE_API_FOLDER_ID]
        }

        const media = {
            MimeType: mType,
            body: fs.createReadStream(file)
        }

        const response = await driveService.files.create({

            resource: fileMetaData,
            media: media,
            fields: 'id'

        })

        return response.data.id

    } catch (error) {
        console.log(`Erro ao realizar upload: ${error}`)
    }
}

module.exports = { uploadFile }

/*uploadFile().then(data => {
    console.log(data)
    //https://drive.google.com/uc?export=view&id=
})*/
