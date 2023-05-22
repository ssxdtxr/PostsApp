import React, {FC, PropsWithChildren} from 'react';
import styles from "./Layout.module.scss"
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import Helmet from "react-helmet"
import {Outlet} from "react-router-dom";
export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.app}>
            <Helmet>
                <title>Posts App</title>
            </Helmet>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

