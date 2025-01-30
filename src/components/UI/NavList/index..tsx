import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface NavListProps {
  home: string;
  port: string;
  services: string;
  contact: string;
}

export default function NavList({
  home,
  port,
  services,
  contact,
  
}: NavListProps) {
  const { t } = useTranslation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ul>
      <li>
        <Link to={home} onClick={handleScrollToTop}>
          {t("init")}
        </Link>
      </li>
      <li onClick={handleScrollToTop}>
        <a href={port}>{t("port")}</a>
      </li>
      <li onClick={handleScrollToTop}>
        <Link to={contact}>{t("contact")}</Link>
      </li>
      <li onClick={handleScrollToTop} >
        <a href={services}>{t("services")}</a>
      </li>
     
      
    </ul>
  );
}
