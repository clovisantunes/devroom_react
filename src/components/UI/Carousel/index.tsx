import TitleText from "../TitleText";
import styles from "./styles.module.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript1 } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAxios } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

interface carouselProps {
}

const icons = [
  AiFillHtml5,
  IoLogoCss3,
  DiJavascript1,
  BiLogoTypescript,
  IoLogoReact,
  SiNextdotjs,
  IoLogoSass,
  TbBrandReactNative,
  FaNode,
  SiAxios,
  SiStyledcomponents,
  BiLogoPostgresql,
  SiPrisma,
  FaSquareGithub,
];

export default function Carousel({  }: carouselProps) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={styles.carouselContainer}>
        
        <TitleText colorText="var(--colors-secondary-50)" text={t('technologies')} />
        <div className={styles.line} />
        <div className={styles.carouselItems}>

        
        <div className={styles.carouselCard}>
          {icons.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
        <div className={styles.carouselCardAfter}>
          {icons.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
