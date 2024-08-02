import React from "react";
import styles from "./styles.module.scss";
import TitleText from "../UI/TitleText/index";
import { ButtonServices, ButtonUI } from "../UI/ButtonUi";
import SubTexts from "../UI/SubTexts/index";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
interface MainProps {
  id: string;
}

export default function Main({ id }: MainProps) {
  const encodeMessage = (message: string) => {
    return encodeURIComponent(message);
  };
  const { t, i18n } = useTranslation();
  const phoneNumber = "5551981399275";

  const customMessage = "Olá! Estou interessado em saber mais informações sobre os planos de desenvolvimento.";

  const whatsappLink = `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}&text=${encodeMessage(customMessage)}`;
  const handleWhatsappClick = () => {
    window.open(whatsappLink, '_blank');
};
  return (
    <div className={styles.main_container} id={id}>
      <div className={styles.main}></div>
      <div className={styles.main_box}>
        <h1>{t('textTitle')}</h1>
        <h2>{t('subMainText')}</h2>
        <span className={styles.typewriter} id='write'>{t('bannerTitle')}</span>
        <div className={styles.main_buttons}>
          <div className={styles.buttonsItem}>
        <ButtonUI 
          fontSize="24px"
          height="50px"
          width="200px"
          localPath="/services"
          text="Contrate Agora!"
        />
          </div>
          <div className={styles.buttonsItem}>
          <ButtonServices 
          height="50px"
          width="200px"
          text="Chame agora"
          background="#25D366"
          click={handleWhatsappClick}
          icon={<FaWhatsapp  width={30} height={25}/>}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
