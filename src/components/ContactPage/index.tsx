"use client";
import { useTranslation } from "react-i18next";
import { ButtonUI } from "../UI/ButtonUi";
import SubTexts from "../UI/SubTexts";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";

interface contactPageProps {
  lang: any;
}

export default function ContactPage({ lang }: contactPageProps) {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.contactContainer}>
      <div className={styles.titleText}>
        <TitleText colorText="black" text={t('enterContact')} />
      </div>
      <form>
        <div className={styles.dadosComponent}>
            <input type="text" id="name" name="name" placeholder={t('enterName')} />
            <input
              type="text"
              id="email"
              name="email"
              placeholder={t('enterEmail')}
            />
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder={t('enterPhone')}
            />
        </div>

        <div className={styles.textAreaCard}>
          <textarea  id="message" name="message" placeholder={t('enterMessage')} />
        </div>
      <div className={styles.buttonFormCard}>
          <ButtonUI 
            fontSize="16px"
            height="2em"
            localPath=""
            text={t('submit')}
            width="20%"
            
          />
        </div>
      </form>
    </div>
  );
}
