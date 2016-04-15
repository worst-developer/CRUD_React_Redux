import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();

router.route('/getPosts').get(PostController.getPosts);

router.route('/getPost').get(PostController.getPost);

router.route('/addPost').post(PostController.addPost);

router.route('/deletePost').post(PostController.deletePost);

export default router;
