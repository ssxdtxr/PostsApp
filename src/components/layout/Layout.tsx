import React, {FC, PropsWithChildren} from 'react';
import styles from "./Layout.module.scss"
import {Header} from "./header/Header";
import Helmet from "react-helmet"
export const Layout: FC<PropsWithChildren & {title: string}> = ({children, title}) => {
    return (
        <div className={styles.app}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header />
            {children}
        </div>
    );
};

