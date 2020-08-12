import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import {Prejunior} from "./components/Prejunior/Prejunior";
import {Junior} from "./components/Junior/Junior";
import {JuniorPlus} from "./components/Junior+/Junior+";
import {Nav} from "./components/nav/Nav";

function App() {
    return (
        <HashRouter>
            <div>
                <div>
                    <Nav/>
                </div>
                <div>
                    <Route path="/prejunior" component={Prejunior}/>
                    <Route path="/junior" component={Junior}/>
                    <Route path="/juniorPlus" component={JuniorPlus}/>
                    {/*<Prejunior/>*/}
                    {/*<Junior/>*/}
                    {/*<JuniorPlus/>*/}
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
