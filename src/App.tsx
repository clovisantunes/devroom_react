import React, { useEffect } from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Helmet } from 'react-helmet';
import Navbar from "./components/Navbar/index"
import Main from './components/Main/index';
import Services from './components/Services/index'
import LanguageSelector from './components/UI/ChangeLanguage/button'
import Portfolio from './components/Portfolio/index';
import About from './components/About/index';
import Footer from './components/Footer/index';
import Carousel from './components/UI/Carousel';
import WhatsContact from './components/UI/WhatsContact';
import Banner from './components/Banner';
import Phases from './components/Phases';
import ReactGA from "react-ga4";
import styles from './styles/styles.module.scss';
import Team from './components/Team';

export default function App() {
  useEffect(() => {
    ReactGA.initialize("G-PQBPZJDJMP");
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname
    });

    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Helmet>
      <title>DevRoom</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Empresa de desenvolvimento web e suporte de TI em Sapiranga, RS. Focada em criação de sites e serviços de TI para empresas e pessoas de 18 a 50 anos." />
        <meta name="keywords" content="desenvolvimento web, suporte de TI, Sapiranga, criação de sites, TI para empresas" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Desenvolvimento Web e Suporte de TI em Sapiranga, RS - DevRoom" />
        <meta property="og:description" content="Focada em desenvolvimento web e suporte de TI, localizada em Sapiranga, RS. Atendemos pessoas e empresas que precisam de serviços de TI." />
        <meta property="og:url" content="https://devroom.tech/" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:title" content="DevRoom | Desenvolvimento Web e Suporte de TI em Sapiranga, RS" />
        <meta property="og:description" content="Especializada em soluções de TI e desenvolvimento de sites, a DevRoom ajuda empresas a crescerem com suporte completo no Rio Grande do Sul." />
        <meta property="og:url" content="https://devroom.tech/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="geo.region" content="BR-RS" />
        <meta name="geo.placename" content="Sapiranga" />
        <meta name="geo.position" content="-29.6389;-51.0061" />
        <meta name="ICBM" content="-29.6389, -51.0061" />
      
        <meta property="business:contact_data:locality" content="Sapiranga" />
        <meta property="business:contact_data:region" content="RS" />
        <meta property="business:contact_data:country_name" content="Brasil" />
        <meta name="author" content="DevRoom - Soluções de TI" />
        <meta name="rating" content="General" />
      
      </Helmet>



      <Navbar 
        home="/"
        about="#about"
        contact="/contact"
        services="#services"  
        portfolio='#portfolio'
      />
      <Main id="home"/>
      <div className={styles.bannerCA}>
      </div>
      <Services id='services' />
      <About buttonRender={true} id="about" />
      <Portfolio id="portfolio" />
      <Team />
      <WhatsContact />
      <Footer id='footer' textColor="#d9d9d9" iconColor="#d9d9d9"/>
    </I18nextProvider>
  );
}
