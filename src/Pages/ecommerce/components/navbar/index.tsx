// NavBar.tsx
import React, { useState } from "react";
import styles from './styles.module.scss';
import SpanText from "../UI/Texts/Texts";
import { IoLocationSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import SearchBar from "../UI/SearchBar/index";
import NavList from "../UI/navlist/index";
import { Link } from "react-router-dom";
import { isUserLoggedIn } from "../../utils/AuthUser"; 
import AuthComponent from "../Auth";

interface NavProps {
    navColors: {
        backgroundNavContainer: string;
        backgroundHeaderContainer: string;
        backgroundCategoriesContainer: string;
        backgroundCategoriesBorder: string;
      
    };
    headerTexts: {
        number: string;
        mail: string;
        country: string;
    };
}

const NavBarEcommerce: React.FC<NavProps> = ({ navColors, headerTexts }) => {
    const isLoggedIn = isUserLoggedIn();
    const [sign, setSign] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
    const [closing, setClosing] = useState(false); // Novo estado para controlar animação de fechamento

    const handleEmailClick = () => {
        window.location.href = `mailto:${headerTexts.mail}`;
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${headerTexts.number}`;
    };

    const handleAuthClick = (mode: 'login' | 'register') => {
        setAuthMode(mode);
        setSign(true);
        setClosing(false); // Garantir que a animação de fechamento não seja aplicada
    };

    const closeAuth = () => {
        setClosing(true); // Aplicar a animação de fechamento
        setTimeout(() => setSign(false), 500); // Aguarde a animação antes de esconder o componente
    };

    return (
        <header className={styles.navContainer} style={{ backgroundColor: navColors.backgroundNavContainer }}>
            <div className={styles.headerContainer} style={{ backgroundColor: navColors.backgroundHeaderContainer }}>
                <div className={styles.itemsHeader}>
                    <SpanText span={headerTexts.number} icon={<FaPhone />} onClick={handlePhoneClick} />
                    <SpanText icon={<MdMailOutline />} span={headerTexts.mail} onClick={handleEmailClick} />
                    <SpanText icon={<IoLocationSharp />} span={headerTexts.country} />
                </div>
                <div className={styles.userItem}>
                    {isLoggedIn ? (
                        <Link to='/my-account'>
                            <SpanText icon={<FaUser />} span="Minha conta" onClick={() => console.log("Minha conta")} />
                        </Link>
                    ) : (
                        <>
                            <SpanText icon={<FaUser />} span="Login" onClick={() => handleAuthClick('login')} />
                            <SpanText icon={<FaUser />} span="Registre-se" onClick={() => handleAuthClick('register')} />
                        </>
                    )}
                </div>
                {sign && (
                    <div className={`${styles.signContainer} ${closing ? styles.close : styles.open}`}>
                        <AuthComponent mode={authMode} closeAuth={closeAuth} switchMode={setAuthMode} />
                    </div>
                )}
            </div>
            <div className={styles.navContainerItems}>
                <SearchBar />
            </div>
            <div
                className={styles.categoriesContainer}
                style={{
                    backgroundColor: navColors.backgroundCategoriesContainer,
                    borderTop: navColors.backgroundCategoriesBorder,
                }}
            >
                <NavList items={["Hardware", "Periféricos"]} />
            </div>
        </header>
    );
};


export default NavBarEcommerce;