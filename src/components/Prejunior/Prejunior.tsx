import React from 'react';
import {Hello} from "./hi/Hi";
import {MyHobby} from "./Hobbys/Hobbys";
import Message from "./message/message";
import MyName from "./myName/myName";

export function Prejunior() {
    return (
        <div>
            <div>
                <MyName/>
            </div>
            <div>
                <Hello/>
            </div>
            <div>
                <MyHobby/>
            </div>
            <div>
                <Message/>
            </div>
        </div>

    )
}




