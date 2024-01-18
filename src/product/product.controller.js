const express = require('express')
const router = express.Router()
const { getAllProducts, getProductsById, createNewProduct, deleteProductById, editProductById } = require('./product.service')
router.get("/", async (req, res) => {
  try { 
    // response(300, await getAllProducts(), 'success', res)
    res.send(await getAllProducts());
  } catch (error) {
    res.status(400).send(error.message)
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id; 
    res.send(await getProductsById(productId));
  } catch (error) {
   res.status(400).send(error.message)
  }
});

router.post("/", async (req, res) => {
  try {
    const newProductData = req.body;
    const product = await createNewProduct(newProductData);
    res.send({
      dataProduct: product,
      message: "succes created",
    });
  } catch (error) {
    res.send(error.message)
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    await deleteProductById(productId);
    res.send({
      message: `success deleted product id: ${productId}`,
    });
  } catch (error) {
    res.status(400).send(error.message)
  }
});

router.put("/:id", async (req, res) => {
  const productData = req.body;
  const productId = req.params.id
  const lengthObject = Object.keys(productData).length;

  if (lengthObject != 4) {
    return res.send("gagal karna data yang dimasukkan tidak lengkap");
  }

 const product = await editProductById(productId, productData)

  res.send({
    message: "success put data",
    dataUpdate: product,
  });
});

router.patch("/:id", async (req, res) => {
try {
    const productId = req.params.id;
    const productData = req.body;
    const product = await editProductById(productId, productData);
    res.send({
      dataUpdate: product,
      message: "success menggunakan metode patch",
    });
} catch (error) {
  res.send(error.message)
}
});

module.exports = router