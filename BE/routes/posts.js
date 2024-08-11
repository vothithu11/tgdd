import express from 'express';
import { getPosts, getIdPost, createPost, updatePost, deletePost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getIdPost);
router.post('/', auth, createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);



export default router;

