import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
   return (
    <div>
      <div>
       <img src='https://www.gettyimages.dk/gi-resources/images/500px/983703508.jpg' alt='bg'></img>
      </div>
      <div className={s.decriptionBlock}>
        ava+desc
      </div>
    </div>
   );
}
export default ProfileInfo;