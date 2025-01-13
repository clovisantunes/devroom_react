import React, { useEffect } from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar/index";
import Main from "./components/Main/index";
import Services from "./components/Services/index";
import LanguageSelector from "./components/UI/ChangeLanguage/button";
import Portfolio from "./components/Portfolio/index";
import About from "./components/About/index";
import Footer from "./components/Footer/index";
import Carousel from "./components/UI/Carousel";
import WhatsContact from "./components/UI/WhatsContact";
import Banner from "./components/Banner";
import Phases from "./components/Phases";
import ReactGA from "react-ga4";
import styles from "./styles/styles.module.scss";
import Team from "./components/Team";
import WhyDevroom from "./components/WhyDevRoom";

export default function App() {
  useEffect(() => {
    ReactGA.initialize("G-PQBPZJDJMP");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
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
        <title>
          DevRoom | Desenvolvimento Web e Soluções de TI em Sapiranga, RS
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="A DevRoom oferece desenvolvimento de sites personalizados, suporte de TI, e soluções completas para empresas em Sapiranga, RS. Transforme sua presença digital com design profissional e suporte técnico especializado."
        />
        <meta
          name="keywords"
          content="desenvolvimento web, suporte de TI, criação de sites, soluções de TI, Sapiranga, empresas, Rio Grande do Sul, design de sites, sites personalizados, TI para empresas"
        />

        <meta
          property="og:title"
          content="DevRoom | Desenvolvimento Web e Suporte de TI em Sapiranga, RS"
        />
        <meta
          property="og:description"
          content="Especialistas em criação de sites e suporte técnico para empresas e empreendedores. Atendemos Sapiranga e região, oferecendo soluções completas de TI."
        />
        <meta property="og:url" content="https://devroom.tech/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://devroom.tech/imagem-de-capa.jpg"
        />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DevRoom | Desenvolvimento Web e Soluções de TI"
        />
        <meta
          name="twitter:description"
          content="Desenvolvemos sites modernos e oferecemos suporte técnico completo para empresas no Rio Grande do Sul. Conheça nossas soluções!"
        />
        <meta
          name="twitter:image"
          content="https://devroom.tech/imagem-de-capa.jpg"
        />

        <meta name="geo.region" content="BR-RS" />
        <meta name="geo.placename" content="Sapiranga" />
        <meta name="geo.position" content="-29.6389;-51.0061" />
        <meta name="ICBM" content="-29.6389, -51.0061" />

        <meta property="business:contact_data:locality" content="Sapiranga" />
        <meta property="business:contact_data:region" content="RS" />
        <meta property="business:contact_data:country_name" content="Brasil" />

        <meta name="author" content="DevRoom - Soluções de TI" />
        <meta name="rating" content="General" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <Navbar
        home="/"
        about="#about"
        contact="/contact"
        services="#services"
        portfolio="#portfolio"
      />
      <Main id="home" />
      <Services id="services" />
      <WhyDevroom />
      <Portfolio id="portfolio" />
      <About buttonRender={true} id="about" />
      <Banner />
      <Team />
      <WhatsContact />
      <Footer id="footer" textColor="#d9d9d9" iconColor="#d9d9d9" />
    </I18nextProvider>
  );
}
