import styles from './styles.module.scss';

interface TitleProps {
    colorText: string;
    span?: string;
    text:string;
}

export default function TitleText({ colorText,  text, span }: TitleProps) {

    return (
        <h1 className={styles.TitleText} style={{ color: colorText,  fontFamily: 'sans-Serif' }}>
            {text}<span>{span}</span>
        </h1>
    );
}
