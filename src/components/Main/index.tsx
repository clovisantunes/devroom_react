import React from "react";
import styles from "./styles.module.scss";
import TitleText from "../UI/TitleText/index";
import { ButtonUI } from "../UI/ButtonUi";
import SubTexts from "../UI/SubTexts/index";
import { useTranslation } from "react-i18next";

interface MainProps {
  id: string;
}

export default function Main({ id }: MainProps) {
  const encodeMessage = (message: string) => {
    return encodeURIComponent(message);
  };
  const { t, i18n } = useTranslation();
  const phoneNumber = "5551981399275";

  const customMessage = "Olá! Estou interessado em saber mais informações sobres os planos de desenvolvimento.";

  const whatsappLink = `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}&text=${encodeMessage(customMessage)}`;

  return (
    <div className={styles.main_container} id={id}>
      <div className={styles.main}></div>
      <div className={styles.main_box}>
        <h1>{t('textTitle')}</h1>
        <h2>{t('subMainText')}</h2>
        <span className={styles.typewriter} id='write'>{t('servicesMain')}</span>
      </div>
    </div>
  );
}
