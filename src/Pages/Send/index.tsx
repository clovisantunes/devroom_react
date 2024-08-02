import React, { useEffect } from 'react';
import NavBar from '../../components/Navbar';
import SubTexts from '../../components/UI/SubTexts';
import TitleText from '../../components/UI/TitleText';
import styles from './styles.module.scss';
import { gtag } from 'ga-gtag';

export default function Send() {
    useEffect(() => {
        gtag('event', 'conversion', {'send_to': 'AW-16543818384/uucHCOKVoaoZEJDF2tA9'});
    }, []);

    return (
        <>
            <NavBar 
                home="/"
                about="#portfolio"
                contact="/contact"
                services="#services"  
                portfolio='#portfolio'
            />
            <div className={styles.sendContainer}>
                <div className={styles.sendContent}>
                    <TitleText 
                        colorText='black'
                        text='E-mail enviado com sucesso!'
                    />
                </div>
                <div className={styles.sendImage}>
                    <SubTexts 
                        colorText='black'
                        text='Agradecemos seu contato'
                    />
                    <div className={styles.mailImg} />
                    <div className={styles.textMail}>
                        <span>
                            Em breve retornaremos o contato
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
