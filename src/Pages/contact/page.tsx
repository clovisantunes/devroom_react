import NavBar from "../../components/Navbar"; 
import styles from "./styles.module.scss";
import Footer from "../../components/Footer"; 
import ContactPage from "../../components/ContactPage";  
import { useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";


interface contactProps {
  params: any;
}

export default  function Contact({ params }: contactProps) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <NavBar
        home="/"
        about="/#portfolio"
        contact="/contact"
        services="/#services"
        color="black"
      />
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <div className={styles.textsContact}>
            <h1>
              Fale conosco
            </h1>
            <span>
            Tem alguma duvida? 
            Preencha o formulário ao lado ou acesse nossos canais abaixo!
            </span>
            <div className={styles.contactCard}>

           
            <div className={styles.contactInfo}>
            <span className={styles.iconSvg}>
              <CiMail /> 
              </span>
              <span>
              Nosso email
              <p>contato@devroom.tech</p>
              </span>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.iconSvg}>
              <FiPhone /> 
              </span>
              <span>
              Nosso celular
              <p>(51) 981399275</p>
              </span>
            </div>
            <div className={styles.contactInfo}>
            <span className={styles.iconSvg}>
              <CiLocationOn /> 
              </span>
              <span>
              Nosso endereço
              <p>Sapiranga - RS</p>
              </span>
            </div>
            </div>
            <div className={styles.socialMedia}>
            <SlSocialFacebook />
            <CiInstagram />
              </div>
        </div>
        <div className={styles.contactForm}>
            <ContactPage 
                lang={t}
            />
        </div>
        
      </div>
    </div>
      <Footer 
        iconColor="white"
        id=""
        textColor="white"
      />
    </>
  );
}

