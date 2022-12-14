let express = require("express");
let fs = require("fs");
let mysql = require("mysql");
let cors = require("cors");
const { json } = require("express");

let app = express();

app.use(express.urlencoded({ extended: true }));
// or
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());
app.use(express.json());
let corsOptions = {
  origin: ["https://www.yohannes7.com", "http://localhost:7777"],
  ptionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
//create dbconnection
let mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yam123",
  database: "mydb",
});
// connecting to database
mysqlConnection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("db connected:");
  }
});
// table create with itself execusions
// let createTable = `CREATE TABLE if not exists  tableWithoutBrowser(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))`;
// mysqlConnection.query(createTable, (err, result) => {
//   if (err) throw err;
//   console.log("table created :");
// });

// crate tables while we vist the local host at/install
app.get("/install", function (req, res) {
  let msg = "tables are created !";
  // table..1 products.
  let table1Products = `CREATE TABLE if not exists Products(
products_id int auto_increment,
products_url varchar(255) not null,
products_name varchar(255) not null,
PRIMARY KEY (products_id)
    )`;

  // table-2 productDescription
  let table2ProductDescription = `CREATE TABLE if not exists ProductDescription(
      description_id int(11) auto_increment,
      products_id int(10) not null,
      product_brief_description varchar(255) not null,
      product_description varchar(255) not null,
      product_img varchar(255) not null,
      product_link varchar(255) not null,
      PRIMARY KEY (description_id),
      FOREIGN KEY (products_id) REFERENCES Products(products_id)
  )`;
  // table3  productPrice
  let table3ProductPrice = `CREATE TABLE if not exists ProductPrice(
        price_id int(10) auto_increment,
        products_id int not null,
        starting_price varchar(255) not null,
        price_range varchar(255) not null,
        PRIMARY KEY (price_id),
        FOREIGN KEY (products_id) REFERENCES Products(products_id)
        
    )`;

  //product table ..toshow values from all table collectivly
  let table4Product = `CREATE TABLE if not exists Product(
        product_id int auto_increment,
        name varchar(255) not null,
        Description varchar(255) not null,
        Price int(20) not null,
        Monthly_plan varchar(255) not null,
        url varchar(255) not null,
        img varchar(255) not null,
        PRIMARY KEY (product_id)

    )`;
  // table 5 user
  let table5User = `CREATE TABLE if not exists User(
        user_id int(10) auto_increment,
        user_name varchar(255) not null,
        user_password varchar(255) not null,
        PRIMARY KEY (user_id)
    )`;

  // table 4 -orderes
  // products_id int(10) not null,
  // user_id int(10) not null,
  let table4Orders = `CREATE TABLE if not exists Orders(
        order_id int(10) auto_increment,
        PRIMARY KEY (order_id),
        user_id int(10) not null,
        products_id int(10) not null,
        FOREIGN KEY (products_id) REFERENCES Products(products_id),
        FOREIGN KEY (user_id) REFERENCES User(user_id)
          
    )`;

  // querying tables
  // query table 1
  mysqlConnection.query(table1Products, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  // query table 2
  mysqlConnection.query(
    table2ProductDescription,
    function (err, results, fields) {
      if (err) {
        console.log(err.message);
      }
    }
  );

  // query table 3
  mysqlConnection.query(table3ProductPrice, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  // query table 4
  mysqlConnection.query(table4Product, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    } else {
      console.log("product table created");
    }
  });

  // query table 5
  mysqlConnection.query(table5User, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  // query table6

  mysqlConnection.query(table4Orders, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
  res.end(msg);
});
//#####################3
// add-iphone route
app.post("/addiphones", (req, res) => {
  let prod_name = req.body.prod_name;
  let prod_url = req.body.prod_url;
  let prod_br_desc = req.body.product_brief_description;
  let prod_desc = req.body.product_description;
  let prod_img = req.body.product_img;
  let prod_link = req.body.product_link;
  let starting_price = req.body.starting_price;
  let price_range = req.body.price_range;
  let userName = req.body.uName;
  let userPassword = req.body.upassword;
  // const {
  //   prod_url,
  //   prod_name,
  //   prod_br_desc,
  //   prod_desc,
  //   prod_img,
  //   prod_link,
  //   starting_price,
  //   price_range,
  //   price,
  //   Monthly_plan,
  // } = req.body;
  // const { prod_br_desc, prod_desc, img, link } = req.body;
  console.table(req.body);
  let prod_id = 0;
  let productsnsert = `INSERT INTO Products(products_url,products_name) VALUES ('${prod_url}','${prod_name}')`;
  mysqlConnection.query(productsnsert, (err, result, fields) => {
    if (err) throw err;
    else {
      console.log("prodcut added!!");
    }
  });

  //#####################
  //insertion into users
  let insertionIntoUser = `INSERT INTO User(user_name,user_password) VALUES ('${userName}','${userPassword}')`;
  mysqlConnection.query(insertionIntoUser, (err, result, fields) => {
    if (err) throw err;
    else {
      console.log("user_name&password added :)");
    }
  });

  //#####################
  //insert into productDesription table
  let getId = `SELECT products_id FROM Products where products_url='${prod_url}'`;
  mysqlConnection.query(getId, (err, results, fields) => {
    prod_id = results[0].products_id;
    if (err) throw err;
    else {
      if (prod_id != 0) {
        let products_discription = `INSERT INTO productdescription(products_id,product_brief_description,product_description,product_img,product_link) VALUES ('${prod_id}','${prod_br_desc}',"${prod_desc}","${prod_img}","${prod_link}")`;
        mysqlConnection.query(products_discription, (err, results, fields) => {
          if (err) throw err;
          else {
            console.log("product_discription table is inserted :)");
          }
        });
      }
    }
  });
  //##################
  // insert to productprice
  let getProd_id = 0;
  let selectfromproducts = `SELECT * FROM Products where products_url='${prod_url} '`;
  mysqlConnection.query(selectfromproducts, (err, results, fields) => {
    getProd_id = results[0].products_id;
    if (err) throw err;
    else {
      if (getProd_id != 0) {
        let products_price = `INSERT INTO productprice(products_id,starting_price,price_range) VALUES('${getProd_id}','${starting_price}','${price_range}')`;

        mysqlConnection.query(products_price, (err, results, fields) => {
          if (err) throw err;
          else {
            console.log("product-price is inserted :)");
          }
        });
      }
    }
  });

  //##################
  //insertion into Orders
  let { getproducts_id, getuserId } = 0;
  let getIdforOreders = `SELECT products_id FROM Products where products_url='${prod_url}'`;
  mysqlConnection.query(getIdforOreders, (err, results, fields) => {
    getProd_id = results[0].products_id;
    if (err) throw err;
    else {
      let iduser = 0;
      let getIdUser = `SELECT user_id FROM User where user_name='${userName}'`;
      mysqlConnection.query(getIdUser, (err, results, fields) => {
        iduser = results[0].user_id;
        if (err) throw err;
        else {
          if (getProd_id != 0 && iduser != 0) {
            let ordersInsert = `INSERT INTO Orders(user_id,products_id) VALUES ('${getProd_id}','${iduser}')`;
            mysqlConnection.query(ordersInsert, (err, result, fields) => {
              if (err) throw err;
              else {
                console.log("order is  added!! :)");
              }
            });
          }
        }
      });
    }
  });

  res.end("thank you :we save your product:");
});
//#########################
//#selecting with joining##
//#########################
//#########################
app.get("/iphones", (req, res) => {
  let method1selection = `SELECT * FROM products p JOIN productdescription pd JOIN productprice pp ON p.product_id = pd.product_id AND p.product_id = pp.product_id`;
  mysqlConnection.query(method1selection, (err, rows, fields) => {
    let iphones = { product: [] };
    iphones.product = rows;
    var stringIphones = JSON.stringify(iphones);
    if (err) throw err;
    else {
      res.send(stringIphones);
      // console.log(stringIphones);
    }
  });
});
app.get("/iphones/:pid", (req, res) => {
  let singleProduct = `SELECT FROM products p JOIN  productdescription pd JOIN productprice pp where product_id=pid`;
  mysqlConnection.query(singleProduct, (err, rows, fields) => {
    let item = { prod: [] };
    item.prod = rows;
    let stringProd = JSON.stringify(item);
    if (err) throw err;
    else {
      res.send(stringProd);
    }
  });
});
// let selectProduct = `select * from Products `;this select all value from products tab
app.get("/product", (req, res) => {
  //method1 using join method
  let selectProduct = `SELECT p.products_name, p.products_url, pp.price_range, pp.starting_price, pd.product_img, pd.product_link FROM Products p INNER JOIN productprice pp on p.products_id = pp.products_id INNER JOIN productdescription pd on p.products_id = pd.products_id`;
  //method 2 using parent child relationship
  let method2 = `SELECT products_name,products_url,price_range,starting_price,product_img,product_link From Products p, productprice pp, productdescription pd where p.products_id=pp.products_id AND p.products_id=pd.products_id`;
  //method 3 from inner join
  let method3 = `SELECT * FROM Products p JOIN productdescription pd JOIN productprice pp ON p.products_id = pd.products_id AND p.products_id = pp.products_id`;
  //cross join method 3
  let x = `SELECT products_name,products_url,price_range,starting_price from Products cross join Productprice`;
  mysqlConnection.query(x, (err, results, fields) => {
    if (err) console.log("Error :):", err);
    console.log(results);
    // let insertIntoProduct = `INSERT INTO product(name,Description,Price,Monthly_plan,url,img) VALUES ('${results[0].products_name}','${results[1].product_link}','${results[2].starting_price}','${results[3].price_range}','${results[4].products_url}','${results[5].products_img}')`;
    // mysqlConnection.query(insertIntoProduct, (err, res, fields) => {
    //   if (err) console.log("am error :" + err);
    //   else console.log("successed");
    // });
    res.send(results);
    // console.table(results);
    // console.log(results);
    console.log("right:?");
  });
});
//#########################
// update using 'put'
// app.put('/update', (req, res) = {
// });

//delete using 'put'
// app.put('/delete', (req, res) => {
// })

//#########################
// connected to the port number
app.listen(7777, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("listening at port ..");
  }
});
