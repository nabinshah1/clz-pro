import express from 'express';
import {listProduct,addProduct,removeproduct,singleProduct} from '../controllers/productController.js'
import uplodad from '../middleware/multer.js';
import adminAuthentication from '../middleware/adminAuth.js';

const productRouter =express.Router();

productRouter.post('/add',adminAuthentication ,uplodad.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
productRouter.post('/remove', adminAuthentication,removeproduct);
productRouter.post('/singe',singleProduct);
productRouter.post('/list',listProduct);

export default productRouter

