import React, { ChangeEvent, useEffect, useState } from "react";
import InputUi from "../UI/InputUi/index";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import SubTexts from "../UI/SubTexts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LogoUi from "../UI/LogoUi";
import { ButtonContact, ButtonServices, ButtonUI } from "../UI/ButtonUi";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import Send from "../../Pages/Send";
import About from "../About";
import Portfolio from "../Portfolio";
import Banner from "../Banner";

interface ContactProps {
  title: string;
  service: string;
  id: string;
}

export default function ContactForm({ title, service, id }: ContactProps) {
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState(`${t("buy")} ${service}-${title}.`);

  useEffect(() => {
    setMessage(`${t("buy")} ${service}-${title}.`);
  }, [service, title, t]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const [ddd, setDdd] = useState("");

  useEffect(() => {
    setMessage(`${t("buy")} ${service}-${title}!`);
  }, [title]);

  useEffect(() => {
    setIsFormValid(
      name.trim() !== "" && email.trim() !== "" && phone.trim() !== ""
    );
  }, [name, email, phone]);

  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const [contactPreference, setContactPreference] = useState<string>("");

  const buttons = [
    { text: "Website" },
    { text: "Blogs" },
    { text: "E-commerce" },
    { text: "Design" },
    { text: "Marketing Digital" },
    { text: "SEO/Google Ads" },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [buttonStyles, setButtonStyles] = useState(
    buttons.map(() => ({ background: "#FFFFFF", color: "black" }))
  );
  const toggleButtonStyle = (index: number, text: string) => {
    setButtonStyles((prevStyles) => {
      const updatedStyles = prevStyles.map((style, i) =>
        i === index
          ? {
              background:
                style.background === "#FFFFFF"
                  ? "var(--colors-neutral-900)"
                  : "#FFFFFF",
              color: style.color === "black" ? "white" : "black",
            }
          : style
      );
      return updatedStyles;
    });
  
    setNameVisible(true);
    setSelectedButtons((prevSelected) => {
      if (prevSelected.includes(text)) {
        return prevSelected.filter((button) => button !== text);
      } else {
        return [...prevSelected, text];
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const url = window.location.href;
      if (url.includes("Website")) {
        const websiteIndex = buttons.findIndex((button) =>
          button.text.includes("Website")
        );

        if (websiteIndex !== -1) {
          toggleButtonStyle(websiteIndex, "Website");
        }
      }
      if (url.includes("Blogs")) {
        const blogIndex = buttons.findIndex((button) =>
          button.text.includes("Blogs")
        );

        if (blogIndex !== -1) {
          toggleButtonStyle(blogIndex, "Blogs");
        }
      }
      if (url.includes("E-commerce")) {
        const ecommerceIndex = buttons.findIndex((button) =>
          button.text.includes("E-commerce")
        );

        if (ecommerceIndex !== -1) {
          toggleButtonStyle(ecommerceIndex, "E-commerce");
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [contactButtonStyles, setContactButtonStyles] = useState([
    { background: "#FFFFFF", color: "black" },
    { background: "#FFFFFF", color: "black" },
  ]);

  const toggleContactButtonStyle = (index: number, text: string) => {
    setContactButtonStyles((prevStyles) =>
      prevStyles.map((style, i) =>
        i === index
          ? {
              background:
                style.background === "#FFFFFF"
                  ? "var(--colors-neutral-900)"
                  : "#FFFFFF",
              color: style.color === "black" ? "white" : "black",
            }
          : style
      )
    );

    setTextVisible(true);
    setContactPreference(text);
  };
  const handleEmailClick = () => {
    if (!isValidDDD(ddd)) {
      toast.error("Por favor, insira um DDD válido.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  
    if (!isValidPhone(phone)) {
      toast.error("Por favor, insira um número de telefone válido com 9 dígitos.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Por favor, insira um e-mail válido.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; 
    }
    if (!isFormValid) {
      toast.error("Por favor, preencha todos os campos.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const templateParams = {
        to_name: name,
        from_name: name,
        email: email,
        phone: `(${ddd}) ${phone}`,
        selectedButtons: selectedButtons.join(", "),
        contactPreference: contactPreference,
        message: `Olá,\n\nVocê possui uma nova mensagem de ${name}:\n\nPreferência de contato: ${contactPreference}\nServiços selecionados: ${selectedButtons.join(
          ", "
        )}\n\nDetalhes do contato:\nNome: ${name}\nEmail: ${email}\nTelefone: (${ddd}) ${phone} \n\n${message} ${window.location.hash}`, // incluir a parte da URL após #
      };
  
      emailjs
        .send(
          "service_lgvm5ri",
          "template_ne1bh6f",
          templateParams,
          "iO2lpoB-bfL_4roVH"
        )
        .then(
          (response) => {
            toast.success("Email enviado com sucesso!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setSendEmail(true);
            setName("");
            setEmail("");
            setPhone("");
            setSelectedButtons([]);
            setContactPreference("");
            setMessage(`${t("buy")} ${service}-${title}.`);
            setNameVisible(false);
            setPhoneVisible(false);
            setEmailVisible(false);
            setButtonsVisible(false);
            setTextVisible(false);
            setButtonVisible(false);
          },
          (err) => {
            console.log("FAILED...", err);
            toast.error("Falha ao enviar o email.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
    }
  };


  useEffect(() => {
    if (sendEmail) {
      const timer = setTimeout(() => {
        setSendEmail(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [sendEmail]);

  const handleNumericInput = (e: ChangeEvent<HTMLInputElement>, setter: (value: string) => void) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');

    if (value !== numericValue) {
      toast.error('Apenas números são permitidos.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setter(numericValue);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidDDD = (ddd: string) => {
    return ddd.length === 2;
  };
  const isValidPhone = (phone: string) => {
    return phone.length === 9;
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.contactContainer} id="contact">
        {sendEmail && <Send />}
        <div className={styles.contactForm}>
          <div className={styles.textContactForm}>
            <div className={styles.logoCard}>
              <LogoUi alt="logo DevRoom" height={100} width={100} priority />
            </div>
            <div className={styles.textTitle}>
              <TitleText colorText="white" text={t("reminder")} span={"!"} />
            </div>
            <div className={styles.textSubTitle}>
              <SubTexts
                colorText="#ABA9AB"
                text={t("remindertext")}
                span={"."}
              />
            </div>
          </div>

          <form className={styles.formContainer} action="#">
            <div className={styles.buttonContainer}>
              <div className={styles.textButons}>
                <TitleText
                  colorText="white"
                  text={t("enterContact")}
                  span="?"
                />
                <SubTexts
                  colorText="#ABA9AB"
                  text="Você poderá selecionar mais que uma opção"
                />
              </div>
              <div className={styles.buttonsCard}>
                {buttons.map((button, text) => (
                  <div
                    className={styles.buttonCard}
                    key={text}
                    onClick={() => toggleButtonStyle(text, button.text)}
                  >
                    <ButtonServices
                      key={text}
                      background={buttonStyles[text].background}
                      color={buttonStyles[text].color}
                      text={button.text}
                      height="40px"
                      localPath=""
                      width="100%"
                    />
                  </div>
                ))}
              </div>
            </div>

            {nameVisible && (
              <div className={`${styles.card} ${styles.fadeIn}`}>
                <div className={styles.aboutTitle}>
                  <TitleText colorText="white" text={t("Sobre")} span=":" />
                </div>
                <InputUi
                  id="name"
                  label="name"
                  labelName="Nome:"
                  onChange={(e) => {
                    setName(e.target.value);
                    setPhoneVisible(true);
                  }}
                  placeholder={t("enterName")}
                  type="text"
                  name="name"
                />
              </div>
            )}
            {phoneVisible && (
              <div className={`${styles.card} ${styles.fadeIn}`}>
                <label htmlFor="phone">Telefone:</label>
                <div className={styles.phoneCard}>
                  <input
                    className={styles.DDDItem}
                    type="text"
                    placeholder="DDD"
                    value={ddd}
                    onChange={(e) => handleNumericInput(e, setDdd)}
                    inputMode="numeric"
                  />
                  <InputUi
                    id="phone"
                    onChange={(e) => {
                      const value = e.target.value.slice(0, 9)
                      setPhone(value);
                      setEmailVisible(true);
                    }}
                    placeholder={t("enterPhone")}
                    type="text"
                    name="phone"
                    value={phone}
                    inputMode="tel"
                  />
                </div>
              </div>
            )}

            {emailVisible && (
              <div className={`${styles.card} ${styles.fadeIn}`}>
                <InputUi
                  id="email"
                  label="name"
                  labelName="Email:"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setButtonsVisible(true);
                  }}
                  placeholder={t("enterEmail")}
                  type="text"
                  name="email"
                />
              </div>
            )}
            {buttonsVisible && (
              <div className={styles.buttonCardContact}>
                <SubTexts
                  colorText="#ABA9AB"
                  text={"Prefencia de contato"}
                  span={":"}
                />
                <div
                  className={styles.buttonOptions}
                  onClick={() => toggleContactButtonStyle(0, "whatsapp")}
                >
                  <ButtonServices
                    text="whatsapp"
                    fontSize="16px"
                    height="40px"
                    localPath=""
                    width="100%"
                    background={contactButtonStyles[0].background}
                    color={contactButtonStyles[0].color}
                  />
                </div>
                <div
                  className={styles.buttonOptions}
                  onClick={() => toggleContactButtonStyle(1, "E-mail")}
                >
                  <ButtonServices
                    text="E-mail"
                    fontSize="16px"
                    height="40px"
                    localPath=""
                    width="100%"
                    background={contactButtonStyles[1].background}
                    color={contactButtonStyles[1].color}
                  />
                </div>
              </div>
            )}
            {textVisible && (
              <div className={`${styles.textareaCard} ${styles.fadeIn}`}>
                <label htmlFor="message">
                  {"Deixe uma breve descrição do seu projeto aqui:"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("enterMessage")}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setButtonVisible(true);
                  }}
                  className={styles.textareaField}
                  disabled={false}
                ></textarea>
              </div>
            )}
            {buttonVisible && (
              <div className={styles.submitContainer}>
                <button
                  className={styles.submitButton}
                  type="button"
                  onClick={handleEmailClick}
                >
                  {t("submit")}
                </button>
              </div>
            )}
          </form>
        </div>
          <Banner />
      </div>
    </>
  );
}
