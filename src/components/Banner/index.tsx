import { ButtonIcon } from '../UI/ButtonUi';
import styles from './styles.module.scss';

export default function Banner() {
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
                        click={() => ''}
                    />
                    </div>
                </div>
                <div className={styles.bannerImage}>
                </div>
            </div>
        </>
    );
}
