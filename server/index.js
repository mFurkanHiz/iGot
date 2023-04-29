// defining express package
const express = require("express");

// defining cors package
const cors = require("cors");

// database and model connection
const database = require("./database");
const userModel = require("./routes/usersRoute");
const productModel = require("./routes/productsRoute");

// connected to express library by using app named middleware
const app = express();

// used json req and res by app middleware
app.use(express.json());
// prevented errors caused for req and res usage by using cors
app.use(cors());

// Database model conduction by endpoints
app.use("/api/users", userModel);
app.use("/api/products", productModel);

//serverımızı inşa edeceğimiz portu belirledik.
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server [UP], Port: [${PORT}]`);
});