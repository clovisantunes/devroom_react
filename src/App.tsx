import React, { useEffect } from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from './i18n';
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
      <Navbar 
        home="/"
        about="#portfolio"
        contact="/contact"
        services="#services"  
        portfolio='#portfolio'
      />
      <Main id="home"/>
      <div className={styles.bannerCA}>
      </div>
      <Services id='services' />
      <About buttonRender={true} id="about" />
      <Phases />
      <Portfolio id="portfolio" />
      <WhatsContact />
      <Footer id='footer' textColor="#d9d9d9" iconColor="#d9d9d9"/>
    </I18nextProvider>
  );
}
