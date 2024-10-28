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
import website1 from '../../assets/images/portifolio_Clovis.png'
import website2 from '../../assets/images/portifolio_Dandara.png'
import design1 from '../../assets/images/design1.png'
import design2 from '../../assets/images/design2.png'
import design3 from '../../assets/images/design3.png'

interface PortfolioProps {
  id: string;
}

const projects = {
  frontI: {
    name: "Portifólio Clovis Antunes",
    deploy: "Website_1",
    category: "Website",
    backgroundImage: website1,
    online: "https://clovis-antunes.vercel.app/",
    design: "https://www.figma.com/design/DqT6M5WTb2o2OiAz9p6BGM/Contabilidade?node-id=0-1&t=HztxmjzYsEyGaFdl-1",
    descriptions: {
      title: "Portifólio Clovis Antunes",
      spanI: "Design de Portfólio Web, desenvolvido como uma landing page dinâmica e visualmente atraente, voltada para destacar e demonstrar as habilidades e conhecimentos do desenvolvedor. O projeto foi pensado para proporcionar uma experiência intuitiva e envolvente, refletindo as melhores práticas de design e desenvolvimento web.",
      spanII: "frontI.spanII"
    }
  },
  frontII: {
    name: "Portifólio Dandara Bianca",
    deploy: "Website_2",
    category: "Website",
    online: 'https://portifolio-dandara.vercel.app/',
    design: "https://www.figma.com/design/DqT6M5WTb2o2OiAz9p6BGM/Contabilidade?node-id=0-1&t=HztxmjzYsEyGaFdl-1",
    backgroundImage: website2,
    descriptions: {
      title: "Portifólio Dandara Bianca",
      spanI: "Portfólio Web desenvolvido como uma landing page dinâmica e visualmente atraente, destacando as habilidades da designer. Com foco na acessibilidade e interatividade, o projeto oferece uma experiência intuitiva, combinando estética moderna e funcionalidade.",
      spanII: "frontII.spanII"
    }
  },
  frontIIIjI: {
    name: "MultiServ",
    deploy: "Website_6",
    category: "Design",
    online: '',
    design: "https://www.figma.com/design/DqT6M5WTb2o2OiAz9p6BGM/Contabilidade?node-id=0-1&t=HztxmjzYsEyGaFdl-1",
    backgroundImage: design1,
    descriptions: {
      title: "MultiServ",
      spanI: "Design de uma landing page prestadores de serviços em diversas áreas, como manutenção, consultoria, design e muito mais.",
      spanII: ""
    }
  },
  frontIIkII: {
    name: "Contabilidade",
    deploy: "Website_9",
    category: "Design",
    online: '',
    design: "https://www.figma.com/design/DqT6M5WTb2o2OiAz9p6BGM/Contabilidade?node-id=0-1&t=HztxmjzYsEyGaFdl-1",
    backgroundImage: design2,
    descriptions: {
      title: "Contabiliza",
      spanI: "A Contabiliza é uma página única e simples, porém eficaz, dedicada a contadores com diversas especializações em áreas da contabilidade, como fiscal, tributária, trabalhista e financeira. Esta página foi feita em uma landing page única, podendo ser ajustada para o gosto e o segmento do seu negócioDesign de uma landing page para um escritório de contabilidade.",
      spanII: ""
    }
},
frontIIjII: {
  name: "Advocacia",
  deploy: "Website_9",
  category: "Design",
  online: '',
  design: "https://www.figma.com/design/DqT6M5WTb2o2OiAz9p6BGM/Contabilidade?node-id=0-1&t=HztxmjzYsEyGaFdl-1",
  backgroundImage: design3,
  descriptions: {
    title: "Advocacia",
    spanI: "Design de uma landing page dedicada a advogados com diversas especializações em áreas do direito, como civil, comercial, trabalhista e penal",
    spanII: ""
  }
},
  frontIIIaI: {
    name: "TechNova",
    deploy: "Website_5",
    category: "Design",
    online: '',
    design: "https://www.figma.com/design/DqT6M5WTb2o2OiAz9p6BGM/Contabilidade?node-id=0-1&t=HztxmjzYsEyGaFdl-1",
    backgroundImage: "https://uploaddeimagens.com.br/images/004/813/417/original/landingpage.png?1721687021",
    descriptions: {
      title: "TechNova",
      spanI: "A TechNova é uma página única e simples, porém eficaz, dedicada a empresas de tecnologia com diversas especializações em áreas como desenvolvimento de software, infraestrutura de TI, segurança cibernética e consultoria tecnológica.",
      spanII: "Esta página foi feita em uma landing page única, podendo ser ajustada para o gosto e o segmento do seu negócio."
    }
  },
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
        <TitleText colorText="#ffffff" text={t("see")} />
        <span>:</span>
      </div>
      <h2 className={styles.categoryTitle}>Websites</h2>
    <div className={`${styles.portfolioComponent} ${expanded ? styles.expanded : ""}`}>
      {Object.entries(projects)
        .filter(([, project]) => project.category === "Website")
        .map(([key, project]) => (
          <div
          key={key}
          className={styles.portCard}
          onMouseEnter={() => setHoveredIndex(key)}
          onMouseLeave={() => setHoveredIndex(null)}
          >
            <span>
              {project.name}
            </span>
            <p>
              {project.descriptions.spanI}
            </p>
            <div className={styles.buttons}>
                <button className={styles.design}>
                    <a href={project.design} target="_blank" rel="noopener noreferrer">
                      Acessar Design
                      </a>
                </button>
                {project.online && (
                  <button className={styles.online}>
                    <a
                      href={project.online}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Online
                    </a>
                  </button>
                )}
            
              </div>
            <img src={project.backgroundImage} alt={`Image for ${project.name}`} />
          </div>
        ))}
    </div>
    <h2 className={styles.categoryTitle}>Design</h2>
    <div className={`${styles.portfolioComponent} ${expanded ? styles.expanded : ""}`}>
      {Object.entries(projects)
        .filter(([, project]) => project.category === "Design")
        .map(([key, project]) => (
          <div
            key={key}
            className={styles.portCard}
            onMouseEnter={() => setHoveredIndex(key)}
            onMouseLeave={() => setHoveredIndex(null)}
          > 
          <span>
          {project.name}
        </span>
        <p>
          {project.descriptions.spanI}
        </p>
        <div className={styles.buttons}>
                <button className={styles.design}>
                    <a href={project.design} target="_blank" rel="noopener noreferrer">
                      Acessar Design
                      </a>
                </button>
                {project.online && (
                  <button className={styles.online}>
                    <a
                      href={project.online}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Online
                    </a>
                  </button>
                )}
            
              </div>
            <img src={project.backgroundImage} alt={`Image for ${project.name}`} />
            
            
          </div>
        ))}
    </div>
    </div>
    </>
  );
};

export default Portfolio;
