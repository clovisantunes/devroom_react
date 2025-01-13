import { ButtonIcon } from '../UI/ButtonUi';
import { WhatsAppLink } from '../Utils/WhatsLink';
import styles from './styles.module.scss';

export default function Banner() {
    const handleWhatsappClick: () => void = () => {
        WhatsAppLink();
      };
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.bannerContent}>
                    <h1>Precisando de um site</h1>
                    <h2>personalizado?</h2>
                    <p>
                    Solicite seu site agora e transforme sua presença online.
                    </p>
                    <div className={styles.bannerButtons}>
                        <ButtonIcon
                            fontSize='18px'
                            height='100%'
                            width='100%'
                            text='Fale conosco'
                            click={handleWhatsappClick}
                        />
                    </div>
                </div>
                <div className={styles.bannerImage}>
                </div>
            </div>
        </>
    );
}
