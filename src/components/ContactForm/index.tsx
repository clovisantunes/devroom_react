"use client"
import React, { useEffect, useState } from 'react';
import InputUi from '../UI/InputUi/index';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';
import SubTexts from '../UI/SubTexts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface ContactProps {
    title: string;
    service: string;
    id: string;
}

export default function ContactForm({ title, service,  id }: ContactProps) {
    const { t, i18n } = useTranslation();
    const [message, setMessage] = useState(`${t('buy')} ${service}-${title}.`);

    useEffect(() => {
      setMessage(`${t('buy')} ${service}-${title}.`);
    }, [service, title, t]);
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    useEffect(() => {
        setMessage(`${t('buy')} ${service}-${title}!`);
    }, [title]);

    useEffect(() => {
        setIsFormValid(name.trim() !== '' && email.trim() !== '' && phone.trim() !== '');
    }, [name, email, phone]);

    const encodeMessage = (message: string) => {
        return encodeURIComponent(message);
    };

    const phoneNumber = '5551981399275';

    const customWhatsMessage = t('name') + name + " " + t('email') + " " + email + ". " + message;

    const whatsappLink = `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}&text=${encodeMessage(customWhatsMessage)}`;

    const handleWhatsappClick = () => {
        if (!isFormValid) {
            toast.error('Por favor, preencha todos os campos.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        } else {
            window.open(whatsappLink, '_blank');
            window.location.href = '/';
        }
    };

    return (
        <>
            <ToastContainer />
            <div className={styles.contactContainer} id='contact'>
                <div className={styles.contactForm}>
                    <div className={styles.textContactForm}>
                        <TitleText
                            colorText='white'
                            text={t('reminder')}
                        />
                        <SubTexts
                            colorText='white'
                            text={t('remindertext')}
                        />
                    </div>
                    <form className={styles.formContainer} action="#">
                        <TitleText
                            colorText='white'
                            text={t('enterContact')}
                        />
                        <div className={styles.card}>
                            <InputUi
                                id='name'
                                label='name'
                                labelName='Nome:'
                                onChange={(e) => setName(e.target.value)}
                                placeholder={t('enterName')}
                                type='text'
                                name='name'
                            />
                        </div>
                        <div className={styles.card}>
                            <InputUi
                                id='phone'
                                label='phone'
                                labelName='Telefone:'
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder={t('enterPhone')}
                                type='text'
                                name='phone'
                            />
                        </div>
                        <div className={styles.card}>
                            <InputUi
                                id='email'
                                label='name'
                                labelName='Email:'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('enterEmail')}
                                type='text'
                                name='email'
                            />
                        </div>
                        <div className={styles.textareaCard}>
                            <label htmlFor="message">{t('message')}</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder={t('enterMessage')}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={styles.textareaField}
                                disabled={true}
                            ></textarea>
                        </div>
                        <div className={styles.submitContainer}>
                            <button className={styles.submitButton} type="submit" onClick={handleWhatsappClick} >
                                <Link to={"/"}>
                                    {t('submit')}
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
