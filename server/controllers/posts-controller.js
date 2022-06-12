const Post = require('../models/posts-model')

createPost = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No request has been provided',
        })
    }

    const post = new Post(body)

    if (!post) {
        return res.status(400).json({ success: false, error: err })
    }

    post.save().then(() => {
        return res.status(201).json({
            success: true,
            id: post._id,
            message: 'Post has been successfully created!',
        })
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'Post could not be created!',
        })
    })
}

updatePost = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No request has been provided',
        })
    }

    Post.findOne({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'No posts have been found',
            })
        }
        
        post.message = body.message
        post.profilePic = body.profilePic
        post.username = body.username
        post.userId = body.userId
        post.image = body.image
        post.gif = body.gif

    post.save().then(() => {
        return res.status(200).json({
            success: true,
            id: post._id,
            message: 'Post successfully has been updated!',
        })
    }).catch(error => {
        return res.status(404).json({
            error,
            message: 'Post could not update!',
        })
      })   
    })
}

deletePost = async (req, res) => {
    await Post.findOneAndDelete({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!post) {
            return res.status(404).json({ success: false, error: `No posts have been found` })         
        }

        return res.status(200).json({ success: true, data: post })
    }).catch(err => console.log(err))
}

getPostById = async (req, res) => {
    await Post.findOne({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!post) {
            return res.status(404).json({ success: false, error: `No posts have been found` })       
        }
        return res.status(200).json({ success: true, data: post })
    }).catch(err => console.log(err))
}

getAllPosts = async (req, res) => {
    await Post.find({}).sort({createdAt: -1}).exec((err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!posts.length) {
            return res.status(404).json({ success: false, error: `No posts have been found` })       
        }
        return  res.status(200).json({ success: true, data: posts })
    }).catch(err => console.log(err))            
}
            
getGifPosts = async (req, res) => {
    await Post.find({gif: true}).sort({createdAt: -1}).exec((err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!posts.length) {
            return res.status(404).json({ success: false, error: `No posts have been found` })     
        }
        return  res.status(200).json({ success: true, data: posts })
    }).catch(err => console.log(err))            
}
            
getYourPosts = async (req, res) => {
    await Post.find({userId: req.params.id}).sort({createdAt: -1}).exec((err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!posts.length) {
            return res.status(404).json({ success: false, error: `No posts have been found` })        
        }
        return  res.status(200).json({ success: true, data: posts })       
    }).catch(err => console.log(err))
}

getOthersPosts = async (req, res) => {
    await Post.find({$not: { userId: { $not: {$eq: req.params.id} }}}).sort({createdAt: -1}).exec((err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!posts.length) {
            return res.status(404).json({ success: false, error: `No posts have been found` })  
        }
        return  res.status(200).json({ success: true, data: posts }) 
    }).catch(err => console.log(err))
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getAllPosts,
    getPostById,
    getAllPosts,
    getGifPosts,
    getYourPosts,
    getOthersPosts
}