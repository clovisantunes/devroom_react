import React from 'react';
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
import ButtonNavigation from './components/UI/ButtonNavigation';
import GoogleTagManager from './GoogleAnalitycs';
import Banner from './components/Banner';
import Phases from './components/Phases';

export default function App() {
  return (
    
    <I18nextProvider i18n={i18n}>
       <GoogleTagManager />
         <Navbar 
      home="#home"
      about="#about"
      contact="/contact"
      services="#services"  
    />
      <ButtonNavigation path='' />
      <Main  id="home"/>
      <Banner />
      <Services id='services' />
      <Carousel />
      <About id="about" />
      <Phases />
      <Portfolio id="about" />
      <WhatsContact />
      <Footer  id='footer'  textColor="#d9d9d9" iconColor="#d9d9d9"/>
    </I18nextProvider>
  );
}