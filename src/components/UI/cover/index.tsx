import { ReactNode } from 'react';
import styles from './styles.module.scss';

  
  interface CoverProps {
    title: string;
    onClick: () => void;
  }

export default function Cover({title,  onClick}: CoverProps){
    return(
        <div className={styles.coverContainer} onClick={onClick}>
            <div className={styles.coverScreen}>
            </div>    
                <span className={styles.span}>{title}</span>
                <span className={styles.spanSub}>        
        </span>
                <span className={styles.line1} />
                <span className={styles.line2} />
                <span className={styles.line3} />
                <span className={styles.line4} />
        </div>
    )
}