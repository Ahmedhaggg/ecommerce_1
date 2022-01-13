let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let flash = require("connect-flash");
let session = require("express-session");
let SessionStore = require("express-session-sequelize")(session.Store);
let methodOverride = require("method-override");
let { errorHandeler } = require("./middleware/errorHandler")
// express application
const app = express();


// setup views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

// statics files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));

// method request override
app.use(methodOverride("_method"));



// using parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// dotenv 
require("dotenv").config();
// // database connecting
let db = require("./config/database");
db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err)
  })

  
const sequelizeSessionStore = new SessionStore({
  db: db
});
app.use(session({
  secret: 'sessions storage secreet',
  store: sequelizeSessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 100
  }
}));

app.use(flash());

// let Products = require("./services/admin/product.services");
// app.get("/", async (req,res, next) => {
//   let mostDisounts = Products.getMaxDisounts(10);  
//   res.json({mostDisounts});
// })

// admin routes
let adminAuthRoutes = require("./routes/admin/auth.router");
// let adminDashboardRoutes = require("./routes/admin/Dashboard.router");
let adminProductsRoutes = require("./routes/admin/products.router");
let adminCategoryRoutes = require("./routes/admin/categories.router");
// let adminRoutes = require("./routes/admin");
// let indexRoutes = require('./routes/index');
// let productRoutes = require("./routes/Product")
// let productDiscountRoutes = require("./routes/productDiscount");

// // using routes
app.use("/admin", adminAuthRoutes);
// app.use("/admin/dashboard", adminDashboardRoutes);
app.use("/admin/products", adminProductsRoutes);
app.use("/admin/categories", adminCategoryRoutes);

// app.use("/user", userAuthRoutes);
// app.use("/", indexRoutes);
// app.use("/", productRoutes);
// app.use("/", productDiscountRoutes);

app.use(errorHandeler);
app.use((req, res) => {
  res.status(400).json({
    message: "page is not found"
  });
})

// run app
app.listen("2222", function () {
    console.log("server is running");
})