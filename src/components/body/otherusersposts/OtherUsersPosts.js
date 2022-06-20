import React, { useEffect, useState } from 'react'
import Post from '../feed/post/Post'
import db from '../../../firebase/firebase'
import FlipMove from 'react-flip-move'
import '../feed/Feed.css'
import {useSelector} from 'react-redux'
import axios from 'axios'

function GifPosts() {
    const [posts,setPosts] = useState([]);
    const user = useSelector((state) => state.user)

    useEffect( () => {
        let isMounted = true;
        
        if (isMounted) {
        fetchPosts()
        }

        return () => {
            isMounted = false
        }
    },[]);

    async function fetchPosts() {
        const res = await axios.get(`/api/others/posts/${user.id}`)
        console.log(res.data)
        setPosts(res.data)
    }
   
    return (
        <div className='feed_container'>
            {posts.map((post) => (
                <FlipMove typeName={null}>
                    <Post
                        key = {post._id}
                        id = {post.id}
                        profilePic = {post.profilePic}
                        message = {post.message}
                        timestamp = {post.createdAt}
                        username = {post.username}
                        image = {post.image}
                        favourite = {post.favourite}
                        userId = {post.userId}
                    />
                </FlipMove>
            ))}
        </div>
    )
}

export default GifPosts
