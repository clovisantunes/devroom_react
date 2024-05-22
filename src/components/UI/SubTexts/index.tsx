import styles from './styles.module.scss';

interface SubTextsProps{
    colorText: string;
    text:string;
}
export default function SubTexts({colorText,  text}: SubTextsProps){
    return(
        <h2   className={styles.subText} style={{ color: colorText, fontFamily: 'sans-Serif' }}>
            {text}
        </h2>
    )
}