import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { IoSpeedometer } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function ServicesItems() {
  const { t } = useTranslation();
  const services: {
    id: string;
    title: string;
    logo?: JSX.Element;
    service: string[];
  }[] = [
    {
      id: "delivery",
      title: t("serviceMarketing"),
      logo: <IoSpeedometer size={60} />,
      service: [t("digitalMarketingItem1")],
    },
    {
      id: "identity",
      title: t("serviceHost"),
      logo: <MdOutlineDesignServices size={60} />,
      service: [t("hostItem1")],
    },

    {
      id: "SEO",
      title: t("serviceDesign"),
      logo: <GiProgression size={60} />,
      service: [t("designItem1")],
    },
    {
      id: "suporte",
      title: t("suporteTecnico"),
      logo: <BiSupport size={60} />,
      service: [t("suporteTecnico1")],
    },
  ];

  return (
    <>
      <div className={styles.servicesItems}>
        {services.map((service, index) => (
            <div key={index} className={styles.servicesItem}>
                <div className={styles.border}>
            <a href={`detailService#${service.id}`}>
              <div className={styles.nameLogo}>
                <span>{service.logo}</span>
                <div className={styles.name}>
                  <h3>{service.title}</h3>
                  <div className={styles.line}>
                    <MdKeyboardArrowRight size={30} />
                  </div>
                </div>
              </div>
            </a>
        </div>
          </div>
        ))}
      </div>
    </>
  );
}
