import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addPost, RootStateType, updateNewPostText} from "./redux/state";

export let rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} postMessage={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'),
    );
};  

