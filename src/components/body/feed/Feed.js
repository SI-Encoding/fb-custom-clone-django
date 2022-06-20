import React, {useEffect, useState} from 'react'
import './Feed.css'
import StoryReel from './storyreel/StoryReel'
import MessageSender from './messagesender/MessageSender'
import Post from './post/Post'
import FlipMove from 'react-flip-move'
import axios from 'axios'

function Feed() {
    const [posts,setPosts] = useState([])
    
    useEffect( () => {
        let isMounted = true;
        
        if (isMounted) {
            fetchPosts()
        }

        return () => { 
            isMounted = false 
        };
    },[]);
    
    async function fetchPosts() {
        const res = await axios.get('/api/post')
        setPosts(res.data)
    }

    return (
        <div className="feed_container">
            <StoryReel/>
            <MessageSender/>
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

export default Feed
