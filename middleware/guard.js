const jwt = require("jsonwebtoken");
exports.isAdmin = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({message: "can't enter in this page"});
    }
    let verify = jwt.verify(token, process.env.TOKEN_KEY);
    if (!verify || verify.role !== "admin") {
        return res.status(401).json({message: "can't enter in this page"});
    }
    next();
}
exports.isUser = (req, res, next) => {
    let token = req.header.authorization;
    let verify = jwt.verify(token, process.env.TOKEN_KEY);
    if (!verify) {
        return res.status(401).json({message: "page is not found"})
    }
    req.user_id = verify.user_id;
    req.email = verify.email;
    next();
}