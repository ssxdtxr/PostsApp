import React, {FC} from 'react';
import styles from "./Menu.module.scss"
import {NavLink} from "react-router-dom";
import {links} from "../ui/Links";

interface IMenu {
    toogleHamburger: () => void
}

export const Menu: FC<IMenu> = ({toogleHamburger}) => {
    return (
        <div className={styles.menu}>
            <div className={styles.title}>Post Menu</div>
            <ul>
                {
                    links.map(link => (
                        <NavLink onClick={() => toogleHamburger()} to={link.link}
                                 className={({isActive}) => isActive ? styles.active : ''}>
                            <li>
                                {link.name}
                            </li>
                        </NavLink>
                    ))
                }
            </ul>
        </div>
    );
};

