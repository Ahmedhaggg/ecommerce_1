const db = require("../config/database");

const Admin = require("../models/admin");
const UserAddress = require("../models/address");
const Category = require("../models/category");
const SubCategory = require("../models/subCategory");
const Inventory = require("../models/inventory");
const Order = require("../models/order");
const OrderItems = require("../models/orderItems");
const Payment = require("../models/payment");
const Product = require("../models/product");
const ProductDiscount = require("../models/productDiscount");
const User = require("../models/user");
const Sales = require("../models/sales");
const Purchases = require("../models/purchases");
const PurchasesItems = require("../models/purchasesItems")
const ProductsReviews = require("./productReview");
// realtion between users and orders one to many
User.hasMany(Order)
// realtion between order and orderItems one to many
Order.hasMany(OrderItems, {onDelete: "CASCADE", hooks: true});

// realtion between orderitems and product one to one
OrderItems.belongsTo(Product);

// realtion between order and user address one to one
User.hasOne(UserAddress);
Order.hasOne(UserAddress);

// realtion between order and user address one to one
Order.hasOne(Payment);
Payment.belongsTo(Order);


// realtion between users and purchases one to many
User.hasMany(Purchases, {onDelete: "CASCADE", hooks: true})

// realtion between order and orderItems one to many
Purchases.hasMany(PurchasesItems, {onDelete: "CASCADE", hooks: true});
// realtion between purchasesItems and products
PurchasesItems.belongsTo(Product);

// realtion between product and discount one to one
Product.hasOne(ProductDiscount, {onDelete: "CASCADE", hooks: true});
ProductDiscount.belongsTo(Product);

// realtion between category and product many to one
Category.hasMany(Product, {onDelete: "CASCADE", hooks: true});
SubCategory.hasMany(Product);
Product.belongsTo(Category);
Product.belongsTo(SubCategory);


// realtion between Catgeory and subCategory
Category.hasMany(SubCategory, {onDelete: "CASCADE", hooks: true});
SubCategory.belongsTo(Category)

// realtion between sales and products
Sales.belongsTo(Product);
Product.hasMany(Sales);

// realtion between user and sales
User.hasMany(Sales, {onDelete: "CASCADE", hooks: true});
ProductsReviews.belongsTo(Sales);

// realtion between inventory and products  
Product.hasOne(Inventory, {onDelete: "CASCADE", hooks: true})
Inventory.belongsTo(Product);

// product reviews
Product.hasMany(ProductsReviews, {onDelete: "CASCADE", hooks: true});
ProductsReviews.belongsTo(Product);

// realtion between user and reviews
User.hasMany(ProductsReviews, {onDelete: "CASCADE", hooks: true});
ProductsReviews.belongsTo(User);

module.exports = { 
    Admin,
    User, 
    Product, 
    Category, 
    SubCategory,
    Order,
    OrderItems,
    Payment,
    Inventory,
    Sales,
    Purchases,
    PurchasesItems,
    UserAddress,
    ProductsReviews,
    ProductDiscount
};

