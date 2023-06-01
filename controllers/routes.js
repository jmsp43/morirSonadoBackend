const express = require("express");
const Router = express.Router();
const { Item, Order } = require("../models/Order");


Router.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a Morir Soñando" });
});

// Index : Show all the food - GET /menu
Router.get("/menu", async (req, res) => {
  try {
    const allFood = await Item.find({});
    res.send(allFood);
  } catch (error) {
    console.log(error);
  }
});


Router.get("/receipt", async (req, res) => {
  try {
    const allOrders = await Order.find({});
    res.send(allOrders);
  } catch (error) {
    console.log(error);
  }
});


//new
//handled in react?

//delete
Router.delete("/:id", async(req, res) => {
  const deletedOrder = req.params.id;
  await Order.findByIdAndDelete(deletedOrder)
  console.log(deletedOrder)
  res.json({ message: deletedOrder});
});



//update
Router.put("/:id", async (req, res) => {
  const updatedItem = req.params.id;
  await Item.findByIdAndUpdate(updatedItem, req.body);
  res.json({ message: updatedItem});
});

//create
Router.post('/newOrder', (req, res) => {
  const createdOrder = req.body
  Order.create(createdOrder)
  res.json({ message: createdOrder })
})

//edit
//handled in react?

//show
Router.get("/menu/:name", async (req, res) => {
  const wantedItem = req.params.name;
  const foundItem = await Item.find({ name: wantedItem });
  res.json(foundItem);
});

module.exports = Router;
