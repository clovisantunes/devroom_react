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
import Banner from "../../components/Banner";
import WhatsContact from "../../components/UI/WhatsContact";
import ProductsList from "../../components/ProductCard";

interface DetailsProps {
  project: string;
  type: string;
  name: string;
  subText: string;
  mainImage: "string";
  aboutProject: string;
  technologies: string[];
  images: string;
  soluction: string;
  layout: string;
  content: string;
  plans: {
    title: string;
    subTitle: string;
    value: string;
    utils: string[];
  }[];

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

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const title = selectedProject?.plans?.[0]?.title ?? "Título padrão";
  const subTitle = selectedProject?.plans?.[0]?.subTitle ?? "Subtítulo padrão";
  const value = selectedProject?.plans?.[0]?.value ?? "Valor padrão";
  const utils = selectedProject?.plans?.[0]?.utils ?? [];
  const descriptionTitle = "Contrate agora";

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
              
              </div>
            </div>
            
          </>
        ) : (
          <p>Projeto não encontrado.</p>
        )}

            <ProductsList
            name={selectedProject?.name}
          title={title}
          subTitles={Object.values(subTitle)}
          buttonLang="Contrate agora"
          coin="R$"
          descriptionTitle={descriptionTitle}
          imgPath="https://images"
          select=""
          textDescription="Aqui você encontrará os melhores serviços."
          titleMain={title}
          utils={Object.values(utils)}
          values={Object.values(value)}
        />
        <Banner />
        <WhatsContact />
        <Team />
        <Footer iconColor="white" id="details" textColor="white" />
      </div>
    </>
  );
}
