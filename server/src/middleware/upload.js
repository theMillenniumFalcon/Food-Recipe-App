const path = require('path')
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, files, cb) => {
        cb(null, "src/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`.replace(/ /g, "_"))
    },
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (!file.originalname.match(/\.(jpeg|png|jpg|jfif|webp)$/)) {
            return cb(new Error("Please upload image only"))
        }
        callback(undefined, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload