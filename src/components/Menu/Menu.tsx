import React, {FC} from 'react';
import styles from "./Menu.module.scss"
import cn from "classnames";
import {NavLink} from "react-router-dom";

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.title}>Post Menu</div>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>
                        Список постов
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ''}>Обо мне</NavLink>
                </li>
            </ul>
        </div>
    );
};

