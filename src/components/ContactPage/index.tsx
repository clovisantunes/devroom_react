"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ButtonUI } from "../UI/ButtonUi";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

interface ContactPageProps {
  lang: any;
}

export default function ContactPage({ lang }: ContactPageProps) {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    return name && email && phone && message;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Todos os campos devem ser preenchidos.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const { name, email, phone, reason, message } = formData;
    const templateParams = {
      to_name: name,
      from_name: name,
      email: email,
      phone: phone,
      message: `Olá,\n\nVocê possui uma nova mensagem de ${name}:\n\nDetalhes do contato:\nNome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMotivo: ${reason}\n\n${message}`,
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
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setFormData({
            name: "",
            email: "",
            phone: "",
            reason: "",
            message: "",
          });
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
  };

  return (
    <div className={styles.contactContainer}>
      <ToastContainer />
      <div className={styles.titleText}>
        <TitleText colorText="black" text={t("enterContact")} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.dadosComponent}>
          <div className={styles.inputCards}>
            <div className={styles.inputInfo}>
              <label htmlFor="name">{t("enterName")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputInfo}>
              <label htmlFor="email">{t("enterEmail")}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.inputCards}>
            <div className={styles.inputInfo}>
              <label htmlFor="phone">{t("enterPhone")}</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputInfo}>
              <label htmlFor="reason">Motivo do contato</label>
              <input
                type="text"
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={styles.textAreaCard}>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className={styles.buttonFormCard}>
          <ButtonUI
            fontSize="24px"
            height="2em"
            localPath=""
            text={t("submit")}
            width="50%"
            click={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}
