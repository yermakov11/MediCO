const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const indexRoute = require("./src/routes/index");
const registerRoute = require("./src/routes/register");
const loginRoute = require("./src/routes/login");
const productRoute=require("./src/routes/product");
const showProductRoute=require("./src/routes/showProducts");
const sendProductRoute=require("./src/routes/sendProduct");
const deleteProductRoute=require("./src/routes/delete");
const editProductRoute=require("./src/routes/edit");

app.use("/", indexRoute);
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/product",productRoute);
app.use("/product",showProductRoute);
app.use("/send_product",sendProductRoute);
app.use("/:id",deleteProductRoute);
app.use("/product/:id",editProductRoute);

mongoose
  .connect(
    "mongodb+srv://admin:22832214881337@devcluster.c6zbdov.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connect mongoDB"))
  .catch((error) => {
    console.error(`Something wrong with DB ${error}`);
  });

app.listen(PORT, () => {
  console.log(`Server started ${PORT}`);
});
