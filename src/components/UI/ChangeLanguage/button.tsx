import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import brasilImg from '../../../assets/images/brazil.png';
import usaImg from '../../../assets/images/eua.png';

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'en');
  const [currentImg, setCurrentImg] = useState(selectedLanguage === 'pt' ? brasilImg : usaImg);

  const changeLanguage = () => {
    const newLanguage = selectedLanguage === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLanguage)
      .then(() => {
        setSelectedLanguage(newLanguage);
        setCurrentImg(newLanguage === 'pt' ? brasilImg : usaImg);
      })
      .catch((error) => console.error('Failed to change language', error));
  };

  return (
    <div className={styles.languageSelector}>
      <button
        className={styles.button}
        onClick={changeLanguage}
      >
        <img src={currentImg} alt='Imagem'/>
        <span>{selectedLanguage === 'pt' ? 'PT' : 'EN'}
        </span>
      </button>
    </div>
  );
}

export default LanguageSelector;
