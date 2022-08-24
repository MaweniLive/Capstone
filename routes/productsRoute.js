const express = require("express");
const router = express.Router();
const con = require("../lib/dbConnection");

//Get all product
router.get("/", (req, res) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    con.query("SELECT * FROM products", (err, result) => {
      if (err) throw err.message;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error)
  }
});

  //Get a single product
router.get("/:id", (req, res) => {
  try {
    con.query(
      `SELECT * FROM products WHERE product_id = ${req.params.id}`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//Insert a new product
router.post("/", (req, res) => {
  const { name, category, description, imgURL, price, user_id, quantity } =
    req.body;
  try {
    con.query(
      `INSERT INTO products (name, category, description, imgURL, price, 
        user_id, quantity) 
      values 
      ('${name}', '${category}', '${price}', 
      '${description}','${imgURL}', 
      '${user_id}', '${quantity}') `,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
