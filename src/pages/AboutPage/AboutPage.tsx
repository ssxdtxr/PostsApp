import React from 'react';
import {Layout} from "../../components/layout/Layout";
import {Container} from "../../components/container/Container";
import styles from "./AboutPage.module.scss"
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const AboutPage = () => {
    return (
        <Layout title={'About Page'}>
            <Container>
                <NavLink to='/'>
                    <Button variant="primary">HomePage</Button>{' '}
                </NavLink>
                <h1>About me</h1>
                <div className={styles.about}>
                    <div className={styles.introduction}>
                        <h2>Привет, меня зовут Егор!</h2>
                        <p>Я работоспособный, ответственный, любящий делать красоту во frontend'е javascript
                            разработчик)</p>
                    </div>
                    <div className={styles.main}>
                        <div>
                            <h2>Обо мне:</h2>
                            <p>
                                Опыт разработки на javascript: 6 месяцев;
                                Опыт разработки на react: 4 месяца
                                Есть опыт написания SPA, Next.js Aplication
                                Хорошее понимание ООП, алгоритмов, структур данных
                            </p>
                        </div>
                        <div>
                            <h2>Основной стек:</h2>
                            <p>
                                -Языки программирования: JavaScript, TypeScript;
                                -Вёрстка: HTML5, CSS3, SCSS, SCSS modules(адаптивная верстка, кроссбраузерная верстка,
                                flex, grid сетки);
                                -State Manager: Redux Toolkit;
                                -Работа с запросами: fetch, axios, react query;
                                -React, React-router-dom, Next.js;
                                -UI библиотеки: framer motion, slick-slider, swiper;
                            </p>
                        </div>
                        <div>
                            <h2>Работа в команде:</h2>
                            <p>
                                -Контроль версий: Git, CI/CD, Git Flow;
                                -Работа с дизайнерами: FIgma;
                                -Работа с backend'ом: Swagger;
                                -BackLog: Trello, Jira;
                            </p>
                        </div>
                        <div>
                            <h2>Проекты:</h2>
                            <p>
                                -Лендинг компании: <a href="https://ssxdtxr.github.io/Belka/">https://ssxdtxr.github.io/Belka/</a>
                                -React-typescript-todo: <a href="https://ssxdtxr.github.io/TodoReact/">https://ssxdtxr.github.io/TodoReact/</a> 
                                Также имеется Next-typescript-kinopoisk, но по определенным причинам он не выложен на vercel(есть на git: <a
                                href="https://github.com/ssxdtxr">https://github.com/ssxdtxr</a>)
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};
