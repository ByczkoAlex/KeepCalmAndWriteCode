import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Nav} from "./components/nav/Nav";
import {Profile} from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStateType,} from "./redux/state";

export type StateType = {
    state: RootStateType
    postMessage: (message: string) => void
    updateNewPostText: (newText: string) => void
}

function App(props: StateType) {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Nav/>
                <div className="app_wrapper_content">
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogData={props.state.dialogsPage.dialogData}
                        messagesData={props.state.dialogsPage.messagesData}/>} />
                    <Route path="/profile" render={() => <Profile
                        profilePage={props.state.profilePage}
                        postMessage={props.postMessage}
                        updateNewPostText={props.updateNewPostText}
                        />} />
                    <Route path="/news" render={() => <News/>} />
                    <Route path="/music" render={() => <Music/>} />
                    <Route path="/settings" render={() => <Settings/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
