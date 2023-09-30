const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const { createPostController, 
        getAllPostController, 
        getUserPostsController, 
        deletePostController, 
        updatePostController} = require("../controllers/postController");

//router object
const router = express.Router();

// create post || post
router.post('/create-post', requireSignIn, createPostController)

// get al post
router.get('/get-all-posts', getAllPostController)

// get user post
router.get('/get-user-post', requireSignIn, getUserPostsController)


//Delete post
router.delete('/delete-post/:id',requireSignIn,deletePostController)


// Update Post
router.put("/update-post/:id",requireSignIn, updatePostController)

//export
module.exports = router;