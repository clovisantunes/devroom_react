"use client"
import React from 'react';
import styles from './styles.module.scss';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { WhatsAppLink } from '../../Utils/WhatsLink';

interface WhatsProps {
}

export default function WhatsContact({  }: WhatsProps) {
    const handleWhatsappClick: () => void = () => {
        WhatsAppLink();
      };

    return (
        <div className={styles.whatsContainer} onClick={handleWhatsappClick}>
            <IoLogoWhatsapp />
        </div>
    );
}
