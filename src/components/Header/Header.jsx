import React from 'react'
import s from'./Header.module.css'

const Header = () => {
   return (
    <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/2048px-Circle-icons-image.svg.png' alt='avatar'></img>
    </header>
   );
}
export default Header;