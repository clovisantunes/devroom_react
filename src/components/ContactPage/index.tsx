"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ButtonUI } from "../UI/ButtonUi";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

interface ContactPageProps {
  lang: any;
}

export default function ContactPage({ lang }: ContactPageProps) {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    return name && email && phone && message;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Todos os campos devem ser preenchidos.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const { name, email, phone, message } = formData;
    const templateParams = {
      to_name: name,
      from_name: name,
      email: email,
      phone: phone,
      message: `Olá,\n\nVocê possui uma nova mensagem de ${name}:\n\nDetalhes do contato:\nNome: ${name}\nEmail: ${email}\nTelefone: ${phone} \n\n${message}`
    };

    emailjs.send('service_lgvm5ri', 'template_ne1bh6f', templateParams, 'iO2lpoB-bfL_4roVH')
      .then((response) => {
        toast.success('Email enviado com sucesso!', {
          position: "top-right",
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
          message: ""
        });
      }, (err) => {
        console.log('FAILED...', err);
        toast.error('Falha ao enviar o email.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className={styles.contactContainer}>
      <ToastContainer />
      <div className={styles.titleText}>
        <TitleText colorText="black" text={t('enterContact')} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.dadosComponent}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t('enterName')}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder={t('enterEmail')}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder={t('enterPhone')}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.textAreaCard}>
          <textarea
            id="message"
            name="message"
            placeholder={t('enterMessage')}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className={styles.buttonFormCard}>
          <ButtonUI
            fontSize="24px"
            height="2em"
            localPath=""
            text={t('submit')}
            width="25%"
            click={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}
