const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message:'Hi, how are you', likesCount: 20},
        {id: 2, message:'Its, are you' , likesCount: 3},
        {id: 3, message:'I love IT' , likesCount: 15},
      ],
      newPostText: "it-kamasutra.com",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };          
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }        
        default: 
        return state;
    }
    
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;