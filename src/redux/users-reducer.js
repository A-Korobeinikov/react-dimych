const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/03/MyCollages-kopiya-4.jpg', followed: false, fullName: 'Anton',status:'i am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/03/MyCollages-kopiya-4.jpg', followed: true, fullName: 'Petya',status:'i am ok', location: {city: 'Orsha', country: 'Belarus'}},
        {id: 3, photoUrl: 'https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/03/MyCollages-kopiya-4.jpg', followed: true, fullName: 'Vasya',status:'i am a dog', location: {city: 'Gomel', country: 'Belarus'}},
        {id: 4, photoUrl: 'https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/03/MyCollages-kopiya-4.jpg', followed: false, fullName: 'Kolya',status:'i like ice-cream', location: {city: 'Mogilev', country: 'Belarus'}},
        {id: 5, photoUrl: 'https://s2.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/03/MyCollages-kopiya-4.jpg', followed: true, fullName: 'Sveta',status:'i am girl', location: {city: 'Vtb', country: 'Belarus'}},
      ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {  
        case FOLLOW: 
        return {
            ...state,
            users: state.users.map = (u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
            }),            
        }
        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map = (u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u
            }),            
        }
        case SET_USERS: 
        return {
            ...state,
            users: [...state.users, ...action.users]
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;