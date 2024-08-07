import { Link } from 'react-router-dom';
import styles from './styles.module.scss'
interface logoProps{
    width:number;
    height: number;
    alt:string;
    priority: boolean;
    click?: () => void;
}
const returnTo = () => (
    <Link to="/" />
  )
export default function LogoUi({width, height, alt, priority, click}:logoProps) {
    return (
        <div className={styles.logo} onClick={returnTo}/>
    )
}