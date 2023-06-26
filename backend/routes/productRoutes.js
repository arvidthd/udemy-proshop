import express from "express";
const router = express.Router();
import { getProducts, getProductById } from "../controllers/productController.js"

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from '../models/productModel.js';


//@EXP : this is when you're not using controller
// router.get('/', asyncHandler(async (req, res) => {
//     // res.json(products);
//     const products = await Product.find({});

//     res.json(products);
// }));

// router.get('/:id', asyncHandler(async (req, res) => {
//     // const product = products.find((p) => p._id === req.params.id);
//     const product = await Product.findById(req.params.id);

//     if (product) {
//         res.json(product);
//     } else {
//         res.status(404);
//         throw new Error('Resource not found');
//     }

// }));

export default router;