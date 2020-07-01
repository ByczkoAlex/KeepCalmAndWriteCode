import React from 'react';
import s from './myPosts.module.css'
import {Post} from "./posts/Post";
import {PostType, myPosts} from "../../../redux/state";

type MyPostsType = {
    posts: myPosts
    postMessage: (message: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.postsData.map((p: PostType) => <Post key={p.id} message={p.message} likes={p.likes}/>);

    let NewPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (NewPostElement.current)
            // НЕ РАБОТАЕТ ЭДД ПОСТ
        props.postMessage (NewPostElement.current.value);
        props.updateNewPostText('')
    };
    // ЗАНУЛИТЬ ТЕКСТ В ИНПУТЕ ПОСЛЕ ОТРАБОТКИ ФУНКЦИИ !!!!

    let onPostChange = () => {
        if (NewPostElement.current)
        props.updateNewPostText(NewPostElement.current.value)
    };

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div>
                New post
            </div>
            <div>
                <textarea ref={NewPostElement} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}