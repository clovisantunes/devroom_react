import styles from './styles.module.scss';

interface SubTextsProps{
    colorText: string;
    text:string;
    span?: string;
}
export default function SubTexts({colorText,  text, span}: SubTextsProps){
    return(
        <h2   className={styles.subText} style={{ color: colorText, fontFamily: 'sans-Serif' }}>
            {text}<span>{span}</span>
        </h2>
    )
}