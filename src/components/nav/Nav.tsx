import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <div className={s.nav}>
            <nav>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/prejunior" activeClassName={s.active}>Prejunior</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/junior" activeClassName={s.active}>Junior</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/JuniorPlus" activeClassName={s.active}>Junior+</NavLink>
                </div>
            </nav>
        </div>
    )
}