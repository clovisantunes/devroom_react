import { useEffect } from 'react';
import { ButtonUI } from '../UI/ButtonUi';
import SubTexts from '../UI/SubTexts';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';
import Aos from 'aos';

export default function Banner(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return(
        <>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    <TitleText  colorText='white' text='INVISTA SEU TEMPO NO CRESCIMENTO DO SEU NEGÓCIO E DEIXE A CRIAÇÃO DO SITE COM A GENTE'/>
                    <SubTexts colorText='white' text='CRIAÇÃO DE SITE PROFISSIONAL APARTIR DE R$ 200,00 EM ATÉ 12X.'/>
                    <div className={styles.bannerButton} data-aos="fade-up">
                        <ButtonUI   fontSize='24px' height='100%'  localPath='services'  text='Contrate agora!'  width='100%'/>
                    </div>
                </div>
            </div>
        </>
    )
}