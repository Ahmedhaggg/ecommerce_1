const productServices = require("../../services/admin/product.services")
const categoryServices = require("../../services/admin/category.services");
const InventoryService = require("../../services/admin/Product.inventory.services");
const ProductDiscountServices = require("../../services/admin/product.discount.services");
const { uploadsRoot, getRoot } = require("../../config/constants");
const fs = require("fs");

exports.index = async (req, res, next) => {
    let products = await productServices.readAll();
    return res.json({products});
}

exports.store = async (req, res, next) => {
    const { name, price, description, categoryId, subCategoryId, quantity, discount } = req.body;
    if (!req.file) {
        res.status(401).json({
            success: false,
            param: "product_image",
            message: "should select file"
        });
    }

    let image = req.file.filename;
    let newProductData = { name, price, description, image, categoryId, subCategoryId};
    let newProduct = await productServices.create(newProductData);
    if (newProduct == false) {
        await fs.unlinkSync(uploadsRoot + productImage);
        return res.status(401).json({
            success: false,
            message: "something went wrong"
        });
    }

    await InventoryService.create({quantity, productId: newProduct.id});

    if (discount) {
        discount.active = 1;
        discount.productId = newProduct.id
        await ProductDiscountServices.create(discount);
    }

    res.status(201).json({
        success: true,
        message: "success create product"
    })
}

exports.show = async (req, res, next) => {
    let { id } = req.params;
    let product = await productServices.read({id});
    if (!product) {
        res.status(404).json({
            success: false,
            message: "product isn't found",
            product: null
        });
    }
    product.image = uploadsRoot() + product.image;
    res.status(200).json({
        success: true,
        product: product
    });
}

exports.edit = async (req, res, next) => {
    let { id } = req.params;

    let product = await productServices.read({id});
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "product isn't found",
            product: null
        });
    }

    let categories = await categoryServices.readAll(["id", "name"]);

    res.status(200).json({
        success: true,
        product: product,
        categories
    });
}

exports.update = async (req, res, next) => {
    let { id } = req.params;
    let { newProductData, newDisountData, newInventoryData } = req.body;

    let product = await productServices.read({id}, ['id'], false);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "can't update this product, product is not found"
        })
    }

    if (newProductData) {
        await productServices.update(id, newProductData);
    }
    if(newDisountData) {
        await ProductDiscountServices.update(product.id, newDisountData)
    }
    if (newInventoryData) {
        await InventoryService.update(product.id, newInventoryData)
    }

    res.status(200).json({
        success: true,
        message: "product is updated successfully"
    });
}

exports.delete = async (req, res, next) => {
    let { id } = req.params;
    let product = await productServices.read({id}, ['id'], false);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "product is not found"
        });
    }
    await productServices.delete(id);
    res.status(200).json({
        message: "product is deleted successfully",
        success: true
    })
}

// exports.delete = async (req, res, next) => {
//     let { id } = req.params;
//     let product = await productServices.getProduct({id});
//     if (!product) {
//         return res.status(404).json({
//             success: false,
//             message: "product is not found"
//         });
//     }
//     let deleteProduct = await productServices.deleteProduct(id);
//     if (deleteProduct == false) {
//         return res.status(404).json({
//             success: false,
//             message: "can't delete this product"
//         });
//     }
//     let productImage = uploadsRoot() + product.image;
//     await fs.unlinkSync(productImage);
//     res.status(202).json({
//         success: true,
//         message: "product is deleted successfully"
//     });
// }