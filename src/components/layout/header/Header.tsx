import React, {useState} from 'react';
import styles from "./Header.module.scss"
import {Menu} from "../../Menu/Menu";
import { motion } from "framer-motion"


const menuVariants = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0,
    }
}

export const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)

    const toogleHamburger = (): void => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className={styles.header}>
            <div className={styles.menu} onClick={toogleHamburger}>
                {
                    hamburgerOpen ?
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
            <h1>Posts App</h1>
            {
                hamburgerOpen &&
                    <motion.div
                        initial='hidden'
                        animate='visible'
                        variants={menuVariants}
                    >
                        <Menu/>
                    </motion.div>
            }
        </div>
    );
};

