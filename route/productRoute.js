// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');
const productCreateController=require('../controller/productCreateController')

router.get('/products', productsController.getAllProducts);
router.post('/products', productCreateController.createProduct);
router.get('/products/:id', productsController.getProductById);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);
router.post('/add-product', productCreateController.addProduct);

module.exports = router;
