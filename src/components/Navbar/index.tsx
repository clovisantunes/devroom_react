import React, { useEffect, useState } from "react";
import LogoUi from "../UI/LogoUi";
import NavList from "../UI/NavList/index.";
import styles from "./styles.module.scss";
import { FaInstagram } from "react-icons/fa";
import LanguageSelector  from '../UI/ChangeLanguage/button'
import { Link } from "react-router-dom";

interface NavbarProps {
  home: string;
  about: string;
  services: string;
  contact: string;
  portfolio?: string;
  color?: string;
}

export default function NavBar({
  
  home,
  about,
  contact,
  services,
  portfolio,
  color
}: NavbarProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  return (
    <div
      className={`${styles.nav_container} ${
        isMobileMenuOpen ? styles.mobileMenuOpen : ""
      }`}
      style={{ backgroundColor: scrollY > 50 || color ? '#141414' : 'transparent' }}
    >
      <div className={styles.logoCard} >
          <LogoUi
            alt={"Logo DevRoom"}
            width={280}
            height={180}
            priority={true}
          />
      </div>

      <div className={styles.itemsContainer}>
        <NavList
          port={about}
          contact={contact}
          home={home}
          services={services}
        />
    
      </div>

      <div className={styles.instaCard}>
        <a href="https://www.instagram.com/devroom_oficial/" target="blank">
          <FaInstagram />
        </a>
       
      </div>
     
      <div
        className={`${styles.navBurgerCard} ${
          isMobileMenuOpen ? styles.burgerClicked : ""
        }`}
        onClick={toggleMobileMenu}
      >
        <div className={styles.navBurger1}></div>
        <div className={styles.navBurger2}></div>
        <div className={styles.navBurger3}></div>
      </div>
      <div
        className={`${styles.coverScreen} ${
          isMobileMenuOpen ? styles.coverScreenVisible : ""
        }`}
      >
        <div className={styles.itemsContainerBurber}>
          <NavList
            port={about}
            contact={contact}
            home={home}
            services={services}
          />
          <div className={styles.instaCardHamburger}>
          <a href="https://www.instagram.com/devroom_oficial/" target="blank">
          <FaInstagram />
        </a>
          </div>
        </div>
      </div>
    </div>
  );
}
