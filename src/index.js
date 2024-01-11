const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
const app = express();

dotenv.config(); //akses proccess env
app.use(express.json()) //parse json

//port
const PORT = process.env.PORT;

app.use(cors())
//crud api
app.get("/", (req, res) => {
  res.send("Hello ini adalah API muh fitrah ramadhan ");
}); 

const controllerProduct = require('./product/product.controller')
app.use('/products', controllerProduct)

app.listen(PORT || 2000, () => {
  console.log(`API is running PORT ${PORT}`);
});


export default app