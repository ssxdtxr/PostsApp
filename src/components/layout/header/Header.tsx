import React, {useState} from 'react';
import styles from "./Header.module.scss"
import {Menu} from "../../Menu/Menu";
import { motion } from "framer-motion"
import { NavLink} from "react-router-dom";

export const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)

    const toogleHamburger = (): void => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className={styles.header}>
            <div className={styles.menu} onClick={toogleHamburger}>
                {
                    !hamburgerOpen ?
                        <div className={styles.closed}>
                            <span></span>
                        </div>
                        :
                        <div className={styles.opened}>
                            <span></span>
                            <span></span>
                        </div>
                }
            </div>
            <NavLink className={styles.mainLink} to="/">
                <h1>Posts App</h1>
            </NavLink>
            {
                hamburgerOpen && <Menu toogleHamburger={toogleHamburger}/>
            }
        </div>
    );
};

