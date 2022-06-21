import {createStore, combineReducers}  from 'redux'
import sidebarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';


let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers, composeWithDevTools());

window.store = store;

export default store;