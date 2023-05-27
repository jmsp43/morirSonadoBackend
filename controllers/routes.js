const express = require("express");
const Router = express.Router();
const Items = require("../models/itemSchema");

Router.get("/", (req, res) => {
  res.send("Bienvenidos a Morir Soñando");
});

// Index : Show all the things - GET /food
Router.get("/food", async (req, res) => {
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
