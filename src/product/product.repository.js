const prisma = require('../db')

const findProducts = async () => {
try {
    const product = await prisma.product.findMany();
    return product;
} catch (error) {
throw Error(error)
}
}

const findProductById = async (id) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    return product;
  } catch (error) {
    throw Error(error)
  }
}

const insertProducts = async (newProductData) => {
 try {
   const product = prisma.product.create({
     data: {
       name: newProductData.name,
       description: newProductData.description,
       price: newProductData.price,
       image: newProductData.image,
     },
   });

   return product;
 } catch (error) {
  throw Error(error)
 }
}

const deleteProduct = async (id) => {
  try {
     await prisma.product.delete({
       where: {
         id,
       },
     });
  } catch (error) {
    throw Error(error)
  }
}


const editProduct = async (id, productData) => {
try {
  const product = prisma.product.update({
    where: {
      id,
    },
    data: {
      name: productData.name,
      description: productData.description,
      price: productData.price,
      image: productData.image,
    },
  });
  return product;
} catch (error) {
  throw Error(error)
}
}

module.exports = {
  findProducts,
  findProductById,
  insertProducts,
  deleteProduct,
  editProduct
}