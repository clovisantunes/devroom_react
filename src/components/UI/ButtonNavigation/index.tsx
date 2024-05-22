"use client";
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface pathProps {
  path: string;
}

export default function ButtonNavigation({ path }: pathProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToLine = (lineIndex: number) => {
    const lineRanges: Array<[number, number]> = [
      [0, 400],
      [400, 1000],
      [1000, 2000],
      [2000, 10000]
    ];

    const [lineStart] = lineRanges[lineIndex] || [0, 0];
    window.scrollTo({ top: lineStart, behavior: 'smooth' });
  };

  const getBackgroundColor = (lineIndex: number) => {
    const lineRanges: Array<[number, number]> = [
      [0, 400],
      [400, 1000],
      [1000, 1800],
      [1800, 4000]
    ];

    const [lineStart, lineEnd] = lineRanges[lineIndex] || [0, 0];

    if (scrollY >= lineStart && scrollY < lineEnd) {
      return '#4200FF';
    } else {
      return 'var(--colors-neutral-100)';
    }
  };

  return (
    <div className={styles.container}>
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className={styles.line}
          style={{ backgroundColor: getBackgroundColor(index) }}
          onClick={() => scrollToLine(index)}
        />
      ))}
    </div>
  );
}
