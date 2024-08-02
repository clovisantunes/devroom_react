import { useEffect } from 'react';
import { ButtonUI } from '../UI/ButtonUi';
import SubTexts from '../UI/SubTexts';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import wordIcon from '../../assets/images/earth.png';
import searchIcon from '../../assets/images/Search.png';
import paidIcon from '../../assets/images/metrics.png';
import rocketIcon from '../../assets/images/rocket.png';

export default function Banner() {
    const icons = {
        word: {
            name: "word",
            icon: wordIcon,
            text: "Posicione sua empresa no digital"
        },
        search: {
            name: "search",
            icon: searchIcon,
            text: "Aumente a visibilidade da sua empresa"
        },
        paidSearch: {
            name: "paidSearch",
            icon: paidIcon,
            text: "Faça campanhas de tráfego pago"
        },
        rocket: {
            name: "rocket",
            icon: rocketIcon,
            text: "Impulsione o crescimento da sua empresa"
        }
    };

    const { t } = useTranslation();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    <TitleText colorText='#0C0C0C' text={t('servicesMain')} />
                    <span>Impulsione o crescimento da sua empresa com a DevRoom, desenvolvendo um site ágil e eficiente.</span>
                    <div className={styles.bannerIcons}>
                        {Object.entries(icons).map(([key, { name, icon, text }]) => (
                            <div key={key} className={styles.iconContainer}>
                                <img src={icon} alt={text} className={styles[`${name}`]} />
                                <p className={styles.iconText}>{text}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.bannerButton}>
                        <SubTexts colorText='#0C0C0C' text={t("bannerText")} />
                    </div>
                </div>
            </div>
        </>
    );
}
