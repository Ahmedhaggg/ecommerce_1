
// mongoose connecttion //////////////////

// const mongooseOption = {
//     useNewUrlParser: true ,
//     useUnifiedTopology: true
// }
//     databse : "mongodb://localhost/youtube_store"
// mongoose.connect(config.databse, mongooseOption, (err) => {
//     if (err) 
//         console.log(err)
//     else
//         console.log("mongoose connected")
// });



// mysql connection
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "store"
// });
// db.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("mysql connecting");
//     }
// });



// bookshelf connection

// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host     : 'localhost',
//       user     : 'root',
//       password : '',
//       database : 'store',
//       charset  : 'utf8'
//     }
// });
// const bookshelf = require('bookshelf')(knex)

// const User = bookshelf.model('User', {
//     tableName: 'users'
// })


// // // db.authenticate().then(() => {
// // //   console.log('Connection has been established successfully.');
// // // }).catch((err) => {
// // //   console.error('Unable to connect to the database:', error);
// // // })
// // // let User = require("./models/user");
// // const seq = require("./models/index");
// // seq.sync({force: true}).then((res) => console.log(res)).catch((err) => console.log(err))
// // // session settings
// // // app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))