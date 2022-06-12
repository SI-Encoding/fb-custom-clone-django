const express = require('express')

const PostController = require('../controllers/posts-controller')

const router = express.Router()

router.post('/post', PostController.createPost)
router.put('/post/:id', PostController.updatePost)
router.delete('/post/:id', PostController.deletePost)
router.get('/post/:id', PostController.getPostById)
router.get('/posts', PostController.getAllPosts)
router.get('/gif/posts', PostController.getGifPosts)
router.get('/your/posts/:id', PostController.getYourPosts)
router.get('/others/posts/:id', PostController.getOthersPosts)

module.exports = router