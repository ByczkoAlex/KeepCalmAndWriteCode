let rerenderTree = () => {
    console.log("state is changed")
};

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likes: string
}

export type myPosts = {
    // messageForNewPost: string,
    postsData: Array<PostType>
    newPostText: string

}

export type messagesPage ={
    dialogData: Array<DialogType>
    messagesData: Array<MessageType>
}

export type RootStateType = {
    profilePage: myPosts
    dialogsPage: messagesPage
    updateNewPostText?: () => void

}

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hi! How are you?", likes: "likes: 15"},
            {id: 2, message: "It is my first post", likes: "likes: 17"},
        ],
        newPostText: "it-kamasutra.com"
    },
    dialogsPage: {
        dialogData: [
            {id: 1, name: "Anastasia"},
            {id: 2, name: "ilya"},
            {id: 3, name: "Evgeniy"},
            {id: 4, name: "Katya"},
            {id: 5, name: "Alena"},
        ],
        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "privet"},
            {id: 3, message: "Hello"},
            {id: 4, message: "Gutten Tag"},
            {id: 5, message: "yo"}
        ]
    },
};

export const addPost = () => {
    let  newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likes: "0"
    };
    state.profilePage.postsData.unshift(newPost);
    rerenderTree();
};

export const subscribe = (observer : any) => {   // ЧТО ВМЕСТО ANY?
    rerenderTree = observer
};


export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderTree();
};


export default state;