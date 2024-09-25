import styles from './styles.module.scss';

interface SubTextsProps{
    colorText: string;
    text:string;
    span?: string;
    family?: string;
    wieght?: string;
}
export default function SubTexts({colorText,  text, span, family, wieght}: SubTextsProps){
    return(
        <h2   className={styles.subText} style={{ color: colorText, fontFamily: family, fontWeight: wieght }}>
            {text}<span>{span}</span>
        </h2>
    )
}