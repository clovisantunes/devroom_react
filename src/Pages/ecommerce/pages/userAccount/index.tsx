import NavBarEcommerce from '../../components/navbar';
import styles from './styles.module.scss';
import informations from '../../utils/informations.json';

export default function UserAccount() {
    return(
        <>
            <NavBarEcommerce 
                headerTexts={informations.navTexts}
                navColors={informations.navColors}
            />
            <div className={styles.userAccountContainer}>
                <div className={styles.userAccountComponent}>

                <nav className={styles.userAccount}>

                </nav>
                <div className={styles.userAccountDetails}>

                </div>
                </div>
            </div>
        </>
    )
}