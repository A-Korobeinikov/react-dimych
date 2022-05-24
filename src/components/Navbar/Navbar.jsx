import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
   return (
    <nav className={s.nav}>
        <div className = {s.item}>
            <NavLink to='/profile' className={navActive => navActive.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to='/dialogs' className={navActive => navActive.isActive ? s.active : s.item}>Messages</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to='/news' className={navActive => navActive.isActive ? s.active : s.item}>News</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to='/music' className={navActive => navActive.isActive ? s.active : s.item}>Music</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to='/settings' className={navActive => navActive.isActive ? s.active : s.item}>Settngs</NavLink>
        </div>
     </nav>
   );
}
export default Navbar;