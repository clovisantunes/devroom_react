import React, { useEffect, useState } from 'react';
import InputUi from '../UI/InputUi/index';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';
import SubTexts from '../UI/SubTexts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LogoUi from '../UI/LogoUi';
import { ButtonContact, ButtonServices, ButtonUI } from '../UI/ButtonUi';
import Aos from 'aos';
import 'aos/dist/aos.css';

interface ContactProps {
    title: string;
    service: string;
    id: string;
}

export default function ContactForm({ title, service, id }: ContactProps) {
    const { t, i18n } = useTranslation();
    const [message, setMessage] = useState(`${t('buy')} ${service}-${title}.`);

    useEffect(() => {
        setMessage(`${t('buy')} ${service}-${title}.`);
    }, [service, title, t]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [nameVisible, setNameVisible] = useState(false); 
    const [phoneVisible, setPhoneVisible] = useState(false); 
    const [emailVisible, setEmailVisible] = useState(false); 
    const [buttonsVisible, setButtonsVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false); 
    const [buttonVisible, setButtonVisible] = useState(false); 

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

    const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
    const [contactPreference, setContactPreference] = useState<string>('');

    const customWhatsMessage = `${t('name')}: ${name}\n${t('email')}: ${email}\n${t('Poderia me dar retorno por: ')}: ${contactPreference}\n${t('Gostaria de contratar serviços de:')}: ${selectedButtons.join(', ')}\n${t('Descrição do projeto:')}: ${message}`;

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

    const buttons = [
        { text: 'Website' },
        { text: 'Blogs' },
        { text: 'E-commerce' },
        { text: 'Design' },
        { text: 'Marketing Digital' },
        { text: 'SEO/Google Ads' }
    ];

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const [buttonStyles, setButtonStyles] = useState(buttons.map(() => ({ background: '#FFFFFF', color: 'black' })));
    const toggleButtonStyle = (index: number, text: string) => {
        setButtonStyles(prevStyles =>
            prevStyles.map((style, i) =>
                i === index
                    ? {
                        background: style.background === '#FFFFFF' ? 'var(--colors-neutral-900)' : '#FFFFFF',
                        color: style.color === 'black' ? 'white' : 'black'
                    }
                    : style
            )
        );
        setNameVisible(true);

        setSelectedButtons(prevSelected => {
            if (prevSelected.includes(text)) {
                return prevSelected.filter(button => button !== text);
            } else {
                return [...prevSelected, text];
            }
        });
    };

    const [contactButtonStyles, setContactButtonStyles] = useState([
        { background: '#FFFFFF', color: 'black' },
        { background: '#FFFFFF', color: 'black' }
    ]);

    const toggleContactButtonStyle = (index: number, text: string) => {
        setContactButtonStyles(prevStyles =>
            prevStyles.map((style, i) =>
                i === index
                    ? {
                        background: style.background === '#FFFFFF' ? 'var(--colors-neutral-900)' : '#FFFFFF',
                        color: style.color === 'black' ? 'white' : 'black'
                    }
                    : style
            )
        );
        setTextVisible(true);
        setContactPreference(text);
    };

    return (
        <>
            <ToastContainer />
            <div className={styles.contactContainer} id='contact'>
                <div className={styles.contactForm}>
                    <div className={styles.textContactForm}>
                        <div className={styles.logoCard}>
                            <LogoUi
                                alt='logo DevRoom'
                                height={100}
                                width={100}
                                priority
                            />
                        </div>
                        <div className={styles.textTitle}>
                            <TitleText
                                colorText='white'
                                text={t('reminder')}
                                span={"!"}
                            />
                        </div>
                        <div className={styles.textSubTitle}>
                            <SubTexts
                                colorText='#ABA9AB'
                                text={t('remindertext')}
                                span={"."}
                            />
                        </div>
                    </div>

                    <form className={styles.formContainer} action="#">
                        <div className={styles.buttonContainer}>
                            <div className={styles.textButons}>
                                <TitleText
                                    colorText='white'
                                    text={t('enterContact')}
                                    span='?'
                                />
                                <SubTexts
                                    colorText='#ABA9AB'
                                    text='Você poderá selecionar mais que uma opção'
                                />
                            </div>
                            <div className={styles.buttonsCard}>
                                {buttons.map((button, index) => (
                                    <div className={styles.buttonCard} key={index} onClick={() => toggleButtonStyle(index, button.text)}>
                                        <ButtonServices
                                            key={index}
                                            background={buttonStyles[index].background}
                                            color={buttonStyles[index].color}
                                            text={button.text}
                                            height='40px'
                                            localPath=''
                                            width='100%'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {nameVisible && (
                            <div className={`${styles.card} ${styles.fadeIn}`}>
                                <div className={styles.aboutTitle}>
                                    <TitleText
                                        colorText='white'
                                        text={t('Sobre')}
                                        span=':'
                                    />
                                </div>
                                <InputUi
                                    id='name'
                                    label='name'
                                    labelName='Nome:'
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setPhoneVisible(true); 
                                    }}
                                    placeholder={t('enterName')}
                                    type='text'
                                    name='name'
                                />
                            </div>
                        )}
                        {phoneVisible && (
                            <div className={`${styles.card} ${styles.fadeIn}`}>
                                <InputUi
                                    id='phone'
                                    label='phone'
                                    labelName='Telefone:'
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                        setEmailVisible(true);
                                    }}
                                    placeholder={t('enterPhone')}
                                    type='text'
                                    name='phone'
                                />
                            </div>
                        )}
                        {emailVisible && (
                            <div className={`${styles.card} ${styles.fadeIn}`}>
                                <InputUi
                                    id='email'
                                    label='name'
                                    labelName='Email:'
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setButtonsVisible(true);
                                    }}
                                    placeholder={t('enterEmail')}
                                    type='text'
                                    name='email'
                                />
                            </div>
                        )}
                        { buttonsVisible && (
                            <div className={styles.buttonCardContact}>
                                <SubTexts
                                colorText='#ABA9AB'
                                text={"Prefencia de contato"}
                                span={":"}
                            />
                                <div className={styles.buttonOptions} onClick={() => toggleContactButtonStyle(0, 'whatsapp')}>
                                    <ButtonServices
                                        text="whatsapp"
                                        fontSize='16px'
                                        height='40px'
                                        localPath=''
                                        width='100%'
                                        background={contactButtonStyles[0].background}
                                        color={contactButtonStyles[0].color}
                                    />
                                </div>
                                <div className={styles.buttonOptions} onClick={() => toggleContactButtonStyle(1, 'E-mail')}>
                                    <ButtonServices
                                        text="E-mail"
                                        fontSize='16px'
                                        height='40px'
                                        localPath=''
                                        width='100%'
                                        background={contactButtonStyles[1].background}
                                        color={contactButtonStyles[1].color}
                                    />
                                </div>
                            </div>
                        )}
                        {textVisible && (
                            <div className={`${styles.textareaCard} ${styles.fadeIn}`}>
                                <label htmlFor="message">{"Deixe uma breve descrição do seu projeto aqui:"}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder={t('enterMessage')}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                        setButtonVisible(true);
                                    }}
                                    className={styles.textareaField}
                                    disabled={false}
                                ></textarea>
                            </div>
                        )}
                        {buttonVisible && (
                            <div className={styles.submitContainer}>
                                <button className={styles.submitButton} type="submit" onClick={handleWhatsappClick}>
                                    <Link to={"/"}>
                                        {t('submit')}
                                    </Link>
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}
