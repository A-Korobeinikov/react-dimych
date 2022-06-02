const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Petya" },
        { id: 3, name: "Vasya" },
        { id: 4, name: "Kolya" },
        { id: 5, name: "Sveta" },
        { id: 6, name: "Rita" },
      ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "it's ok" },
        { id: 4, message: "I learning react" },
        { id: 5, message: "I am Frontend developer" },
        { id: 6, message: "I love IT" },
      ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 7, message: body },);
        return state;
        default:
            return state;
    }
    
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;