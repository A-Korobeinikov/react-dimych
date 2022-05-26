import { renderEntrieTree } from './../render';

let state = {
    profilePage: {
        posts: [
            {id: 1, message:'Hi, how are you', likesCount: 20},
            {id: 2, message:'Its, are you' , likesCount: 3},
            {id: 3, message:'I love IT' , likesCount: 15},
          ]
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
    },
    sidebar: {
        friends: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Petya" },
        { id: 3, name: "Vasya" },
        ]
    }
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    renderEntrieTree(state);
}

export default state;