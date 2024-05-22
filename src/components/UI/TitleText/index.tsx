import styles from './styles.module.scss';

interface TitleProps {
    colorText: string;
    
    text:string;
}

export default function TitleText({ colorText,  text }: TitleProps) {

    return (
        <h1 className={styles.TitleText} style={{ color: colorText,  fontFamily: 'sans-Serif' }}>
            {text}
        </h1>
    );
}
