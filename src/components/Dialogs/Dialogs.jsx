import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer'



const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });
  let messagesElement = state.messages.map((el) => {
    return <Message message={el.message} id={el.id} />;
  });
  let newMessageBody = state.newMessageBody;
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text)
  }

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}> 
       {messagesElement}
      </div>
      <div>
        <textarea value={ newMessageBody }
                  onChange={onNewMessageChange}
                  placeholder='Enter your message'></textarea>
      </div>
      <div>
        <button onClick={onSendMessageClick}>send</button>
      </div>
      </div>
    
  );
};

export default Dialogs;
