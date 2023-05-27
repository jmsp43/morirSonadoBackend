const express = require("express");
const Router = express.Router();
const Items = require("../models/itemSchema");
const Order = require('../models/orderSchema')

Router.get("/", (req, res) => {
  res.json(
    { message: "Bienvenidos a Morir Soñando" });
});

// Index : Show all the food - GET /menu
Router.get("/menu", async (req, res) => {
  try {
    const allFood = await Items.find({});
    res.send(allFood);
  } catch (error) {
    console.log(error);
  }
});

//new

//delete
// Router.delete('/:id', (req, res) => {
//     const deletedItem = req.params.id
//     Items.findByIdAndRemove(deletedItem)
//     res.json(deletedItem)
// })

//update

//create

//edit

//show
Router.get("/:id", (req, res) => {
  const foundItem = req.params.id;
  Items.findById(foundItem);
  res.json(foundItem);
});

module.exports = Router;
