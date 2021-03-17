const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");

const productRoutes = require("./routes/product.routes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome in DB BCDShop!! :)  => /api/products");
});

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.once("open", () => console.log("Wow!! You're connected to the database!"));
db.on("error", (error) => console.log("Error " + error));

app.listen(config.PORT, function () {
  console.log(`Server is running on port: 8000`);
  console.log(`Happy coding`);
});
