import React, { useEffect, useRef, useState } from "react";
import { ButtonContact } from "../UI/ButtonUi";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

interface Phase {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Phases {
  contract: Phase;
  design: Phase;
  development: Phase;
  deploy: Phase;
}

export default function Phases() {
  const { t } = useTranslation();
  
  const phases:Phases = {
    contract: {
      id: "01",
      icon: <RiFilePaper2Line />,
      title: "Contratação",
      description:
        t('phasesSeccion')
    },
    design: {
      id: "02",
      icon: <FaFigma />,
      title: "Design",
      description:
        t('phasesSeccionII')
    },
    development: {
      id: "03",
      icon: <IoCodeSlash />,
      title: "Desenvolvimento",
      description:
       t('phasesSeccionIII')
    },
    deploy: {
      id: "04",
      icon: <IoCalendarOutline />,
      title: "Entrega",
      description:
        t('phasesSeccionIV')
    },
  };

  const [renderedPhases, setRenderedPhases] = useState([]);
  const phasesRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
          observer.unobserve(entry.target);
          return () => clearInterval(interval);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (phasesRef.current) {
      observer.observe(phasesRef.current);
    }

    return () => {
      if (phasesRef.current) {
        observer.unobserve(phasesRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.phases_container}>
        <div className={styles.phases_TitleCard}>
          <div className={styles.phases_Title}>
            <div className={styles.titleContent}>
              <TitleText
                colorText="#FFFFFF"
                text={t('phasesTitle')}
                span=":"
              />
            </div>
            <span className={styles.pass}>{t('phasesToPhase')}</span>
          </div>
          <div className={styles.phases_description}>
            <div className={styles.descriptionContent}>
              <p>
                {t('phasesText')}
              </p>
              <div className={styles.buttonPhases}>
                <ButtonContact
                  text={t('phasesButton')}
                  localPath="/services"
                  fontSize="16px"
                  width="100%"
                  height="100%"
                  icon={<FaArrowRight />}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.phasesItems} ref={phasesRef}>
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
