const { Admin } = require("../../models/index");

exports.create = async (userData) => {
    let newUser = await Admin.create(userData);
    return { success: true, user: newUser};
};

exports.read = async (query, fields = []) => {
    let selectedField = {};
    selectedField[fieldName] = value
    let admin = await Admin.findOne({where: query})
    return admin;
}
exports.find = async (query) => {
    let admin = await Admin.findOne({where: query});
    return admin;
}