import { useEffect, useState } from "react";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import imgPath from "../../assets/images/DevRoom.png";
import { ButtonServices, ButtonUI } from "../UI/ButtonUi";
import { FaWhatsapp } from "react-icons/fa";
import image1 from '../../assets/images/devroom1.png';
import image2 from '../../assets/images/devroom2.png';
import image3 from '../../assets/images/devroom3.png';


interface AboutProps {
  id: string;
  buttonRender: boolean;
}

const img = imgPath;
export default function About({ id, buttonRender }: AboutProps) {
  const { t, i18n } = useTranslation();
  const phoneNumber = "5551981399275";
  const customMessage =
    "Olá! Estou interessado em saber mais informações sobres os planos de desenvolvimento.";
  const encodeMessage = (message: string) => {
    return encodeURIComponent(message);
  };
  const texts = [
    "Aumento nas vendas",
    "Fortalecimento da marca",
    "Construir sua presença online",
    "Mais visibilidade para sua empresa",
    "Maior credibilidade para sua empresa",
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const whatsappLink = `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}&text=${encodeMessage(
    customMessage
  )}`;
  const handleWhatsappClick = () => {
    window.open(whatsappLink, "_blank");
  };
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [
    { id: 1, src: image1, alt: "DevRoom Image 1" },
    { id: 2, src: image2, alt: "DevRoom Image 2" },
    { id: 3, src: image3, alt: "DevRoom Image 3" },
  ];
  const getImageClass = (index: number) => {
    if (index === activeImageIndex) {
      return `${styles.imageActive}`;
    } else if (index === (activeImageIndex + 1) % images.length) {
      return `${styles.imageSecond}`;
    } else {
      return `${styles.imageThird}`;
    }
  };
  return (
    <div className={styles.about_container} id={id}>
      <div className={styles.aboutCard}>
        <div className={styles.imgCard} data-aos="">
        {images.map((image, index) => (
          <img 
          key={image.id} 
          src={image.src} 
          alt={image.alt} 
            className={getImageClass(index)} 
          />
        ))}

        </div>
        <div className={styles.aboutTextContainer} data-aos="">
          <div className={styles.textContent}>
            <TitleText colorText="#161616" text={t("aboutTitle")} weight="400"/>
            <div className={styles.spans}>
              {texts.map((text, index) => (
                <div key={index} className={styles.aboutItem}>
                  <span className={styles.aboutSpan}>{text}</span>
                </div>
              ))}
              
            </div>
            <div className={styles.spanContext}>
            <span>
                  Ficou com duvidas?
                </span>
            </div>  
            <div className={styles.aboutButtons}>
              <div className={styles.aboutButtonNow}>
                {buttonRender && (
                  <ButtonUI
                    fontSize="24px"
                    height="50px"
                    width="200px"
                    localPath="/services"
                    text="Contrate Agora!"
                  />
                )}
                
                </div>
              <div className={styles.aboutButton}>
                <ButtonServices
                  height="50px"
                  width="200px"
                  text="Chame agora"
                  background="#25D366"
                  click={handleWhatsappClick}
                  icon={<FaWhatsapp width={30} height={25} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
