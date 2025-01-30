import React from "react";
import { ButtonHTMLAttributes } from "react";
import styles from  './styles.module.scss';
import informations from '../../../utils/informations.json';


interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    click: () => void;
    text?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({text, click, icon}: ButtonIconProps) => {
    
    const iconColor = informations.buttonFavoriteColors.svg;
    const textColor = informations.buttonFavoriteColors.text; 

    return (

        <button className={styles.buttonIcon} style={{color: iconColor}} onClick={click}>
            {icon}
            <p style={{color:textColor}}>{text}</p>
        </button>
    );
};

export default ButtonIcon;