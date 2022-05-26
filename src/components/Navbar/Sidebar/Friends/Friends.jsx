import React from "react";
import s from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div className={s.friend}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Friends;