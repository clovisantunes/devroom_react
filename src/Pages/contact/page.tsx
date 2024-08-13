import NavBar from "../../components/Navbar"; 
import styles from "./styles.module.scss";
import Footer from "../../components/Footer"; 
import ContactPage from "../../components/ContactPage";  
import { useTranslation } from "react-i18next";

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
        <div className={styles.contactForm}>
            <ContactPage 
                lang={t}
            />
        </div>
          <div  className={styles.imageCard} />
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

