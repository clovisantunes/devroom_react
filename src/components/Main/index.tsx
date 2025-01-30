import React from "react";
import styles from "./styles.module.scss";
import { ButtonServices, ButtonUI } from "../UI/ButtonUi";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import image1 from "../../assets/images/devroom1.png";
import image2 from "../../assets/images/devroom2.png";
import image3 from "../../assets/images/devroom3.png";
import { WhatsAppLink } from "../Utils/WhatsLink";
import { useImageCarousel } from "../Utils/getImagesCarousel/getImagens";

interface MainProps {
  id: string;
}

export default function Main({ id }: MainProps) {
  const { t } = useTranslation();
  const handleWhatsappClick = () => {
    WhatsAppLink();
  };

  const images = [
    { id: 1, src: image2, alt: "DevRoom Image 1" },
    { id: 2, src: image1, alt: "DevRoom Image 2" },
    { id: 3, src: image3, alt: "DevRoom Image 3" },
  ];

  const texts = [
    { id: 1, title: t("textTitle"), text: t("bannerTitle") },
    {
      id: 2,
      title: "Personalizado para você.",
      text: "Do design ao conteúdo, tudo feito sob medida para o seu negócio.",
    },
    {
      id: 3,
      title: "Resultados que impressionam.",
      text: "Maximize conversões com páginas otimizadas para o seu público.",
    },
  ];

  const { activeImageIndex, getImageClass, handleImageClick } = useImageCarousel(images);

  return (
    <div className={styles.main_container} id={id}>
      <div className={styles.cardMain}>
        <div className={styles.main_box}>
          <div className={styles.texts}>
            <h1>{texts[activeImageIndex].title}</h1>
            <span className={styles.typewriter} id="write">
              {texts[activeImageIndex].text}
            </span>
          </div>
          <div className={styles.main_buttons}>
            <div className={styles.buttonsItem}>
              <ButtonServices
                height="35px"
                width="200px"
                text="Chame agora"
                background="#25D366"
                click={handleWhatsappClick}
                icon={<FaWhatsapp width={30} height={25} />}
              />
            </div>
            <div className={styles.buttonsItem}>
              <ButtonUI
                fontSize="24px"
                height="35px"
                width="200px"
                localPath="/contact"
                text="Entre em contato"
              />
            </div>
          </div>
        </div>

        <div className={styles.imagesMain}>
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={getImageClass(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.imageButtons}>
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => handleImageClick(index)}
            className={activeImageIndex === index ? styles.activeButton : styles.inactiveButton}
          />
        ))}
      </div>
    </div>
  );
}
