import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = () => {
   return (
     <div>
     <div>
      My post
      <div>New Post</div>
      <div className={s.posts}>
        <Post message = 'Hi, how are you' like = 'likes: 20'/>
        <Post message = 'Its, are you' like = 'likes: 15'/>
      </div>
    </div>
  </div>
   );
}
export default MyPosts;