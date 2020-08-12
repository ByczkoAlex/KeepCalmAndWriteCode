import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes,} from "react";
import s from '../components/Prejunior/hi/Hi.module.css'

type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string,
    onKeyPressSayHello : (e: React.KeyboardEvent<HTMLInputElement>) => void,
    onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void
};

export function InputNya (props: InputNyaPropsType) {
    const {onEnter, error, ...restProps} = props;

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {

        if (e.charCode === 13) {
            onEnter && onEnter();
            props.onKeyPressSayHello(e);
        }
    };

    return (
        <>
            <input className={s.inputNya} onKeyPress={onKeyPress} onChange={props.onTitleChange}{...restProps} type="text"/>
            {error ? <span>{error}</span> : null}
        </>
    );
}