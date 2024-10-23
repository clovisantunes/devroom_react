import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { ButtonServices, ButtonUI } from "../UI/ButtonUi";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import image1 from '../../assets/images/devroom1.png';
import image2 from '../../assets/images/devroom2.png';
import image3 from '../../assets/images/devroom3.png';

interface MainProps {
  id: string;
}

export default function Main({ id }: MainProps) {
  const encodeMessage = (message: string) => {
    return encodeURIComponent(message);
  };

  const { t } = useTranslation();
  const phoneNumber = "5551981399275";
  const customMessage = "Olá! Estou interessado em saber mais informações sobre os planos de desenvolvimento.";
  const whatsappLink = `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}&text=${encodeMessage(customMessage)}`;

  const handleWhatsappClick = () => {
    window.open(whatsappLink, '_blank');
  };

  const images = [
    { id: 1, src: image1, alt: "DevRoom Image 1" },
    { id: 2, src: image2, alt: "DevRoom Image 2" },
    { id: 3, src: image3, alt: "DevRoom Image 3" },
  ];

  const texts = [
    { id: 1, title: t('textTitle'), text: t('bannerTitle') },
    { id: 2, title: 'Web Design', text: 'Soluções de desenvolvimento web feitas para impulsionar o crescimento do seu negócio.' },
    { id: 3, title: 'Suporte Tecnico', text: 'Suporte técnico de confiança para manter seu negócio funcionando.' },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getImageClass = (index: number) => {
    if (index === activeImageIndex) {
      return `${styles.imageActive}`;
    } else if (index === (activeImageIndex + 1) % images.length) {
      return `${styles.imageSecond}`;
    } else {
      return `${styles.imageThird}`;
    }
  };

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
  };

  
  return (
    <div className={styles.main_container} id={id}>
      <div className={styles.cardMain}>
      <div className={styles.main_box}>
        <div className={styles.texts}>

        <h1>{texts[activeImageIndex].title}</h1>
        <span className={styles.typewriter} id='write'>{texts[activeImageIndex].text}</span>
        </div>
        <div className={styles.main_buttons}>
          <div className={styles.buttonsItem}>
            <ButtonServices 
              height="35px"
              width="200px"
              text="Chame agora"
              background="#25D366"
              click={handleWhatsappClick}
              icon={<FaWhatsapp width={30} height={25}/>}/>
          </div>
          <div className={styles.buttonsItem}>
            <ButtonUI 
              fontSize="24px"
              height="35px"
              width="200px"
              localPath="/services"
              text="Entre em contato"
              />
          </div>
        </div>
      </div>

      <div className={styles.imagesMain}>
        {images.map((image, index) => (
          <img 
          key={image.id} 
          src={image.src} 
          alt={image.alt} 
            className={getImageClass(index)} 
          />
        ))}
      </div>
      
        </div>
      <div className={styles.imageButtons}>
        {images.map((image, index) => (
          <button 
          key={image.id} 
          onClick={() => handleImageClick(index)} 
          className={activeImageIndex === index ? styles.activeButton : styles.inactiveButton}
          >
          </button>
        ))}
      </div>
    </div>
  );
}
