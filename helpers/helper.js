const upload = require("../middleware/upload");


const singleUploader = field => upload.single(field);

module.exports = {
    singleUploader
}