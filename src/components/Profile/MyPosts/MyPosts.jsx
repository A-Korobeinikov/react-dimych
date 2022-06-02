import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostActionCreator} from  '../../../redux/profile-reducer'


const MyPosts = (props) => {
    let postsElement = props.posts.map((el) => {
      return <Post message = {el.message} like = {el.likesCount}/>
    })
    let newPostElement = React.createRef();
    let addPost = () => {
      props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      let action = updateNewPostActionCreator(text);
      props.dispatch(action);
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