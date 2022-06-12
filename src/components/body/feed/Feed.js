import React, {useEffect, useState} from 'react'
import './Feed.css'
import StoryReel from './storyreel/StoryReel'
import MessageSender from './messagesender/MessageSender'
import Post from './post/Post'
import db from '../../../firebase/firebase'
import FlipMove from 'react-flip-move'
import axios from 'axios'

function Feed() {
    const [posts,setPosts] = useState([]);
    
    useEffect( () => {
        let isMounted = true;
        
        if (isMounted) {
            /*db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data()})))
            );*/
            fetchPosts()
        }

        return () => { 
            isMounted = false 
        };
    },[]);
    
    async function fetchPosts() {
        const res = await axios.get('/api/posts')
        console.log(res.data)
        setPosts(res.data.data)
    }

    return (
        <div className="feed_container">
            <StoryReel/>
            <MessageSender/>
            {posts.map((post) => (
                <FlipMove typeName={null}>
                    <Post
                        key = {post._id}
                        id = {post._id}
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
