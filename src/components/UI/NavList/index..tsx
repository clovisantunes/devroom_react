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
  const { t, i18n } = useTranslation();

  return (
    <ul>
      <li>
        <Link to={home}>{t("init")}</Link>
      </li>
      <li>
        <a  href={services}>{t("services")}</a>
      </li>
      <li>
      <a href={port}>{t('port')}</a>
      </li>
      <li>
        <Link to={contact}>{t("contact")}</Link>
      </li>
    </ul>
  );
}
