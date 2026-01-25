const express = require('express');
const multer = require('multer')
const File = require('./models/fileModel')
const connectDB = require('./db/dbConnection')

const app = express()

connectDB()

const fileUpload = multer({
    storage : multer.diskStorage({
        destination : function(req,file,callback){
            callback(null, "uploads")
        },
        filename : function(req,file,callback){
            const uniqueName = file.fieldname + "-" + Date.now() + ".png"
            callback(null, uniqueName)
        }
    })
}).single("my_file")

app.post("/file-upload",fileUpload, async (req,res) => {
    if(!req.file){
        return res.status(404).send("No file uploaded")
    }

    const newFile = new File({
        filePath : req.file.path
    })

    newFile.save()
    .then(() => res.send("File Uploaded successfully"))
    .catch((err) => res.send(err))
})

app.listen(1000)