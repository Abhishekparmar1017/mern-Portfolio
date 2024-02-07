const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// dotenv configurartion
dotenv.config();

// rest object
const app = express();

// midlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/portfolio/", require("./Routes/PoRoutes"));

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`Server runing on Port ${PORT}`);
});
