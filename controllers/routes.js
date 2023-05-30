const express = require("express");
const Router = express.Router();
const { Item, Order } = require("../models/Order")

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

//new
//handled in react?

//delete
Router.delete("/deleteItem/:id", (req, res) => {
  const deletedItem = req.params.id;
  Order.findByIdAndRemove(deletedItem);
  res.json({ message: deletedItem, message2: Order });
});

//update
Router.put("/updateOrder/:id", (req, res) => {
  const updatedItem = req.params.id;
  Order.findByIdAndUpdate(updatedItem);
  res.json({ message: updatedItem, message2: Order });
});

//create
// Router.post('/newOrder/', (req, res)=>{
//   Order.create(
//     //put items in here
//   )
// })

//edit
//handled in react?

//show
Router.get("/menu/:name", async (req, res) => {
  const wantedItem = req.params;
  const foundItem = await Item.find({ name: wantedItem.name });
  //find by id and update based on id not name
  res.json(foundItem);
});

module.exports = Router;
