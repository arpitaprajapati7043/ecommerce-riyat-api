
const express = require('express');

const ProductModel = require('../models/productModel');


// exports.getAllProducts = async (req, res) => {
//     try {
//         // Fetch all products from the database
//         const products = await ProductModel.find();

//         // Respond with the list of products along with the success message
//         res.status(200).json(products);
//     } catch (error) {
//         // If an error occurs, respond with the error message
//         res.status(500).json({ message: error.message });
//     }
// };


exports.getAllProducts = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await ProductModel.find();

        // Map the products to the desired format
        const formattedProducts = products.map(({ id, title, price, description, category, image, rating }) => ({
            id: id,
            title,
            price,
            description,
            category,
            image,
            rating,
        }));

        // Respond with the list of formatted products along with the success message
        res.status(200).json(formattedProducts);
    } catch (error) {
        // If an error occurs, respond with the error message
        res.status(500).json({ message: error.message });
    }
};


// exports.getProductById = async (req, res) => {
//     try {
//         const productId = req.params.id;
//         const product = await ProductModel.findOne({id:productId});
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };



exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await ProductModel.findOne({ id: productId });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const { _id, ...productWithoutId } = product.toObject(); // Convert Mongoose document to plain JavaScript object
        res.status(200).json(productWithoutId);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = await ProductModel.findOneAndUpdate(productId, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await ProductModel.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


