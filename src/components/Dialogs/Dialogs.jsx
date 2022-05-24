import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "dialog/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Petya" },
    { id: 3, name: "Vasya" },
    { id: 4, name: "Kolya" },
    { id: 5, name: "Sveta" },
    { id: 6, name: "Rita" },
  ];
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "it's ok" },
    { id: 4, message: "I learning react" },
    { id: 5, message: "I am Frontend developer" },
    { id: 6, message: "I love IT" },
  ];

  let dialogsElements = dialogsData.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });
  let messagesElement = messagesData.map((el) => {
    return <Message message={el.message} id={el.id} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
