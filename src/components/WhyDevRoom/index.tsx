import { useState } from "react";
import styles from "./styles.module.scss";
import { TbWorldWww } from "react-icons/tb";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { MdContactSupport } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { TbPigMoney } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";


const buttonsData = [
  {
    id: 1,
    title: "Desenvolvemos seu site",
    icon: <TbWorldWww />,
    description: {
      title: "Desenvolvemos seu website",
      title2: "com um design moderno,",
      title3: "sofisticado e profissional.",
      items: [
        {
          icon: <BiLogoTelegram />,
          subtitle: "Site rápido e moderno",
          description:
            "Seu site contará com as melhores ferramentas para garantir uma navegação fluída, intuitiva e rápida.",
        },
        {
          icon: <TbPigMoney />,
          subtitle: "Poupe tempo e dinheiro",
          description:
            "Desenvolvemos seu site pelo melhor preço do mercado. Além disso, garantimos a entrega de todos os nossos projetos com agilidade.",
        },
        {
          icon: <BsGraphUpArrow />,
          subtitle: "Seu site no topo",
          description:
            "Tenha acesso às melhores ferramentas de otimização para posicionar seu site no topo do Google e aumentar suas visitas.",
        },
        {
          icon: <FaCheck />,
          subtitle: "Do jeito que você quiser",
          description:
            "Para criar o melhor site para o seu negócio, nossos especialistas vão conhecer tudo sobre ele. Por e-mail, você preenche um formulário com o perfil da sua empresa. Por telefone, você nos conta suas expectativas para o site.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Personalize seu site",
    icon: <PiPaintBrushDuotone />,
    description: {
      title: "",
      title2: "",
      title3: "",
      items: [
        {
          icon: <PiPaintBrushDuotone />,
          subtitle: "Fácil de encontrar ",
          description: "O Site Pronto já inclui práticas de SEO, garantindo a otimização da presença do seu site nos motores de busca.",
        },
        {
          icon: <PiPaintBrushDuotone />,
          subtitle: "Para todas as telas",
          description: "Seu site é responsivo, ou seja, ele se ajusta para oferecer uma visualização perfeita em qualquer tipo de tela, seja no computador, celular ou tablet.",
        },
        {
          icon: <PiPaintBrushDuotone />,
          subtitle: "Expansivo escalonável",
          description: "Precisa de mais de 3 páginas? Sem problemas! Entre em contato com a Central de Atendimento e adicione a quantidade que precisar.",
        },
        {
          icon: <PiPaintBrushDuotone />,
          subtitle: "Ajuste sempre que precisar",
          description: "Você pode contratar manutenções extras para alterar seu sita da forma que desejar.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Suporte",
    icon: <MdContactSupport />,
    description: {
      title: "",
      title2: "Entre em contato com nosso suporte",
      title3: "",
      items: [
        {
          icon: <MdOutlinePhone />,
          subtitle: "(51) 98139-9275",
        },
        {
          icon: <IoMailSharp />,
          subtitle: "contato@devroom.tech",
        },
      ],
    },
  },
];

export default function WhyDevroom() {
  const [activeId, setActiveId] = useState(1);

  const activeButton = buttonsData.find((button) => button.id === activeId);

  return (
    <>
      <div className={styles.whyDevRoomContainer}>
        <div className={styles.whyDevRoomCard}>
          <div className={styles.whyDevRoomTitle}>
            <h1>Por que você deve criar um site com a DevRoom? </h1>
            <p>
            Na DevRoom, criamos sites modernos e de alta performance para levar seu negócio ao próximo nível. Garantimos entrega rápida, suporte contínuo, e utilizamos as melhores tecnologias para oferecer sites velozes e eficientes. Nossos planos são acessíveis, totalmente customizáveis e feitos para atender às suas necessidades. Invista em um site profissional com a qualidade que sua marca merece!
            </p>
          </div>
          <div className={styles.whyDevRoomContent}>
            <div className={styles.WhyButtons}>
              {buttonsData.map((button) => (
                <button
                  key={button.id}
                  className={`${styles.whyButton} ${
                    activeId === button.id ? styles.active : ""
                  }`}
                  onClick={() => setActiveId(button.id)}
                >
                  {button.icon} {button.title}
                </button>
              ))}
            </div>
            <div className={styles.WhyContent}>
              <div className={styles.title}>
                <p>{activeButton?.description.title}</p>
                <p>{activeButton?.description.title2}</p>
                <p>{activeButton?.description.title3}</p>
              </div>
              <div className={styles.content}>
                {activeButton?.description.items.map((item) => (
                  <div key={item.subtitle} className={styles.item}>
                    <div className={styles.itemContent}>
                    <div className={styles.icon}>{item.icon}</div>
                    <div className={styles.subtitle}><p>{item.subtitle}</p></div>
                    </div>
                
                    <div className={styles.description}><p>{item.description}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
