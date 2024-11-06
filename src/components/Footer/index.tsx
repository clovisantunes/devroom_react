import styles from "./styles.module.scss";
import TitleText from "../UI/TitleText";
import SubTexts from "../UI/SubTexts";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import LogoUi from "../UI/LogoUi";
import { FaFacebook } from "react-icons/fa";

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
        <div className={styles.cardFooter}>

        <div className={styles.assets}>
          <TitleText 
            colorText="white"
            text={t('services')}
            />
          <span>Desenvolvimento Web</span>
          <span>Suporte Tecnico</span>
          <span>Marketing Digital</span>
          <span>Design Grafico</span>
        </div>
        <div className={styles.socialCards}>
          <SubTexts colorText="#d9d9d9" text={t('follow')} />
          <div className={styles.svgCard}>
          <RiInstagramFill />
          <SubTexts colorText="#ffffff" text="@DevRoom" />
          </div>
          <div className={styles.svgCard}>
          <FaFacebook />
          <SubTexts colorText="#ffffff" text="DevRoom" />
          </div>
        </div>
            </div>
      </div>
      <div className={styles.copyrightCard}>
        <div className={styles.copyCard}>

        <SubTexts colorText="white"  text={"Copyright By:"} />
        <span>
          DevRoom.tech
        </span>
        </div>
        <div className={styles.items}>

        <div className={styles.phoneCard}>
          <span>
            Entre em contato
          </span>
           
          <div className={styles.sub_box}>
            <SubTexts
              colorText='#d9d9d9'
              text={t('subphone')}
              />
          </div>
          <div className={styles.sub_box}>
            <SubTexts
              colorText='#d9d9d9'
              text={t('emailsub')}
              />
          </div>
        </div>
        <div className={styles.subcard}>
          <span>
            Endereço:
          </span>
            <SubTexts
              colorText='#d9d9d9'
              text={t('subcontact')}
              />
          </div>
              </div>
              <div className={styles.socialSVG}>
  <a href="https://www.facebook.com/profile.php?id=61559027484616" target="_blank" rel="noopener noreferrer">
    <FaFacebook />
  </a>
  <a href="https://www.instagram.com/devroom_oficial/" target="_blank" rel="noopener noreferrer">
    <RiInstagramFill />
  </a>
</div>
      </div>
    </div>
  );
}
