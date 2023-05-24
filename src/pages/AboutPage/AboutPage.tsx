import React from 'react';
import {Layout} from "../../components/layout/Layout";
import {Container} from "../../components/container/Container";
import styles from "./AboutPage.module.scss"
import {Button} from "react-bootstrap";
import { NavLink} from "react-router-dom";

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
                        <div className={styles.title}>Привет, меня зовут Егор!</div>
                        <p>
                            Я работоспособный, ответственный, любящий делать красоту во frontend'е javascript
                            разработчик)
                        </p>
                    </div>
                    <div className={styles.main}>
                        <div>
                            <div className={styles.title}>Обо мне:</div>
                            <ul>
                                <li>
                                    Опыт разработки на javascript: 6 месяцев
                                </li>
                                <li>
                                    Опыт разработки на react: 4 месяца
                                </li>
                                <li>
                                    Есть опыт написания SPA, Next.js Aplication
                                </li>
                                <li>
                                    Хорошее понимание ООП, алгоритмов, структур данных
                                </li>
                                <li>
                                    Хорошее понимание клиент сервера
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles.title}>Основной стек:</div>
                            <ul>
                                <li>
                                    Языки программирования: JavaScript, TypeScript
                                </li>
                                <li>
                                    Вёрстка: HTML5, CSS3, SCSS, SCSS modules(адаптивная верстка, кроссбраузерная верстка, flex, grid сетки)
                                </li>
                                <li>
                                    State Manager: Redux Toolkit
                                </li>
                                <li>
                                    Работа с запросами: fetch, axios, react query
                                </li>
                                <li>
                                    React, React-router-dom, Next.js
                                </li>
                                <li>
                                    UI библиотеки: framer motion, slick-slider, swiper
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles.title}>Работа в команде:</div>
                            <ul>
                                <li>
                                    Контроль версий: Git, CI/CD, Git Flow
                                </li>
                                <li>
                                    Работа с дизайнерами: FIgma
                                </li>
                                <li>
                                    Работа с backend'ом: Swagger
                                </li>
                                <li>
                                    BackLog: Trello, Jira
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles.title}>Проекты:</div>
                            <ul>
                                <li>
                                    Лендинг компании: <a target="_blank" href="https://ssxdtxr.github.io/Belka/">https://ssxdtxr.github.io/Belka/</a>
                                </li>
                                <li>
                                    React-typescript-todo: <a target="_blank" href="https://ssxdtxr.github.io/TodoReact/">https://ssxdtxr.github.io/TodoReact/</a>
                                </li>
                                <li>
                                    Также имеется Next-typescript-kinopoisk, но по определенным причинам он не выложен на
                                    vercel(есть на git: <a target="_blank" href="https://github.com/ssxdtxr">https://github.com/ssxdtxr</a>)
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles.title}>Обратная связь:</div>
                            <ul>
                                <li>
                                    VK: <a target="_blank" href="https://vk.com/e.ter67">https://vk.com/e.ter67</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};
