import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useHistory } from 'react-router-dom';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'light',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        },
        {
            id: '2',
            name: 'bis',
            company: 'GIT',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'bis92@gmail.com',
            message: 'rest',
            fileName: 'bis',
            fileURL: 'bis.png'
        },
        {
            id: '3',
            name: 'bje',
            company: 'shoppingmal',
            theme: 'dark',
            title: 'private business',
            email: 'bje95@gmail.com',
            message: 'not today',
            fileName: 'bje95',
            fileURL: null
        }
    ])
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
                <div className={styles.container}>
                    <Editor cards={cards} />
                    <Preview cards={cards} />
                </div>
            <Footer />
        </section>
    );
};

export default Maker;