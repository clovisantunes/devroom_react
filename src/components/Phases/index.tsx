import { ButtonContact } from '../UI/ButtonUi'
import TitleText from '../UI/TitleText'
import styles from './styles.module.scss'
import { FaArrowRight } from "react-icons/fa6";
export default function Phases() {
    return (
        <>
            <div className={styles.phases_container}>
                <div className={styles.phases_TitleCard}>
                    <div className={styles.phases_Title}>
                        <div className={styles.titleContent}>

                            <TitleText
                                colorText='#FFFFFF'
                                text='Conheça as etapas de criação de seu site'
                            />
                            <span>
                                :
                            </span>
                        </div>
                        <span className={styles.pass}>
                            Passo a passo
                        </span>
                    </div>
                    <div className={styles.phases_description}>
                        <div className={styles.descriptionContent}>
                            <p>
                            Veja  e entenda o que engloba nossa metodologia e entenda como funciona o nosso processo de desenvolvimento de sites.
                            </p>
                            <div className={styles.buttonPhases}>
                            <ButtonContact 
                                text='Faça um orçamento'
                                contact='#'
                                fontSize='16px'
                                width='100%'
                                height='100%'
                                icon={<FaArrowRight />}
                            />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}