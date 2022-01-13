const { Category, Product, ProductDiscount, SubCategory, Inventory,  ProductsReviews, Sales} = require("../../models/index");

exports.readAll = async (fields = Category.rawAttributes) => {
    let categories = await Category.findAll(
        {
            attributes: fields
        }
    );
    return categories;
}


exports.create = async (categoryData) => {
    await Category.create(categoryData);
}
exports.read = async (query, fields = [], associtedRows = false) => {
    let includes = [];
    if (associtedRows == true) {
        let productIncludes = [
            {
                model: ProductDiscount,
                attributes: ['percent', 'active']
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
            }
        ];
        includes = [
            {
                model:  Product,
                attributes: ["id", 'name', 'price', 'image', 'description',],
                include: productIncludes
            }
        ]
    }
    
    let category = await Category.findOne({
        where:  query,
        attributes: fields,
        include: includes
    });
    return category; 
}

exports.update = async (id, newData) => {
    await Category.update(newData, {where: {id}});
}

// exports.checkCategoryWithId = async (id) => {
//     let category = await Category.findOne({
//         where: {id},
//         attributes: ['id']
//     });
//     return category ? true : null;
// }

//                     Sequelize.fn("COUNT", Sequelize.col("sales.id"), "sales")
