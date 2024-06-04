import React, { ReactNode, useState } from "react";
import Modal from "react-modal";
import "../../styles/assets/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";
import TitleText from "../UI/TitleText";
import SubTexts from "../UI/SubTexts";
import { ButtonUI } from "../UI/ButtonUi";
import { FaHtml5, FaSass, FaCss3, FaReact, FaNode } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTypescript, SiAxios, SiPrisma, SiSocketdotio } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import Cover from "../UI/cover";
import { ModalItem } from "../Modal";
import { useTranslation } from "react-i18next";

interface PortfolioProps {
  id: string;
}
type modalProps = {
  name: string;
  deploy: string;
  backgroundVideo: string;
  descriptions: {
    title: string;
    spanI: string;
    spanII: string;
  };
};
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

interface TechnologiesProps {
  [key: string]: Technology[];
}

const backgroundImages: BackgroundImages = {
  frontI: "https://i.ibb.co/nbp1PYJ/landing-Page.png",
  frontII: "https://i.ibb.co/4Ps448m/landing-Page-II.png",
  frontIII: "https://i.postimg.cc/1mXP80tf/Blog.png",
  frontIIII: "https://i.ibb.co/znk9Rdz/ecommerce.png",
  frontIIIII: "https://i.ibb.co/znk9Rdz/ecommerce.png",
};

const backgroundVideo: BackgroundImages = {
  frontI: "https://streamable.com/e/gk9a2n?autoplay=1&muted=1",
  frontII: "https://streamable.com/e/9d1n6b?autoplay=1&muted=1",
  frontIII: "https://streamable.com/e/tu7d7c?autoplay=1&muted=1",
  frontIIII: "https://streamable.com/e/uds8v6?autoplay=1&muted=1",
  frontIIIII: "https://streamable.com/e/uds8v6?autoplay=1&muted=1",
};

const deploys: DeployProps = {
  frontI: "https://lading-page-topaz.vercel.app/",
  frontII: "https://landing-page-ii.vercel.app/",
  frontIII: "https://blog-brown-five-96.vercel.app/",
  frontIIII: "https://ecommerce-phi-eight-92.vercel.app/",
  frontIIIII: "https://ecommerce-phi-eight-92.vercel.app/",
};

interface Descriptions {
  [key: string]: {
    title: string;
    spanI: string;
    spanII: string;
  };
}

const Portfolio = ({ id }: PortfolioProps) => {
  const { t } = useTranslation();
  const names = {
    frontI: t("landing"),
    frontII: t("multiPage"),
    frontIII: "Blog",
    frontIIII: "Ecommerce",
    frontIIIII: "Ecommerce",
    frontIIIIII: "Ecommerce",
  };

  const descriptions: Descriptions = {
    frontI: {
      title: "Renova Advogacia",
      spanI: t("frontI.spanI"),
      spanII: t("frontI.spanII"),
    },
    frontII: {
      title: "PetVida Centro Veterinário",
      spanI: t("frontII.spanI"),
      spanII: t("frontII.spanII"),
    },
    frontIII: {
      title: "Blog de Decoração e Design de Interiores",
      spanI: t("frontIII.spanI"),
      spanII: t("frontIII.spanII"),
    },
    frontIIII: {
      title: "E-commerce Electro",
      spanI: t("frontIIII.spanI"),
      spanII: t("frontIIII.spanII"),
    },
    frontIIIII: {
      title: "E-commerce Electro",
      spanI: t("frontIIII.spanI"),
      spanII: t("frontIIII.spanII"),
    },
  };

  const [modalItem, setModalItem] = useState<modalProps | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = (
    nameKey: string,
    deploy: string,
    backgroundVideo: string,
    description: { title: string; spanI: string; spanII: string }
  ) => {
    setModalItem({
      name: nameKey,
      deploy: deploy,
      backgroundVideo: backgroundVideo,
      descriptions: description,
    });
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <div className={styles.portfolioContainer} id={id}>
      <div className={styles.titleItem}>
        <TitleText colorText="white" text={t("see")} />
        <span>:</span>
      </div>
      <div className={styles.portfolioComponent}>
       
        
            {Object.entries(names).map(([nameKey, value]) => (
              <div
                key={nameKey}
                className={styles.portCard}
                onMouseEnter={() => setHoveredIndex(nameKey)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={backgroundImages[nameKey]}
                  alt={`Image for ${value}`}
                />
                {hoveredIndex === nameKey && (
                  <Cover
                    title={value}
                    onClick={() =>
                      handleOpenModal(
                        nameKey,
                        deploys[nameKey],
                        backgroundVideo[nameKey],
                        descriptions[nameKey]
                      )
                    }
                  />
                )}
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
};

export default Portfolio;
