"use client";
import React, { useEffect, useState } from "react";
import SubTexts from "../UI/SubTexts";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import { ButtonUI, ButtonServices } from "../UI/ButtonUi";
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import NavBar from "../Navbar";
import ImageUi from "../UI/ImageUi";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import Aos from "aos";
import "aos/dist/aos.css";

interface ProductsKeyProps {
  titleMain: string;
  title: string;
  select: string;
  subTitles: string[];
  values: string[];
  coin: string;
  utils: string[];
  buttonLang: string;
  textDescription: string;
  descriptionTitle: string;
  imgPath: string;
}

const toRoman = (num: number): string => {
  const romanNumerals = ["I", "II", "III", "IV"];
  return romanNumerals[num - 1] || num.toString();
};

const backgroundFooter = "var(--colors-secondary-700)";

const ProductsList: React.FC<ProductsKeyProps> = ({
  titleMain,
  title,
  subTitles,
  values,
  coin,
  select,
  utils,
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

  const phoneNumber = "5551995930496";

  const customMessage = "Olá! Estou interessado em saber mais informações sobres os planos de desenvolvimento.";

  const whatsappLink = `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}&text=${encodeMessage(customMessage)}`;


  return (
    <div className={styles.container}>
    
      <div className={styles.productsContainer} data-aos="fade-up" >
        {subTitles.map((subTitle, index) => (
          <ProductsCard
            key={index}
            title={title}
            subTitle={subTitle}
            value={values[index]}
            coin={coin}
            select={select}
            util={utils}
            index={index}
            setShowContactEmail={setShowContactEmail}
            setSelectedPlanTitle={setSelectedPlanTitle}
          />
        ))}
      </div>
      {showContactEmail && <ContactForm title={selectedPlanTitle} service={titleMain}  id="contact"/>}
      <Footer
        id="Footer"
        textColor="white"
        iconColor="white"
      />
    </div>
  );
};

const ProductsCard: React.FC<{
  title: string;
  subTitle: string;
  value: string;
  coin: string;
  select: string;
  util: string | string[];
  index: number;
  setShowContactEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPlanTitle: React.Dispatch<React.SetStateAction<string>>;
}> = ({
  title,
  subTitle,
  value,
  coin,
  select,
  util,
  index,
  setShowContactEmail,
  setSelectedPlanTitle,
}) => {
  const romanNumber = toRoman(index + 1);

  const renderIcon = (icon: React.ReactElement) => (
    <div className={styles.utilsIcon}>{icon}</div>
  );

  const titlePlan = `${title} ${romanNumber}`;

  return (
    <div className={styles.productsCard} key={romanNumber}>
      <div className={styles.productTitle}>
        <TitleText colorText="white"  text={titlePlan} />
        <SubTexts colorText="white"  text={subTitle} />
      </div>
      <div className={styles.productCoin}>
        <SubTexts colorText="black"  text={coin} />
        <SubTexts colorText="black"  text={value} />
        <SubTexts colorText="black"  text=",00" />
      </div>
      <div className={styles.productInformation}>
        {Array.isArray(util) ? (
          util.map((item, i) => (
            <div className={styles.utils} key={romanNumber}>
              <SubTexts colorText="black" text={item} />
              {(romanNumber === "I" && i <= 2) ||
              (romanNumber === "II" && i <= 3) ||
              (romanNumber === "III" && i < 5) ||
              romanNumber === "IV"
                ? renderIcon(<FaCheck color="green" />)
                : renderIcon(<IoCloseSharp color="red" />)}
            </div>
          ))
        ) : (
          <div className={styles.utils}>
            <SubTexts colorText="black"  text={util as string} />
            {romanNumber === "I" ||
            romanNumber === "III" ||
            romanNumber === "IV"
              ? renderIcon(<FaCheck />)
              : renderIcon(<IoCloseSharp />)}
          </div>
        )}
      </div>
      <div className={styles.productButton}>
        <ButtonServices
          fontSize="16px"
          height={"100%"}
          width={"100%"}
          text={select}
          key={"plan"}
          contact="#contact"
          click={() => {
            setShowContactEmail(true);
            setSelectedPlanTitle(titlePlan);

          }}
        />
      </div>
    </div>
  );
};

export default ProductsList;
