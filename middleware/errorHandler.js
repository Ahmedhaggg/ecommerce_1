let fs = require("fs")
let { uploadsRoot } = require("../config/constants")

exports.use = controller => (req, res, next) => 
    Promise
        .resolve(controller(req, res, next))
        .catch(next);

exports.errorHandeler = async (err, req, res, next) => {
    console.log(err);
    if (req.file) {
        let file = uploadsRoot() + req.file.filename;
        await fs.unlinkSync(file);
    }
    res.status(505).json({
        message: "something went wrong",
        error: err
    })
}