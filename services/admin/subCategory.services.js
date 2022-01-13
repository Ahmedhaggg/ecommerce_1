const { SubCategory, Product, ProductDiscount, Inventory} = require("../../models/index");

exports.readAll = async (fields = SubCategory.rawAttributes) => {
    let subCategories = await SubCategory.findAll(
        {
            attributes: fields
        }
    );
    return subCategories;
}

exports.read = async (query, fields = SubCategory.rawAttributes, associtedRows = true) => {
    let includes = [
        {
            model: Product,
            attributes: ['id', 'name', 'price', 'image'],
            include: [
                {
                    model: ProductDiscount,
                    attributes: ['percent', 'active']
                },
                {
                    model: Inventory,
                    attributes: ['quantity']
                }
            ]
        }
    ];
    if (associtedRows == false) {
        includes = [];
    }
    let subCategory = await SubCategory.findOne(
        {
            where : query,
            attributes: fields,
            include: includes
        }
    );
    return {
        subCategory,
        productsLength: subCategory.products.length
    };
}

exports.create = async (newData) => {
    let newSubCategory = await SubCategory.create(newData);
    return newSubCategory || false;
}

exports.update = async (id, newData) => {
    await SubCategory.update(
        newData,
        {
            where: {id}
        }
    )
}