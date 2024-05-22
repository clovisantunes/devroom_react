import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Technology {
    icon: React.ReactNode;
    name: string;
  }
  
  interface CoverProps {
    title: string;
    subText: Technology[];
    onClick: () => void;
  }

export default function Cover({title, subText, onClick}: CoverProps){
    return(
        <div className={styles.coverContainer} onClick={onClick}>
            <div className={styles.coverScreen}>
            </div>    
                <span className={styles.span}>{title}</span>
                <span className={styles.spanSub}> 
                {subText.map((tech, index) => (
          <div key={index} className={styles.techItem}>
            {tech.icon}
          </div>
        ))}</span>
                <span className={styles.line1} />
                <span className={styles.line2} />
                <span className={styles.line3} />
                <span className={styles.line4} />
        </div>
    )
}