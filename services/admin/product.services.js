const { Product, ProductDiscount, Category, SubCategory, Inventory, ProductsReviews, Sales, User } = require("../../models/index");

exports.getMaxDisounts = async (limit) => {
    let maxProductsDisounts = await Product.findAll({
        attributes: ['id', 'name', 'price', 'description', 'image'],
        include: {
                model: ProductDiscount,
                attributes: ['id', 'percent', 'active', 'description', 'expiresin']
        },
        order: [
            [ProductDiscount, "percent", "DESC"]
        ]
    })
    return maxProductsDisounts;
}

exports.readAll = async (fields = Product.rawAttributes, associtedRows = false) => {
    let includes = [];
    if (associtedRows === true) {
        includes = [
            {
                model: ProductDiscount,
                attributes: ['percent', 'active', 'description', 'expiresin']
            },
            {
                model: Category,
                attributes: ['name']
            },
            {
                model: SubCategory,
                attributes: ['name']
            },
            {
                model: Inventory,
                attributes: ['quantity']
            },
            {
                model: ProductsReviews,
                attributes: ['rate', 'comment'],
                include: [
                    {
                        model: User,
                        attributes: [
                            'username',
                            'image'
                        ]
                    }
                ]
            },
            {
                model: Sales,
                attributes: ['id', 'productQuantity', 'price']
            }
        ];
    }
    let products = await Product.findAll(
        {
            attributes: fields,
            include: includes
        },
    );
    return products;
}

exports.read = async (query, fields = ['id', 'name', 'price', 'image', 'description'], associtedRows = false) => {
    let includes = [];
    if (associtedRows === true) {
        includes = [
            {
                model: ProductDiscount
            },
            {
                model: Category,
                attributes: ['name']
            },
            {
                model: SubCategory,
                attributes: ['name']
            },
            {
                model: Inventory,
                attributes: ['quantity']
            },
            {
                model: ProductsReviews,
                attributes: ['rate', 'comment'],
                include: [
                    {
                        model: User,
                        attributes: [
                            'username',
                            'image'
                        ]
                    }
                ]
            },
            {
                model: Sales,
                attributes: ['id', 'productQuantity', 'price']
            }
        ];
    }
    let product = await Product.findOne(
        {
            where: query,
            attributes: fields,
            include: includes
        }
    ); 
    return product;
}

exports.create = async (productData) => {
    let newProduct = await Product.create(productData);
    return newProduct || false;
}

exports.update = async (id, newData) => {
    await Product.update(newData, {where: {id}});
}

exports.delete = async (id) => {
    let deletedProduct = await Product.destroy({
        where: {id}
    });
    console.log(deletedProduct);
    return deletedProduct;
}
exports.isUnique = async (fieldName, value) => {
    let selectedField = {};
    selectedField[fieldName] = value
    let product = await Product.findOne({where: selectedField, attributes: ['id']})
    return product ? false : true;
}
