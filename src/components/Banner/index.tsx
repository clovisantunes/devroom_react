import { useEffect, useTransition } from 'react';
import { ButtonUI } from '../UI/ButtonUi';
import SubTexts from '../UI/SubTexts';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';

export default function Banner(){
    const { t, i18n } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return(
        <>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    <TitleText  colorText='white' text={t('bannerTitle')}/>
                    <SubTexts colorText='white' text={t("bannerText")}/>
                    <div className={styles.bannerButton} data-aos="fade-up">
                        <ButtonUI   fontSize='24px' height='100%'  localPath='services'  text={t("bannerButton")}  width='100%'/>
                    </div>
                </div>
            </div>
        </>
    )
}