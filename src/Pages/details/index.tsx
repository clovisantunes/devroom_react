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
                <div className={styles.imagesCard}>
                  <div className={styles.stackItem}>
                    <img
                      src={getImage(selectedProject.images)}
                      alt={selectedProject.name}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Banner />
          </>
        ) : (
          <p>Projeto não encontrado.</p>
        )}
        <ProductsList
          buttonLang="Contrate agora"
          coin="R$"
          descriptionTitle="Contrate agora"
          imgPath="https://images"
          select=""
          subTitles={['Contrate agora']}
          textDescription=""
          title="Contrate agora"
          titleMain="Contrate agora"
          utils={['']}
          values={['  ']}

        />
        <div className={styles.caracteristicsContainer}>
            <h1>
            Principais características de um site padrão da DevRoom
            </h1>
          <div className={styles.layoutCard}>
            <div className={styles.text}>
              <h3>
              Layout responsivo:
              </h3>
              <span>
              Oferecemos desenvolvimento de layouts responsivos que permitem que seu site se adapte automaticamente a diferentes tamanhos de tela, proporcionando uma experiência de usuário consistente em dispositivos como desktops, tablets e smartphones. Utilizamos grids flexíveis, imagens ajustáveis e media queries para garantir que a interface e o conteúdo se adaptem de forma fluida e otimizada, valorizando cada detalhe do seu projeto em qualquer resolução de tela.
              </span>
            </div>
            <div className={styles.imagemLayout}>

            </div>
          </div>
          <div className={styles.contentCard}>
            <div className={styles.imagemContent}>

            </div>
            <div className={styles.text}>
            <h3>
              Otimização de conteúdo:
              </h3>
              <span>
              Nosso serviço de Otimização de Conteúdo garante que o conteúdo do seu site seja relevante, atrativo e ajustado para alcançar melhor desempenho em motores de busca. Com técnicas de SEO, análise de palavras-chave e estruturação eficiente, maximizamos a visibilidade do seu site, melhorando o ranqueamento e a experiência do usuário. Esse serviço assegura que seu conteúdo seja claro, organizado e acessível, aumentando o alcance e engajamento do público-alvo.
              </span>
            </div>
          </div>
        </div>
        <WhatsContact />
        <Team />
        <Footer iconColor="white" id="details" textColor="white" />
      </div>
    </>
  );
}
