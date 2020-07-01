import React from 'react';
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={s.image} src="https://onlinepngtools.com/images/examples-onlinepngtools/desert.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}