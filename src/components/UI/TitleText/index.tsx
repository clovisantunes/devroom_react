import styles from './styles.module.scss';

interface TitleProps {
    colorText: string;
    span?: string;
    text:string;
    family?: string;
    weight?: string;
}

export default function TitleText({ colorText,  text, span, family, weight }: TitleProps) {

    return (
        <h1 className={styles.TitleText} style={{ color: colorText, fontWeight: weight ,  fontFamily: family }}>
            {text}<span>{span}</span>
        </h1>
    );
}
