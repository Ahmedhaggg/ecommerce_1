const { Inventory, User } = require("../../models/index");


exports.readAll = async (productId, fields = Inventory.rawAttributes) => {
    let productReviews = await Inventory.findAll({
        where: {productId},
        attributes: fields,
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'image']
            }
        ]
    });
    return {
        reviewslength: productReviews.length,
        reviews: productReviews
    }
}

exports.create = async (newData) => {
    await Inventory.create(newData);
}

exports.update = async (productId, newData) => {
    await Inventory.update(newData, {where: {productId}})
}

exports.delete = async (reviewId) => {
    await Inventory.destroy({where: {id}})
}