import React from 'react';
import s from '../myName.module.css'

type propsType = {
    one: string;
    two: string;
    three: string
}

export function Name (props: propsType) {
    return (
            <div className={s.text_area} >
               <p className={s.text}> {props.one} {props.two} {props.three}</p>
            </div>
    )
}