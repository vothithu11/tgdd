import express from 'express';
import { createOrder, getOrders } from '../controllers/order.js';
import auth from '../middleware/auth.js';
const router = express.Router();
router.post('/',createOrder);
router.get('/',auth, getOrders);
export default router;