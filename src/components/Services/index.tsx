import { useEffect, useState } from 'react';
import { ButtonUI } from '../UI/ButtonUi';
import ImageUi from '../UI/ImageUi/index';
import SubTexts from '../UI/SubTexts';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import ServicesItems from './ServicesItems';

interface ServicesProps {
  id: string;
}

interface PathSrcProps {
  web: string;
}

export default function Services({ id }: ServicesProps) {
  const { t, i18n } = useTranslation();
  const imgDevelopers = 'https://uploaddeimagens.com.br/images/004/786/529/full/developers.png?1716416816';

  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const lastPosition = localStorage.getItem('lastScrollPosition');
    if (lastPosition) {
      setLastScrollPosition(parseInt(lastPosition));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector(`.${styles.imageDev} img`) as HTMLImageElement;
      if (image) {
        const rect = image.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top >= 0 && rect.bottom <= windowHeight) {
          const scrollPosition = window.scrollY || document.documentElement.scrollTop;
          const offset = (windowHeight / 2) - (rect.height / 2);
          const translateY = (scrollPosition - rect.top + offset) * 0.2;
          image.style.transform = `translateY(${translateY}px)`; 
          setLastScrollPosition(scrollPosition);
          localStorage.setItem('lastScrollPosition', scrollPosition.toString());
        } else {
          const offset = (windowHeight / 2) - (rect.height / 2);
          const translateY = (lastScrollPosition - rect.top + offset) * 0.2;
          image.style.transform = `translateY(${translateY}px)`; 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <div className={styles.projectsContainer} id={id}>
      <div className={styles.servicesCard}>
        <div className={styles.textTitle}>
          <TitleText
            colorText="white"
            text={t('projectTitle')}
          />
          <div className={styles.line} />
        </div>
        <div className={styles.projectsCard}> 
          <div className={styles.spanText}>
            <span className={styles.span1}>
              {t('serviceText')}
            </span>
          </div>
          <div className={styles.spanText2}>
            <span className={styles.span2}>
              {t("serviceFullText")}
            </span>
          </div>
          <div className={styles.servicesContainer}>
            <div className={styles.servicesCard}>
              <ServicesItems />
            </div>
            <div className={styles.servicesImage}>
              <div className={styles.imageDev}>
                <ImageUi alt='Developers image' path={imgDevelopers} height={100} width={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
