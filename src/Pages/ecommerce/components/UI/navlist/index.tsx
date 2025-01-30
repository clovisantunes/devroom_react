import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface NavListProps {
    items: string[];
}

const NavList: React.FC<NavListProps> = ({ items }) => {
    const color = "#fafafa";

    return (
        <ul className={styles.ulContainer}>
            <li className={styles.liItem}>
                <Link to="/" className={styles.link} style={{ '--hover-color': color, color: color } as React.CSSProperties}>Inicio</Link>
            </li>
            <li className={styles.liItem}>
                <Link to="/shop/mais_vendidos" className={styles.link} style={{ '--hover-color': color, color: color } as React.CSSProperties}>Mais Vendidos</Link>
            </li>
            <li className={styles.liItem}>
                <Link to="/#portfolio" className={styles.link} style={{ '--hover-color': color, color: color } as React.CSSProperties}>Sites</Link>
            </li>
            {items.map((item, index) => (
                <li key={index} className={styles.liItem}>
                    <Link to={`/shop/${item.toLowerCase()}`} className={styles.link} style={{ '--hover-color': color, color: color } as React.CSSProperties}>{item}</Link>
                </li>
            ))}
        </ul>
    );
};

export default NavList;
