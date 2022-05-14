import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
   return (
    <div className={s.content}>
    <div>
     <img src='https://www.gettyimages.dk/gi-resources/images/500px/983703508.jpg' alt='bg'></img>
    </div>
    <div>
      ava+desc
    </div>
    <MyPosts />
  </div>
   );
}
export default Profile;