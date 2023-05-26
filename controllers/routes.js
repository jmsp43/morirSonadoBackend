const express = require('express')
const Router = express.Router()
const Items = require('../models/items')


Router.get(('/'),(req, res) => {
      res.send("Bienvenidos a Morir Soñando")
  })
  
 
 // Index : Show all the things - GET /food
Router.get("/food", async(req, res) => {
      try {
          const allFood = await Items.find({})
          res.render("Index", { items: allFood })
      }
      catch (error) {
          console.log(error.message)
      }
  });


//new



//delete



//update



//create



//edit



//show



module.exports = Router