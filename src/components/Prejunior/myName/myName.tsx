import React from 'react';
import {Name} from "./name/name";
import s from './myName.module.css'


function MyName() {
    return (
        <div>
            <Name one={"Быцко"} two={"Алексей"} three={"Александрович"}/>
        </div>
    );
}

export default MyName

