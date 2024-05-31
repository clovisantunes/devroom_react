import styles from "./styles.module.scss";
import TitleText from "../UI/TitleText";
import SubTexts from "../UI/SubTexts";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import LogoUi from "../UI/LogoUi";
import { useTranslation } from "react-i18next";
interface FooterProps {
  textColor: string;
  iconColor: string;
  id: string;
}

export default function Footer({
  textColor,
  iconColor,
  id,
}: FooterProps) {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={styles.footer_container}
      id={id}
    >
      <div className={styles.footerCard}>
        <div className={styles.contactCard} />
        <div className={styles.phoneCard}>
        <div className={styles.subcard}>
        <FaLocationDot color='#d9d9d9' />
            <SubTexts
              colorText='#d9d9d9'
              text={t('subcontact')}
            />
          </div>
           
          <div className={styles.sub_box}>
            <FaPhoneAlt color='#d9d9d9' />
            <SubTexts
              colorText='#d9d9d9'
              text={t('subphone')}
            />
          </div>
          <div className={styles.sub_box}>
            <TfiEmail color='#d9d9d9'/>
            <SubTexts
              colorText='#d9d9d9'
              text={t('emailsub')}
            />
          </div>
        </div>
        <div className={styles.assets}>
          <TitleText 
            colorText="white"
            text={t('services')}
          />
          <span>Desenvolvimento Web</span>
          <span>Hospedagem</span>
          <span>Marketing Digital</span>
          <span>Design</span>
        </div>
        <div className={styles.socialCards}>
          <SubTexts colorText="#d9d9d9" text={t('follow')} />
          <div className={styles.svgCard}>
          <FaInstagram />
          <SubTexts colorText="#ffffff" text="@devroom_oficial" />
          </div>
        </div>
      </div>
      <div className={styles.copyrightCard}>
        <SubTexts colorText="white"  text={t('copyright')} />
      </div>
    </div>
  );
}
