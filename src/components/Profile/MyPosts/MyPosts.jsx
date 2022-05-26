import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) => {
    let postsElement = props.posts.map((el) => {
      return <Post message = {el.message} like = {el.likesCount}/>
    })
    let newPostElement = React.createRef();
    let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text)
    }



   return (
     <div className={s.postsBlock}> 
     <div>
      <h3>My post</h3>
      <div>
        <div>
          <textarea  ref={newPostElement} cols="10" rows="5"></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add</button>
        </div>
      </div>
      <div>New Post</div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  </div>
   );
}
export default MyPosts;