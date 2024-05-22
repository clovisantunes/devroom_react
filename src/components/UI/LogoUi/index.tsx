import styles from './styles.module.scss'
interface logoProps{
    width:number;
    height: number;
    alt:string;
    priority: boolean;
}

export default function LogoUi({width, height, alt, priority}:logoProps) {
    return (
        <div className={styles.logo} />
    )
}