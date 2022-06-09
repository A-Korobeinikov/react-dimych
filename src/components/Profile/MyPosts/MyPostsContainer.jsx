
import {addPostActionCreator, updateNewPostActionCreator} from  '../../../redux/profile-reducer';
import MyPosts from './MyPosts'
import { connect } from 'react-redux';


const mapStoreToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {dispatch(updateNewPostActionCreator(text));},
    addPost: () => {dispatch(addPostActionCreator())}
  }
}
const MyPostsContainer = connect(mapStoreToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;