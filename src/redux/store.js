import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message:'Hi, how are you', likesCount: 20},
                {id: 2, message:'Its, are you' , likesCount: 3},
                {id: 3, message:'I love IT' , likesCount: 15},
              ],
              newPostText: "it-kamasutra.com",
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Petya" },
            { id: 3, name: "Vasya" },
            ]
        }
    },
    _callSubscribe() {
        console.log('state changes')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch(action) {
        //type: 'ADD-POST'

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscribe(this._state)
        
    }
}





export default store;
window.store = store;