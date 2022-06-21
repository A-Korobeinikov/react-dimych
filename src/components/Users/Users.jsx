import axios from "axios";
import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {

      axios.get("/users")

    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/03/MyCollages-kopiya-4.jpg",
        followed: false,
        fullName: "Anton",
        status: "i am a boss",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/03/MyCollages-kopiya-4.jpg",
        followed: true,
        fullName: "Petya",
        status: "i am ok",
        location: { city: "Orsha", country: "Belarus" },
      },
      {
        id: 3,
        photoUrl:
          "https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/03/MyCollages-kopiya-4.jpg",
        followed: true,
        fullName: "Vasya",
        status: "i am a dog",
        location: { city: "Gomel", country: "Belarus" },
      },
      {
        id: 4,
        photoUrl:
          "https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/03/MyCollages-kopiya-4.jpg",
        followed: false,
        fullName: "Kolya",
        status: "i like ice-cream",
        location: { city: "Mogilev", country: "Belarus" },
      },
      {
        id: 5,
        photoUrl:
          "https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/03/MyCollages-kopiya-4.jpg",
        followed: true,
        fullName: "Sveta",
        status: "i am girl",
        location: { city: "Vtb", country: "Belarus" },
      },
    ]);
  }
  return (
    <div>
      {" "}
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="img" className={style.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country},</div>
              <div>{u.location.city}</div>
              <div></div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
