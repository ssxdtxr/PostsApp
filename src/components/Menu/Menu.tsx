import React, {FC} from 'react';
import styles from "./Menu.module.scss"
import cn from "classnames";
import {NavLink} from "react-router-dom";

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.title}>Post Menu</div>
            <ul>
                <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>
                    <li>
                        Список постов
                    </li>
                </NavLink>

                <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ''}>
                    <li>
                        Обо мне
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

