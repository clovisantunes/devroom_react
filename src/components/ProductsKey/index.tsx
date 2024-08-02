import React, { useEffect, useState } from "react";
import SubTexts from "../UI/SubTexts";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import { ButtonUI } from "../UI/ButtonUi";
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
        <div className={styles.titleMain}>
          <div className={styles.buttonCard}>
            <ButtonUI
              fontSize="14px"
              height="100%"
              width="100%"
              localPath={whatsappLink}
              text={buttonLang}
              target="_blank"
              click={() => console.log(title)}
            />
          </div>
          <TitleText colorText="white" text={titleMain} />
        </div>
        <div className={styles.descriptionMain}>
          <div className={styles.imageCard}>
            <ImageUi
              alt="Image Site"
              height={1000}
              width={1000}
              path={imgPath}
            />
          </div>
          <div className={styles.descriptionCard}>
            <div className={styles.titleDescription}>
              <TitleText
                colorText="white"
                text={descriptionTitle}
              />
            </div>
            <SubTexts
              colorText="white"
              text={textDescription}
            />
          </div>
        </div>
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
