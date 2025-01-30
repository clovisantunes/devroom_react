import React from "react";
import styles from './styles.module.scss';
import informations from '../../../utils/informations.json';
import ButtonIcon from "../Button/index";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";



export default function SearchBar() {  
   const inputSearchCollor =  informations.inputSearchCollor;
    return(
        <div className={styles.searchBarContainer}>
            <div className={styles.Logo} />
            <div className={styles.searchComponent}>
                <input className={styles.search} type="text" placeholder="O que você procura?" />
                <input className={styles.input} style={{backgroundColor: inputSearchCollor}} type="submit" value="Buscar" />
            </div>
            <div className={styles.favoriteComponent}>
                <ButtonIcon 
                    click={() => console.log("Favoritos")}
                    icon={<FaRegHeart />}
                    text="Favoritos"
                />
                <ButtonIcon 
                    click={() => console.log("Carrinho")}
                    icon={<FaCartShopping />}
                    text="Carrinho"
                />

            </div>
        
        </div>
    )

}