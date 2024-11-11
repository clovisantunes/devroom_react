import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Image {
  id: number;
  src: string;
  alt: string;
}

export function useImageCarousel(images: Image[], intervalDuration = 10000) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [images.length, intervalDuration]);

  const getImageClass = (index: number) => {
    if (index === activeImageIndex) {
      return styles.imageActive;
    } else if (index === (activeImageIndex + 1) % images.length) {
      return styles.imageSecond;
    } else {
      return styles.imageThird;
    }
  };  

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
  };

  return { activeImageIndex, getImageClass, handleImageClick };
}
