import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost, RootStateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} postMessage={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'),
    );
};


rerenderTree(state);

subscribe(rerenderTree);

serviceWorker.unregister();