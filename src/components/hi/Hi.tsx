import React, {ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import s from './Hi.module.css'
import {InputNya} from "../../common/inputNya";
import {ButtonNya} from "../../common/buttonNya";
import {v1} from "uuid";

export function Hello() {

    let [title, setTitle] = useState<string>("");
    let [people, setPeople] = useState([] as Array<{ name: string, id: string }>);

    const sayHello = () => {
        if (title.trim() !== "") {
            alert('Hi ' + title);
        }
        setTitle("");
        let newArr = [...people, {name: title, id: v1()}];
        setPeople(newArr)
    };

    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    const onKeyPressSayHello = (e: React.KeyboardEvent<HTMLButtonElement> |  React.KeyboardEvent<HTMLInputElement>) => {
       debugger
            sayHello()
    };


    return (
        <div className={s.wrapper}>
            <div>
                <div><InputNya
                    onTitleChange={onTitleChange}
                    onKeyPressSayHello={onKeyPressSayHello}
                /></div>
                <div><ButtonNya
                    onKeyPressSayHello={onKeyPressSayHello}
                /></div>
                <div><span></span></div>
            </div>
            <div>
                {
                    people.map(el => <div>{el.name}</div>)
                }
            </div>
        </div>
    )
}








