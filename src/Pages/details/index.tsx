import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss";
import detailsData from "./utils/details.json";
import Footer from "../../components/Footer";
import {
  FaCheckCircle,
  FaFigma,
  FaGithub,
  FaJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";
import Team from "../../components/Team";

interface DetailsProps {
  project: string;
  type: string;
  name: string;
  subText: string;
  mainImage: "string";
  aboutProject: string;
  technologies: string[];
  images: string[];
  soluction: string;
  layout: string;
  content: string;
}

const details: DetailsProps[] = detailsData as DetailsProps[];

export default function Details() {
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState<DetailsProps | null>(
    null
  );

  useEffect(() => {
    const projectHash = location.hash.replace("#", "");

    const projectData = details.find((project) => {
      return project.project === projectHash;
    });

    setSelectedProject(projectData || null);
  }, [location.hash]);

  const getImage = (imageName: string) => {
    try {
      return require(`../../assets/images/portifolio/${imageName}`);
    } catch (error) {
      console.error("Imagem não encontrada:", imageName);
      return "";
    }
  };

  const stacksRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const stacks = [
  ]

  const scrollToPosition = (position: number) => {
    if (stacksRef.current) {
      const itemWidth = stacksRef.current.children[0].clientWidth;
      const scrollToPosition = position * itemWidth;
      stacksRef.current.scrollTo({
          left: scrollToPosition,
          behavior: "smooth",
        });
        setScrollPosition(position);
    }
};

const autoScroll = () => {
  clearInterval(intervalId);

  setIntervalId(
    setInterval(() => {
      if (activeButton === 0) {
        handleScrollCenter();
      } else if (activeButton === 1) {
        handleScrollRight();
      } else {
        handleScrollLeft();
      }
    }, 2000)
  );
};
  
  const handleScrollLeft = () => {
    scrollToPosition(0);
    setActiveButton(0);
    setScrollPosition(0); 
  };
  
  const handleScrollCenter = () => {
    if (stacksRef.current && selectedProject) { 
      const containerWidth = stacksRef.current.clientWidth;
      const middlePosition = (stacksRef.current.scrollWidth - containerWidth) / 2;
      stacksRef.current.scrollTo({ left: middlePosition, behavior: "smooth" });
      setScrollPosition(Math.floor(selectedProject.images.length / 2));
      setActiveButton(1);
    }
  };
  
  const handleScrollRight = () => {
    if (selectedProject) { 
      const isLastPosition = scrollPosition >= selectedProject.images.length - 1;
  
      if (isLastPosition) {
        handleScrollLeft();
      } else {
        const newPosition = scrollPosition + 1;
        scrollToPosition(newPosition);
        setScrollPosition(newPosition);
        setActiveButton(2);
      }
    }
  };
  
  useEffect(() => {
    if (selectedProject) { 
      autoScroll();
    }
  
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [activeButton, selectedProject]);

  return (
    <>
      <Navbar
        home="/"
        about="#portfolio"
        contact="/contact"
        services="#services"
        portfolio="#portfolio"
        color="black"
      />
      <div className={styles.detailsContainer}>
        {selectedProject ? (
          <>
            <div className={styles.detailsTitle}>
              <h2>{selectedProject.type}</h2>
              <h1>{selectedProject.name}</h1>
            </div>
            <p>{selectedProject.subText}</p>
            <img
              src={getImage(selectedProject.mainImage)}
              alt={selectedProject.name}
              className={styles.mainImage}
            />
            <div className={styles.aboutProjectContainer}>
              <div className={styles.aboutCard}>
                <h3>
                  Sobre o projeto<span>:</span>
                </h3>
                <p>{selectedProject.aboutProject}</p>
                <strong>Solução:</strong>
                <p>{selectedProject.soluction}</p>
              </div>
              <div className={styles.techCard}>
                <h3>Tecnologias usadas:</h3>
                <ul>
                  {selectedProject.technologies.map((tech) => (
                    <li key={tech}>
                      <FaCheckCircle />
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className={styles.imagesCard} ref={stacksRef}>
  <div className={styles.stacks}>
    {selectedProject.images.map((stack, index) => (
      <div className={styles.stackItem} key={index}>
        <img src={getImage(stack)} alt={`${selectedProject.name} - ${index + 1}`} />
      </div>
    ))}
  </div>
</div>

<div className={styles.buttonContainer}>
  {selectedProject.images.map((_, index) => (
    <button
      key={index}
      onClick={() => scrollToPosition(index)}
      className={`${styles.scrollButton} ${activeButton === index ? styles.activeButton : ''}`}
    />
  ))}
</div>
              </div>
            </div>
          </>
        ) : (
          <p>Projeto não encontrado.</p>
        )}
        <Team />
        <Footer iconColor="white" id="details" textColor="white" />
      </div>
    </>
  );
}
