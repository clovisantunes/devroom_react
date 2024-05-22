"use client"
import { useEffect } from 'react';
import ImageUi from '../UI/ImageUi';
import SubTexts from '../UI/SubTexts';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';


interface AboutProps {
    id: string;
}

export default function About({  id }: AboutProps) {
    const { t, i18n } = useTranslation();
    const imgPath = "https://uploaddeimagens.com.br/images/004/739/501/full/DevRoom.png?1707860363";
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className={styles.about_container} id={id}>
            <div className={styles.aboutCard}>
                <div className={styles.imgCard}>
                <ImageUi
                        alt='Imagem lateral texto'
                        height={1980}
                        width={1080}
                        path={imgPath}
                    />
                </div>
                <div className={styles.aboutTextContainer} data-aos="fade-right">
                <TitleText
                        colorText='black'
                        text={t('aboutTitle')}
                    />
                     <SubTexts
                        colorText='black'
                        text={t('subAboutText')}
                    />
                </div>
            </div>
        </div>
    )
}