import styles from './styles.module.scss';
interface imageUiProps{
    alt: string;
    path: string;
    width: number;
    height: number;
}
export default function ImageUi({alt, height, path, width}: imageUiProps){
    return(
        <img 
        alt={alt}
        src={path}
        width={width}
        height={height}
        className={styles.imageUI}
        />
    )
}