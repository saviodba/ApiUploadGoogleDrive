const formIdable = require('formidable')
const { uploadFile } = require('../services/google.js')

module.exports.upload_file_google = async (req, res) => {

    try {
        const form = new formIdable.IncomingForm();
        form.parse(req, async (err, fields, files) => {

            uploadFile(files.upfile.filepath, files.upfile.originalFilename, files.upfile.mimetype).then(resp => {
                res.status(200).json({
                    result: resp
                })
            })
        })


    } catch (error) {
        res.json({ message: error })
    }

}
