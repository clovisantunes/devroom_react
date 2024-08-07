import React, { useEffect, useState } from "react";
import SubTexts from "../UI/SubTexts";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import { ButtonContact, ButtonServices, ButtonUI } from "../UI/ButtonUi";
import NavBar from "../Navbar";
import ImageUi from "../UI/ImageUi";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import Aos from "aos";
import "aos/dist/aos.css";

interface ProductsKeyProps {
  titleMain: string;
  title: string;
  buttonLang: string;
  textDescription: string;
  descriptionTitle: string;
  imgPath: string;
}

const ProductsList: React.FC<ProductsKeyProps> = ({
  titleMain,
  title,
  buttonLang,
  textDescription,
  descriptionTitle,
  imgPath,
}) => {
  const [showContactEmail, setShowContactEmail] = useState(false);
  const [selectedPlanTitle, setSelectedPlanTitle] = useState("");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const encodeMessage = (message: string) => {
    return encodeURIComponent(message);
  };

  const phoneNumber = "5551981399275";
  const customMessage = "Olá! Estou interessado em saber mais informações sobre os planos de desenvolvimento.";
  const whatsappLink = `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}&text=${encodeMessage(customMessage)}`;

  return (
    <div className={styles.container}>
      <NavBar 
        home="/"
        about="/#about"
        contact="/contact"
        services="/#services"
      />
      <div className={styles.mainCard}>
        <TitleText 
          colorText="white"
          text="Precisando de um site profissional, de alta qualidade e baixo custo?"
        />
       <SubTexts 
        colorText="white"
        text="Temos a solução perfeita para você!"
       />
       <SubTexts 
        colorText="white"
        text="Faça seu site responsivo conosco e conquiste seu sucesso online!"
       />

      </div>
        <ContactForm title={selectedPlanTitle} service={titleMain} id="contact"/>
      <Footer
        id="Footer"
        textColor="white"
        iconColor="white"
      />
    </div>
  );
};

export default ProductsList;
