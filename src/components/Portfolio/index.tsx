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
import website1 from '../../assets/images/portifolio_Clovis.png';
import website2 from '../../assets/images/portifolio_Dandara.png';
import design1 from '../../assets/images/design1.png';
import design2 from '../../assets/images/design2.png';
import design3 from '../../assets/images/design3.png';
import design4 from '../../assets/images/design4.png';

interface PortfolioProps {
  id: string;
}

const projects = {
  frontI: {
    name: "Portifólio Clovis",
    deploy: "Website_1",
    category: "Website",
    backgroundImage: website1,
    online: "https://clovis-antunes.vercel.app/",
    design: "https://www.figma.com/design/DqT6M5WTb2o2OiAz9p6BGM/Contabilidade?node-id=0-1&t=HztxmjzYsEyGaFdl-1",
    descriptions: {
      title: "Portifólio Clovis",
      spanI: "Design de Portfólio Web, desenvolvido como uma landing page dinâmica e visualmente atraente...",
      spanII: "frontI.spanII"
    }
  },
  frontII: {
    name: "Portifólio Dandara",
    deploy: "Website_2",
    category: "Website",
    online: 'https://portifolio-dandara.vercel.app/',
    design: "https://www.figma.com/design/DqT6M5WTb2o2OiAz9p6BGM/Contabilidade?node-id=0-1&t=HztxmjzYsEyGaFdl-1",
    backgroundImage: website2,
    descriptions: {
      title: "Portifólio Dandara",
      spanI: "Portfólio Web desenvolvido como uma landing page dinâmica...",
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
      spanI: "Design de uma landing page prestadores de serviços em diversas áreas...",
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
      spanI: "A Contabiliza é uma página única e simples...",
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
      spanI: "Design de uma landing page dedicada a advogados...",
      spanII: ""
    }
  },
  frontIIjI: {
    name: "TechNova",
    deploy: "Website_9",
    category: "Design",
    online: '',
    design: "https://www.figma.com/design/DqT6M5WTb2o2OiAz9p6BGM/Contabilidade?node-id=0-1&t=HztxmjzYsEyGaFdl-1",
    backgroundImage: design4,
    descriptions: {
      title: "TechNova",
      spanI: "Design de uma landing page dedicada a advogados...",
      spanII: ""
    }
  },
};

const Portfolio = ({ id }: PortfolioProps) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("Todos");
  const [expanded, setExpanded] = useState(false);
  const [TextButton, setTextButton] = useState("Veja mais");
  const [svgButton, setSvgButton] = useState(<MdKeyboardArrowDown />);
  const [btnActive, setBtnActive] = useState("");
  const [isFading, setIsFading] = useState(false);
  const filteredProjects = Object.entries(projects).filter(
    ([, project]) => filter === "Todos" || project.category === filter
  );
  const handleFilterChange = (newFilter: string) => {
    if (newFilter !== filter) {
      setIsFading(true);
      setTimeout(() => {
        setFilter(newFilter);
        setIsFading(false);
      }, 400); 
    }
  };


  return (
    <div className={styles.portfolioContainer} id={id}>
      <div className={styles.shadowBox} />
      <div className={styles.titleItem}>
        <TitleText colorText="#272727" text={t("see")} />
        <span>:</span>
      </div>

      <div className={styles.filters}>
  <button className={filter === "Todos" ? styles.active : ""} onClick={() => handleFilterChange("Todos")}>Todos</button>
  <button className={filter === "Website" ? styles.active : ""} onClick={() => handleFilterChange("Website")}>Sites</button>
  <button className={filter === "Design" ? styles.active : ""} onClick={() => handleFilterChange("Design")}>Design</button>
</div>

<div className={`${styles.portfolioComponent} ${isFading ? styles.fading : ""} ${expanded ? styles.expanded : ""}`}>
        {filteredProjects.map(([key, project]) => (
          <div
            key={key}
            className={styles.portCard}
            >
            <img src={project.backgroundImage} alt={`Image for ${project.name}`} />
            <span>{project.name}</span>
            <div className={styles.buttons}>
              {project.online && (
                <button className={styles.online}>
                  <a href={project.online} target="_blank" rel="noopener noreferrer">
                    Online
                  </a>
                </button>
              )}
              <button className={styles.design}>
                <a href={project.design} target="_blank" rel="noopener noreferrer">
                  Design
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Portfolio;
