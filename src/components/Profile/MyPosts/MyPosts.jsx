import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'


const MyPosts = (props) => {
    let postsElement = props.posts.map((el) => {
      return <Post message = {el.message} like = {el.likesCount}/>
    })
    let newPostElement = React.createRef();

    let onAddPost = () => {
      props.addPost();
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }

   return (
     <div className={s.postsBlock}> 
     <div>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} cols="15" rows="5" value={props.newPostText} />
        </div>
        <div>
          <button onClick={ onAddPost }>Add</button>
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