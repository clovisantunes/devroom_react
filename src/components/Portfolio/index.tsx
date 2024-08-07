import React, { useState } from "react";
import Modal from "react-modal";
import "../../styles/assets/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";
import TitleText from "../UI/TitleText";
import { ButtonIcon } from "../UI/ButtonUi";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Cover from "../UI/cover";
import { ModalItem } from "../Modal";
import { useTranslation } from "react-i18next";

interface PortfolioProps {
  id: string;
}

const projects = {
  frontI: {
    name: "Renova Advogacia",
    deploy: "Website_1",
    backgroundImage: "https://i.ibb.co/nbp1PYJ/landing-Page.png",
    backgroundVideo: "https://i.ibb.co/nbp1PYJ/landing-Page.png",
    descriptions: {
      title: "Renova Advogacia",
      spanI: "frontI.spanI",
      spanII: "frontI.spanII"
    }
  },
  frontII: {
    name: "PetVida Centro Veterinário",
    deploy: "Website_2",
    backgroundImage: "https://i.ibb.co/4Ps448m/landing-Page-II.png",
    backgroundVideo: "https://i.ibb.co/4Ps448m/landing-Page-II.png",
    descriptions: {
      title: "PetVida Centro Veterinário",
      spanI: "frontII.spanI",
      spanII: "frontII.spanII"
    }
  },
  frontIII: {
    name: "Blog de Decoração e Design de Interiores",
    deploy: "Blogs",
    backgroundImage: "https://i.postimg.cc/1mXP80tf/Blog.png",
    backgroundVideo: "https://i.postimg.cc/1mXP80tf/Blog.png",
    descriptions: {
      title: "Blog de Decoração e Design de Interiores",
      spanI: "frontIII.spanI",
      spanII: "frontIII.spanII"
    }
  },
  frontIIII: {
    name: "E-commerce Electro",
    deploy: "E-commerce",
    backgroundImage: "https://i.ibb.co/znk9Rdz/ecommerce.png",
    backgroundVideo: "https://i.ibb.co/znk9Rdz/ecommerce.png",
    descriptions: {
      title: "E-commerce Electro",
      spanI: "frontIIII.spanI",
      spanII: "frontIIII.spanII"
    }
  },
  frontIIIaI: {
    name: "TechNova",
    deploy: "Website_5",
    backgroundImage: "https://uploaddeimagens.com.br/images/004/813/417/original/landingpage.png?1721687021",
    backgroundVideo: "https://uploaddeimagens.com.br/images/004/813/417/original/landingpage.png?1721687021",
    descriptions: {
      title: "TechNova",
      spanI: "A TechNova é uma página única e simples, porém eficaz, dedicada a empresas de tecnologia com diversas especializações em áreas como desenvolvimento de software, infraestrutura de TI, segurança cibernética e consultoria tecnológica.",
      spanII: "Esta página foi feita em uma landing page única, podendo ser ajustada para o gosto e o segmento do seu negócio."
    }
  },
  frontIIIjI: {
    name: "MultiServ",
    deploy: "Website_6",
    backgroundImage: "https://uploaddeimagens.com.br/images/004/813/420/original/MultiServ.png?1721688196",
    backgroundVideo: "https://uploaddeimagens.com.br/images/004/813/420/original/MultiServ.png?1721688196",
    descriptions: {
      title: "MultiServ",
      spanI: "A MultiServ é uma página única e simples, porém eficaz, dedicada a prestadores de serviços em diversas áreas, como manutenção, consultoria, design e muito mais. Esta página foi feita em uma landing page única, podendo ser ajustada para o gosto e o segmento do seu negócio.",
      spanII: ""
    }
  },
  frontIhIII: {
    name: "FisioBem",
    deploy: "Website_7",
    backgroundImage: "https://uploaddeimagens.com.br/images/004/813/421/original/Fisioterapia.png?1721688262",
    backgroundVideo: "https://uploaddeimagens.com.br/images/004/813/421/original/Fisioterapia.png?1721688262",
    descriptions: {
      title: "FisioBem",
      spanI: "A FisioBem é uma página única e simples, porém eficaz, dedicada a fisioterapeutas com diversas especializações em áreas como ortopédica, esportiva, neurológica e pediátrica. Esta página foi feita em uma landing page única, podendo ser ajustada para o gosto e o segmento do seu negócio.",
      spanII: ""
    }
  },
  frontIIjII: {
    name: "Advocacia",
    deploy: "Website_9",
    backgroundImage: "https://uploaddeimagens.com.br/images/004/813/422/original/Advocacia_2.png?1721688327",
    backgroundVideo: "https://uploaddeimagens.com.br/images/004/813/422/original/Advocacia_2.png?1721688327",
    descriptions: {
      title: "Advocacia",
      spanI: "A Advocacia é uma página única e simples, porém eficaz, dedicada a advogados com diversas especializações em áreas do direito, como civil, comercial, trabalhista e penal. Esta página foi feita em uma landing page única, podendo ser ajustada para o gosto e o segmento do seu negócio.",
      spanII: ""
    }
  },
  frontIIkII: {
    name: "Contabilidade",
    deploy: "Website_9",
    backgroundImage: "https://uploaddeimagens.com.br/images/004/813/927/original/contabilidade.png?1721774296",
    backgroundVideo: "https://uploaddeimagens.com.br/images/004/813/927/original/contabilidade.png?1721774296",
    descriptions: {
      title: "Contabiliza",
      spanI: "A Contabiliza é uma página única e simples, porém eficaz, dedicada a contadores com diversas especializações em áreas da contabilidade, como fiscal, tributária, trabalhista e financeira. Esta página foi feita em uma landing page única, podendo ser ajustada para o gosto e o segmento do seu negócio.",
      spanII: ""
    }
}
}

const Portfolio = ({ id }: PortfolioProps) => {
  const { t } = useTranslation();
  const [modalItem, setModalItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [TextButton, setTextButton] = useState("Veja mais");
  const [svgButton, setSvgButton] = useState(<MdKeyboardArrowDown />);

  const handleOpenModal = (project) => {
    setModalItem(project);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleExpand = () => {
    setExpanded(!expanded);
    if (expanded) {
      setSvgButton(<MdKeyboardArrowDown />);
      setTextButton("Veja mais");
    } else {
      setSvgButton(<MdOutlineKeyboardArrowUp />);
      setTextButton("Ver menos");
    }
  };

  return (
   
    <>
    <div className={styles.portfolioContainer} id={id}>
      <div className={styles.shadowBox} />
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
      <div className={styles.loadingButton}>
        <ButtonIcon
          fontSize="16px"
          height="100%"
          click={handleExpand}
          width="100%"
          localPath="#"
          text={TextButton}
          icon={svgButton}
          />
      </div>
     <div className={styles.containerPlus}>
      {modalItem && (
        <ModalItem
          isOpen={modalVisible}
          onRequestClose={handleCloseModal}
          modalItem={modalItem}
        />
      )}
    </div>
    </div>
    </>
  );
};

export default Portfolio;
