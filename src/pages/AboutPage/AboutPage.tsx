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
                        <div className={styles.title}>Привет, меня зовут Егор!</div>
                        <p>Я работоспособный, ответственный, любящий делать красоту во frontend'е javascript
                            разработчик)</p>
                    </div>
                    <div className={styles.main}>
                        <div>
                            <div className={styles.title}>Обо мне:</div>
                            <p>
                                Опыт разработки на javascript: 6 месяцев;
                                Опыт разработки на react: 4 месяца
                                Есть опыт написания SPA, Next.js Aplication
                                Хорошее понимание ООП, алгоритмов, структур данных
                            </p>
                        </div>
                        <div>
                            <div className={styles.title}>Основной стек:</div>
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
                            <div className={styles.title}>Работа в команде:</div>
                            <p>
                                -Контроль версий: Git, CI/CD, Git Flow;
                                -Работа с дизайнерами: FIgma;
                                -Работа с backend'ом: Swagger;
                                -BackLog: Trello, Jira;
                            </p>
                        </div>
                        <div>
                            <div className={styles.title}>Проекты:</div>
                            <p>
                                -Лендинг компании: <a href="https://ssxdtxr.github.io/Belka/">https://ssxdtxr.github.io/Belka/</a>
                                -React-typescript-todo: <a href="https://ssxdtxr.github.io/TodoReact/">https://ssxdtxr.github.io/TodoReact/</a> 
                                Также имеется Next-typescript-kinopoisk, но по определенным причинам он не выложен на vercel(есть на git: <a
                                href="https://github.com/ssxdtxr">https://github.com/ssxdtxr</a>)
                            </p>
                        </div>
                        <div className={styles.feedback}>
                            <div className={styles.title}>Обратная связь:</div>
                            <ul>
                                <li>
                                    VK: <a href="https://vk.com/e.ter67">https://vk.com/e.ter67</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};
