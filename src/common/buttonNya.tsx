import s from '../components/Prejunior/hi/Hi.module.css'
import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    {onKeyPressSayHello: (e: any) => void};


export function ButtonNya (props: ButtonNyaPropsType) {
    return <button className={s.buttonNya} onClick={props.onKeyPressSayHello} {...props}>
        Press
    </button>
}
