import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useHistory } from 'react-router-dom';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState({
        '1': {
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
        '2': {
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
        '3': {
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
    });

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

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        })
    }

    const deleteCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        })
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
                <div className={styles.container}>
                    <Editor 
                        cards={cards} 
                        addCard={createOrUpdateCard} 
                        updateCard={createOrUpdateCard} 
                        deleteCard={deleteCard}
                    />
                    <Preview cards={cards} />
                </div>
            <Footer />
        </section>
    );
};

export default Maker;