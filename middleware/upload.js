const { getRoot } = require("../config/constants");
const multer = require("multer")

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
    cb(new Error('I don\'t have a clue!'))
}



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, getRoot() + '/uploads')
    },
    filename: function (req, file, cb) {
        let filename =  Date.now() + file.originalname;
        cb(null, filename)
    }
})

var upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 5,
        fileFilter: fileFilter
    }
})

module.exports = upload;