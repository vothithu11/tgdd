import express from 'express';
import { getProducts, getIdProduct, createProduct, updateProduct, deleteProduct} from '../controllers/product.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getIdProduct);
router.post('/', auth, createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);



export default router;

