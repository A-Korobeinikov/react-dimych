import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = () => {
    let  postData = [
      {id: 1, message:'Hi, how are you', likesCount: 20},
      {id: 2, message:'Its, are you' , likesCount: 3},
      {id: 3, message:'I love IT' , likesCount: 15},
    ]
    let posts = postData.map((el) => {
      return <Post message = {el.message} like = {el.likesCount}/>
    })
   return (
     <div className={s.postsBlock}> 
     <div>
      <h3>My post</h3>
      <div>New Post</div>
      <div className={s.posts}>
        {posts}
      </div>
    </div>
  </div>
   );
}
export default MyPosts;