import React from 'react';
import {MyPosts} from "./myPosts/myPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfileStateType = {
    profilePage: profilePage
    postMessage: (message: string) => void
    updateNewPostText: (newText: string) => void

}

export type profilePage = {
    postsData: Array<PostType>
    newPostText: string
}

export type PostType = {
    id: number
    message: string
    likes: string
}


export function Profile(props: ProfileStateType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                updateNewPostText={props.updateNewPostText}
                posts={props.profilePage}
                newPostText={props.profilePage.newPostText}
                postMessage={props.postMessage}/>
        </div>
    )
}