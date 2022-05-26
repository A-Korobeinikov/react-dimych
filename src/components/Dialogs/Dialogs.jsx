import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });
  let messagesElement = props.state.messages.map((el) => {
    return <Message message={el.message} id={el.id} />;
  });
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElement}</div>
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>add</button>
      </div>
    </div>
  );
};

export default Dialogs;
