const {
  findProducts,
  findProductById,
  insertProducts,
  deleteProduct,
  editProduct,
} = require("./product.repository");

const getAllProducts = async () => {
  const products = await findProducts();
  return products;
};

const getProductsById = async (id) => {
  if (isNaN(id)) {
    throw new Error("ID is NaN");
  }

  const product = await findProductById(id);

  if (!product) {
    throw new Error("data tidak ditemukan");
  }

  return product;
};

const createNewProduct = async (newProductData) => {
  const product = await insertProducts(newProductData);
  return product;
};

const deleteProductById = async (id) => {
   await getProductsById(id);
   await deleteProduct(id);
};

const editProductById = async (id, productData) => {
  try {
    return await editProduct(id, productData);
  } catch (error) {
    throw Error(error)
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
  createNewProduct,
  deleteProductById,
  editProductById,
};
