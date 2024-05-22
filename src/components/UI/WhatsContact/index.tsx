"use client"
import React from 'react';
import styles from './styles.module.scss';
import { IoLogoWhatsapp } from 'react-icons/io5';

interface WhatsProps {
}

export default function WhatsContact({  }: WhatsProps) {
    const encodeMessage = (message: string) => {
        return encodeURIComponent(message);
    };

    const phoneNumber = '5551981399275';

    const customMessage = 'Olá! Estou interessado em saber mais informações sobre os planos de desenvolvimento.';

    const whatsappLink = `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}&text=${encodeMessage(customMessage)}`;

    const handleWhatsappClick = () => {
        window.open(whatsappLink, '_blank');
    };

    return (
        <div className={styles.whatsContainer} onClick={handleWhatsappClick}>
            <IoLogoWhatsapp />
        </div>
    );
}
