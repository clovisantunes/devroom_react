import { useEffect } from 'react';
import { ButtonIcon, ButtonUI } from '../UI/ButtonUi';
import SubTexts from '../UI/SubTexts';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import wordIcon from '../../assets/images/earth.png';
import searchIcon from '../../assets/images/Search.png';
import paidIcon from '../../assets/images/metrics.png';
import rocketIcon from '../../assets/images/rocket.png';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';


export default function Banner() {

    const { t } = useTranslation();
    const navigate = useNavigate();
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    <TitleText colorText='#FBFBFB' text={t('servicesMain')} family='jaldi' weight='bold' />
                    <div className={styles.bannerButton}>
                        <ButtonIcon 
                            fontSize='16px'
                            height='100%'
                            localPath='/contact'
                            click={() => {navigate('/contact')}}
                            width='100%'
                            text='Contato'
                            icon={<MdOutlineArrowForwardIos size={20} />}
                            />
                    </div>
                </div>
            </div>
        </>
    );
}
