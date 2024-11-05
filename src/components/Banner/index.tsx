import { ButtonIcon } from '../UI/ButtonUi';
import styles from './styles.module.scss';

export default function Banner() {
    const encodeMessage = (message: string) => {
        return encodeURIComponent(message);
    };
    const phoneNumber = "5551981399275";
    const customMessage = "Olá! Estou interessado em saber mais informações sobre os planos de desenvolvimento.";
    const whatsappLink = `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneNumber}&text=${encodeMessage(customMessage)}`;

    const handleWhatsappClick = () => {
        window.open(whatsappLink, '_blank');
    };
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.bannerContent}>
                    <h1>Desenvolva seu projeto conosco</h1>
                    <h2>Conte com a DevRoom para colocar seu projeto no ar.</h2>
                    <p>
                        Entre em contato com nossos especialistas para conversar sobre o seu projeto! Teremos o prazer de
                        compreender sua ideia e ajudar a transformá-la em realidade.
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
