const formIdable = require('formidable')
const { uploadFile } = require('../services/google.js')

module.exports.upload_file_google = async (req, res) => {

    try {
        const form = new formIdable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if(err){
                res.status(400).json({erro:err})
                return
            }

           if(!files.upfile){
            res.status(404).json({message:'Nenhum arquivo selecionado.'})
           }else{
            uploadFile(files.upfile.filepath, files.upfile.originalFilename, files.upfile.mimetype).then(resp => {
                res.status(200).json({
                    id: resp
                })
            })
           }


        })


    } catch (error) {
        res.status(400).json({ error })
    }

}
