const { ProductDiscount } = require("../../models/index");

exports.getMaxDiscounts = async () => {
    
}
exports.create = async (newData) => {
    await ProductDiscount.create(newData);
}

exports.read = async (query, fields = ProductDiscount.rawAttributes) => {
    let discount = await ProductDiscount.findOne(
        {
            where: query,
            attributes: fields
        }
    );
    return discount;
}

exports.update = async (productId, newData) => {
    await ProductDiscount.update(newData,
        {where: {productId}}
    )
};

exports.delete = async (id) => {
    await ProductDiscount.destroy(
        {where: id}
    );
}
exports.getTopDisount = async (productsLength) => {
    let topProductsHasDiscount = await ProductDiscount.find
}