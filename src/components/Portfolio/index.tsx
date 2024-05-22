"use client";
import React, { ReactNode, useState } from "react";
import Modal from "react-modal";
import "../../styles/assets/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";
import TitleText from "../UI/TitleText";
import SubTexts from "../UI/SubTexts";
import { ButtonUI } from "../UI/ButtonUi";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiAxios } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import Cover from "../UI/cover";
import { ModalItem } from "../Modal";
import { useTranslation } from "react-i18next";
interface PortfolioProps {
  id: string;

}

interface BackgroundImages {
  [key: string]: string;
}

interface DeployProps {
  [key: string]: string;
}
interface Technology {
  icon: ReactNode;
  name: string;
}

interface TecnologiesProps {
  [key: string]: Technology[];
}

const titles = {
  front: "Web",
  back: "Api",
};


const backgroundImages: BackgroundImages = {
  frontI:
    "https://i.ibb.co/nbp1PYJ/landing-Page.png",
  frontII: "https://i.ibb.co/4Ps448m/landing-Page-II.png",
  frontIII: "https://i.postimg.cc/1mXP80tf/Blog.png",
  frontIIII: "https://i.ibb.co/znk9Rdz/ecommerce.png",
  backI:
    "https://uploaddeimagens.com.br/images/004/751/101/original/backendSimples.jpg?1709507500",
  backII:
    "https://uploaddeimagens.com.br/images/004/751/105/original/backenduser.png?1709508408",
  backIII:
    "https://uploaddeimagens.com.br/images/004/751/103/original/backendusers.jpg?1709507815",
  backIIII: "https://i.ibb.co/1ry5gjd/backend-Ecommerce.webp",
  mobileI: "Aplicativo simples",
  mobileII: "Aplicativo + Firebase",
  mobileIII: "Controle de usuários",
  mobileIIII: "Ecommerce Mobile",
};
const backgroundVideo: BackgroundImages = {
  frontI:
    "https://streamable.com/e/gk9a2n?autoplay=1&muted=1",
  frontII:"https://streamable.com/e/9d1n6b?autoplay=1&muted=1",
  frontIII: "https://streamable.com/e/tu7d7c?autoplay=1&muted=1",
  frontIIII: "https://streamable.com/e/uds8v6?autoplay=1&muted=1",
  backI:
    "https://uploaddeimagens.com.br/images/004/751/101/original/backendSimples.jpg?1709507500",
  backII:
    "https://uploaddeimagens.com.br/images/004/751/105/original/backenduser.png?1709508408",
  backIII:
    "https://uploaddeimagens.com.br/images/004/751/103/original/backendusers.jpg?1709507815",
  backIIII: "https://i.ibb.co/1ry5gjd/backend-Ecommerce.webp",
  mobileI: "Aplicativo simples",
  mobileII: "Aplicativo + Firebase",
  mobileIII: "Controle de usuários",
  mobileIIII: "Ecommerce Mobile",
};

const deploys: DeployProps = {
  frontI: "https://lading-page-topaz.vercel.app/",
  frontII: "https://landing-page-ii.vercel.app/",
  frontIII: "https://blog-brown-five-96.vercel.app/",
  frontIIII: "https://ecommerce-phi-eight-92.vercel.app/",
  backI: "",
  backII: "",
  backIII: "",
  backIIII: "",
  mobileI: "",
  mobileII: "",
  mobileIII: "",
  mobileIIII: "",
};
const repository: DeployProps = {
  frontI: "https://github.com/clovisantunes/ladingPage",
  frontII: "https://github.com/clovisantunes/LandingPageII",
  frontIII: "https://github.com/clovisantunes/blog",
  frontIIII: "https://github.com/clovisantunes/ecommerce",
  backI: "https://github.com/clovisantunes/client",
  backII: "https://github.com/clovisantunes/WorkTimeManager",
  backIII: "https://github.com/clovisantunes/projetoPizza/tree/main/backend",
  backIIII: "https://github.com/clovisantunes/Car_market_API",
  mobileI: "teste",
  mobileII: "teste",
  mobileIII: "teste",
  mobileIIII: "teste",
};

const technologies: TecnologiesProps = {
  frontI: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaSass />, name: "Sass" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
  ],
  frontII: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaSass />, name: "Sass" },
    { icon: <FaCss3 />, name: "Css" },
    { icon: <SiNextdotjs />, name: "Next" },
    { icon: <SiTypescript />, name: "TypeScript" },
  ],
  frontIII: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaSass />, name: "Sass" },
    { icon: <FaCss3 />, name: "Css" },
    { icon: <SiNextdotjs />, name: "Next" },
    { icon: <SiTypescript />, name: "TypeScript" }
  ],
  frontIIII: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaSass />, name: "Sass" },
    { icon: <FaCss3 />, name: "Css" },
    { icon: <SiNextdotjs />, name: "Next" },
    { icon: <SiTypescript />, name: "TypeScript" }
  ],
  backI: [
    { icon: <FaNode />, name: "Node.js" },
    { icon: <SiSocketdotio />, name: "Socket.IO" },
  ],
  backII: [
    { icon: <FaNode />, name: "Node.js" },
    { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
    { icon: <SiPrisma />, name: "Prisma" },
  ],
  backIII: [
    { icon: <FaNode />, name: "Node.js" },
    { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
    { icon: <SiPrisma />, name: "Prisma" },
  ],
  backIIII: [
    { icon: <FaNode />, name: "Node.js" },
    { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
    { icon: <SiPrisma />, name: "Prisma" },
  ],
  mobileI: [{ icon: <FaNode />, name: "Node.js" }],
  mobileII: [{ icon: <FaNode />, name: "Node.js" }],
  mobileIII: [{ icon: <FaNode />, name: "Node.js" }],
  mobileIIII: [{ icon: <FaNode />, name: "Node.js" }],
};


type modalProps = {
  name: string;
  deploy: string;
  repository: string;
  tecnologies: Technology[];
  backgroundVideo: string;
  descriptions: {
    title: string;
    spanI: string;
    spanII: string;
  };
};
export default function Portfolio({
  id,

}: PortfolioProps) {
  const { t, i18n } = useTranslation();
  const names = {
    frontI: t('landing'),
    frontII: t('multiPage'),
    frontIII: "Blog",
    frontIIII: "Ecommerce",
    backI: "Node.js",
    backII: t('products.backend.details.plan.subTitle.multi'),
    backIII: "Backend Blog",
    backIIII: "Backend Ecommerce",
    mobileI: "Aplicativo simples",
    mobileII: "Aplicativo + Firebase",
    mobileIII: "Controle de usuários",
    mobileIIII: "Ecommerce Mobile",
  };

  const descriptions = {
    frontI: {
      title: "Renova Advogacia",
      spanI: t('frontI.spanI'),
      spanII: t('frontI.spanII'),
      techName: {
        Html: "html", 
        css:"css",
        
      }
    },
    frontII: {
      title: "PetVida Centro Veterinário",
      spanI: t('frontII.spanI'),
      spanII: t('frontII.spanII'),
    },
    frontIII: {
      title: "Blog de Decoração e Design de Interiores ",
      spanI: t('frontIII.spanI'),
      spanII: t('frontIII.spanII'),
    },
    frontIIII: {
      title: "E-commerce Electro",
      spanI: t('frontIIII.spanI'),
      spanII: t('frontIIII.spanII'),
    },
    backI: {
      title: "Client Massege",
      spanI: t('backI.spanI'),
      spanII: t('backI.spanII'),
    },
    backII: {
      title: "WorkTimeManager",
      spanI: t('backII.spanI'),
      spanII: t('backII.spanII'),
    },
    backIII: {
      title: "Back end Pizzaria",
      spanI: t('backIII.spanI'),
      spanII: t('backIII.spanII'),
    },
    backIIII: {
      title: "Market Api",
      spanI: t('backIIII.spanI'),
      spanII: t('backIIII.spanII'),
    },
    mobileI: "",
    mobileII: "",
    mobileIII: "",
    mobileIIII: "",
  };

  const [modalItem, setModalItem] = useState<modalProps>();
  const [modalVisible, setModalVisible] = useState(false);

  function handleOpenModal(
    nameKey: string,
    deploy: string,
    repository: string,
    tecnologies: Technology[],
    backgroundVideo: string,
    descriptions: { title: string; spanI: string; spanII: string }
  ) {
    setModalItem({
      name: nameKey,
      deploy: deploy,
      repository: repository,
      tecnologies: tecnologies,
      backgroundVideo: backgroundVideo,
      descriptions: descriptions,
    });
    setModalVisible(true);
    return nameKey;
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  const [hoveredIndex, setHoveredIndex] = useState("");

  return (
    <div className={styles.portfolioContainer} id={id}>
      <TitleText colorText="white" text={t('see')} />
      <div className={styles.portifolioComponent}>
        {Object.entries(titles).map(([key, title]) => (
          <div key={key} className={styles.portifolioCard}>
            <div className={styles.portName}>
              <TitleText colorText="white" text={title} />
            </div>
            <div className={styles.portItens}>
              {Object.entries(names)
                .filter(([nameKey]) => nameKey.startsWith(key))
                .map(([nameKey, value]) => (
                  <div
                    key={nameKey}
                    className={styles.portCard}
                    onMouseEnter={() => setHoveredIndex(value)}
                    onMouseLeave={() => setHoveredIndex("")}
                  >
                    <img
                      src={backgroundImages[nameKey]}
                      alt={`Image for ${value}`}
                    />
                    {hoveredIndex === value && (
                      <Cover
                        title={value}
                        subText={technologies[nameKey]}
                        onClick={() =>
                          handleOpenModal(
                            nameKey,
                            deploys[nameKey],
                            repository[nameKey],
                            technologies[nameKey],
                            backgroundVideo[nameKey],
                            (descriptions as any)[nameKey],
                          )
                        }
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      {modalItem && (
        <ModalItem
          isOpen={modalVisible}
          onRequestClose={handleCloseModal}
          modalItem={modalItem}
        />
      )}
    </div>
  );
}
