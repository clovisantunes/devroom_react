import React, { useState } from "react";
import Modal from "react-modal";
import "../../styles/assets/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";
import TitleText from "../UI/TitleText";
import { ButtonIcon } from "../UI/ButtonUi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Cover from "../UI/cover";
import { ModalItem } from "../Modal";
import { useTranslation } from "react-i18next";

interface PortfolioProps {
  id: string;
}

const projects = {
  frontI: {
    name: "Renova Advogacia",
    deploy: "https://lading-page-topaz.vercel.app/",
    backgroundImage: "https://i.ibb.co/nbp1PYJ/landing-Page.png",
    backgroundVideo: "https://streamable.com/e/gk9a2n?autoplay=1&muted=1",
    descriptions: {
      title: "Renova Advogacia",
      spanI: "frontI.spanI",
      spanII: "frontI.spanII"
    }
  },
  frontII: {
    name: "PetVida Centro Veterinário",
    deploy: "https://landing-page-ii.vercel.app/",
    backgroundImage: "https://i.ibb.co/4Ps448m/landing-Page-II.png",
    backgroundVideo: "https://streamable.com/e/9d1n6b?autoplay=1&muted=1",
    descriptions: {
      title: "PetVida Centro Veterinário",
      spanI: "frontII.spanI",
      spanII: "frontII.spanII"
    }
  },
  frontIII: {
    name: "Blog de Decoração e Design de Interiores",
    deploy: "https://blog-brown-five-96.vercel.app/",
    backgroundImage: "https://i.postimg.cc/1mXP80tf/Blog.png",
    backgroundVideo: "https://streamable.com/e/tu7d7c?autoplay=1&muted=1",
    descriptions: {
      title: "Blog de Decoração e Design de Interiores",
      spanI: "frontIII.spanI",
      spanII: "frontIII.spanII"
    }
  },
  frontIIII: {
    name: "E-commerce Electro",
    deploy: "https://ecommerce-phi-eight-92.vercel.app/",
    backgroundImage: "https://i.ibb.co/znk9Rdz/ecommerce.png",
    backgroundVideo: "https://streamable.com/e/uds8v6?autoplay=1&muted=1",
    descriptions: {
      title: "E-commerce Electro",
      spanI: "frontIIII.spanI",
      spanII: "frontIIII.spanII"
    }
  }
};

const Portfolio = ({ id }: PortfolioProps) => {
  const { t } = useTranslation();
  const [modalItem, setModalItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleOpenModal = (project) => {
    setModalItem(project);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleExpand = () => {
    setExpanded(true);
  };

  return (
    <div className={styles.portfolioContainer} id={id}>
      <div className={styles.titleItem}>
        <TitleText colorText="white" text={t("see")} />
        <span>:</span>
      </div>
      <div className={`${styles.portfolioComponent} ${expanded ? styles.expanded : ""}`}>
        {Object.entries(projects).map(([key, project]) => (
          <div
            key={key}
            className={styles.portCard}
            onMouseEnter={() => setHoveredIndex(key)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={project.backgroundImage} alt={`Image for ${project.name}`} />
            {hoveredIndex === key && (
              <Cover
                title={t(project.name)}
                onClick={() =>
                  handleOpenModal({
                    name: t(project.name),
                    deploy: project.deploy,
                    backgroundVideo: project.backgroundVideo,
                    descriptions: {
                      title: t(project.descriptions.title),
                      spanI: t(project.descriptions.spanI),
                      spanII: t(project.descriptions.spanII),
                    },
                  })
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
      <div className={styles.loadingButton}>
        <ButtonIcon
          fontSize="16px"
          height="100%"
          click={handleExpand}
          width="100%"
          localPath="#"
          text="Veja mais"
          icon={<MdKeyboardArrowDown />}
        />
      </div>
    </div>
  );
};

export default Portfolio;
