import React, { useEffect, useState } from "react";
import { ButtonContact } from "../UI/ButtonUi";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";

export default function Phases() {
    const phases = {
      contract: {
        id: "01",
        icon: <RiFilePaper2Line />,
        title: "Contratação",
        description:
          "Definição dos objetivos, coleta  de briefing e planejamento das funcionalidades e escopo do projeto.",
      },
      design: {
        id: "02",
        icon: <FaFigma />,
        title: "Design",
        description:
          "Criação do wireframe, identidade visual e da marca, criação do layout e apresentação.",
      },
      development: {
        id: "03",
        icon: <IoCodeSlash />,
        title: "Desenvolvimento",
        description:
          "Programação e codificação  junto a estruturação das paginas e suas funcionalidades, além da otimização E SEO.",
      },
      deploy: {
        id: "04",
        icon: <IoCalendarOutline />,
        title: "Entrega",
        description:
          "Revisão final,  validações e publicação do projeto. Realizando o acompanhamento dos acessos  e desempenho.",
      },
    };
  
    const [renderedPhases, setRenderedPhases] = useState([]);
    useEffect(() => {
        const phaseKeys = Object.keys(phases);
        const initialPhase = phases[phaseKeys[0]];
        setRenderedPhases([initialPhase]);
        let index = 1;
        const interval = setInterval(() => {
          if (index < phaseKeys.length) {
            const phase = phases[phaseKeys[index]];
            setRenderedPhases((prevPhases) => [...prevPhases, phase]);
            index++;
          
          }
        }, 2000);
        return () => clearInterval(interval);
      }, []);

    return (
      <>
        <div className={styles.phases_container}>
          <div className={styles.phases_TitleCard}>
            <div className={styles.phases_Title}>
              <div className={styles.titleContent}>
                <TitleText
                  colorText="#FFFFFF"
                  text="Conheça as etapas de criação de seu site"
                />
                <span>:</span>
              </div>
              <span className={styles.pass}>Passo a passo</span>
            </div>
            <div className={styles.phases_description}>
              <div className={styles.descriptionContent}>
                <p>
                  Veja e entenda o que engloba nossa metodologia e entenda como
                  funciona o nosso processo de desenvolvimento de sites.
                </p>
                <div className={styles.buttonPhases}>
                  <ButtonContact
                    text="Faça um orçamento"
                    contact="#"
                    fontSize="16px"
                    width="100%"
                    height="100%"
                    icon={<FaArrowRight />}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.phasesItems}>
            {renderedPhases.map((phase) => (
              <div
              key={phase.id}
              className={`${styles.phaseItem} ${styles[`phaseItem${phase.id}`]}`}
              >
              <div className={styles.linePhases} />
                <div className={styles.phaseIcon}>{phase.icon}</div>
                <div className={styles.phaseNumber}>
                  {phase.id}
                  <span className={styles.colorPoint}>.</span>
                </div>
                <div className={styles.phaseTitle}>
                  <TitleText colorText="#FFFFFF" text={phase.title} />
                </div>
                <div className={styles.phaseDescription}>
                  <p>{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
