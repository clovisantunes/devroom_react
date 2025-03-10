import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate para navegação
import Modal from "react-modal";
import "../../styles/assets/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";
import TitleText from "../UI/TitleText";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useTranslation } from "react-i18next";
import website1 from '../../assets/images/portifolio_Clovis.png';
import website2 from '../../assets/images/portifolio_Dandara.png';
import design1 from '../../assets/images/design1.png';
import design2 from '../../assets/images/design2.png';
import design3 from '../../assets/images/design3.png';
import design4 from '../../assets/images/design4.png';
import links1 from '../../assets/images/links1.png';


interface PortfolioProps {
  id: string;
}

const projects = {
  clovis: {
    name: "Portfólio programador",
    deploy: "Website_1",
    category: "portifolio",
    backgroundImage: website1,
    online: "https://www.figma.com/design/oNGNgwOACnYostyhI0cFjk/Portifolio-clovis?node-id=0-1&t=hrZe2ar1MJDLIkwX-1",
    design: "",
    descriptions: {
      title: "Portfólio programador",
      spanI: "Design de Portfólio Web, desenvolvido como uma landing page dinâmica e visualmente atraente...",
      spanII: "frontI.spanII"
    }
  },
  dandara: {
    name: "Portifolio Designer UI/Ux",
    deploy: "Website_2",
    category: "portifolio",
    online: 'https://www.figma.com/design/QQsiqDEyYVDGSQ3SyET07T/Portifolio-dandara?node-id=0-1&t=T1KHci4AcKaUe6gC-1',
    design: "",
    backgroundImage: website2,
    descriptions: {
      title: "Portifolio Designer UI/Ux",
      spanI: "Portfólio Web desenvolvido como uma landing page dinâmica...",
      spanII: "frontII.spanII"
    }
  },
  multiserv: {
    name: "MultiServ",
    deploy: "Website_6",
    category: "Design",
    online: 'https://www.figma.com/design/5WP50NA9OHt2VBnmseOUQE/multserv?node-id=0-1&t=HToz34s1glLL4QRm-1',
    design: "",
    backgroundImage: design1,
    descriptions: {
      title: "MultiServ",
      spanI: "Design de uma landing page prestadores de serviços em diversas áreas...",
      spanII: ""
    }
  },
  contabilidade: {
    name: "Contabilidade",
    deploy: "Website_9",
    category: "Design",
    online: 'https://www.figma.com/design/DqT6M5WTb2o2OiAz9p6BGM/Contabilidade?node-id=0-1&t=HztxmjzYsEyGaFdl-1',
    design: "",
    backgroundImage: design2,
    descriptions: {
      title: "Contabiliza",
      spanI: "A Contabiliza é uma página única e simples...",
      spanII: ""
    }
  },
  advocacia: {
    name: "Advocacia",
    deploy: "Website_9",
    category: "Design",
    online: 'https://www.figma.com/design/GINVthAGpVvToTErOjCSnK/advocacia?node-id=0-1&t=awqjadOqVmIlmzmI-1',
    design: "",
    backgroundImage: design3,
    descriptions: {
      title: "Advocacia",
      spanI: "Design de uma landing page dedicada a advogados...",
      spanII: ""
    }
  },
  technova: {
    name: "TechNova",
    deploy: "Website_9",
    category: "Design",
    online: 'https://www.figma.com/design/q5AKEFELv8nhqFt9WWvgx5/TechNova?node-id=0-1&t=IQXJq56TBhkjZ0aT-1',
    design: "",
    backgroundImage: design4,
    descriptions: {
      title: "TechNova",
      spanI: "Design de uma landing page dedicada a advogados...",
      spanII: ""
    }
  },
  links1: {
    name: "Pagina de Link's",
    deploy: "Website_9",
    category: "links",
    online: 'https://www.figma.com/design/jBBwtNYhusF4YnZSIn1gj9/Paga-links?node-id=0-1&t=B5eUoBLK3Cr6oyx3-1',
    design: "",
    backgroundImage: links1,
    descriptions: {
      title: "TechNova",
      spanI: "Design de uma landing page dedicada a advogados...",
      spanII: ""
    }
  },

};

const Portfolio = ({ id }: PortfolioProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate(); 
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

  const handleProjectClick = (projectId: string) => {
    navigate(`/details#${projectId.toLowerCase()}`);
  };

  return (
    <div className={styles.portfolioContainer} id={id}>
      <div className={styles.shadowBox} />
      <div className={styles.titleItem}>
        <TitleText colorText="#FF0000" text={t("see")} />
        <span>:</span>
      </div>

      <div className={styles.filters}>
        <button className={filter === "todos:" ? styles.active : ""} onClick={() => handleFilterChange("Todos")}>Todos: </button>
        <button className={filter === "portifolio" ? styles.active : ""} onClick={() => handleFilterChange("portifolio")}>Portifolio</button>
        <button className={filter === "design" ? styles.active : ""} onClick={() => handleFilterChange("Design")}>Design</button>
        <button className={filter === "links" ? styles.active : ""} onClick={() => handleFilterChange("links")}>Pagina de Link's</button>
        <button className={filter === "empresas" ? styles.active : ""} onClick={() => handleFilterChange("empresas")}>Empresas</button>
     
     
     
     </div>

      <div className={`${styles.portfolioComponent} ${isFading ? styles.fading : ""} ${expanded ? styles.expanded : ""}`}>
        {filteredProjects.map(([key, project]) => (
          <div
            key={key}
            className={styles.portCard}
            onClick={() => handleProjectClick(key)}
          >
            <img src={project.backgroundImage} alt={`Image for ${project.name}`} />
            <span>{project.name}</span>
            <div className={styles.buttons}>
              {project.online && (
                <button className={styles.online}>
                  <a href={project.online} target="_blank" rel="noopener noreferrer">
                    Visualizar
                  </a>
                </button>
              )}
              <button className={styles.design}>
                <a href={project.design} target="_blank" rel="noopener noreferrer">
                  Comprar
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
