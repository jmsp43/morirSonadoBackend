const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connection;
// const itemsData = require("./utilities/data");
const routesController = require("./controllers/routes");
const Items = require("./models/itemSchema");
require("dotenv").config();

const app = express();
const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3001;

//connecting to mongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//error and disconnection messages
db.on("error", (error) => console.log(error.message + " MongoDB not running"));
db.on("disconnected", () => console.log("mongoDB disconnected"));

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
//tell express to use the public directory for static files, including index.html as the route of the application.
//Then attach React to that file

// Routes
app.use(routesController);
// telling server.js to get the routes from controllers folder

// Seeding
//don't know if i need to do this with a food delivery service?
// app.get('/seed', async (req, res) => {
//     await Items.deleteMany({});
//     await Items.insertMany(itemsData);
//   });

app.listen(PORT, () => {
  console.log(
    '"I never seen so many Dominican women with cinnamon tans" - Will Smith, at port',
    PORT
  );
});
