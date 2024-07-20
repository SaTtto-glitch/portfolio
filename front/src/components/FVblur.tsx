import { useState, useEffect } from 'react';

export const FVblur = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [isBeyondThreshold, setIsBeyondThreshold] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollValue(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateBlur = () => {
    return isBeyondThreshold ? 8 : 0;
  };

  const calculateZoom = () => {
    return isBeyondThreshold ? 1.2 : 1;
  };

  useEffect(() => {
    const thresholdScrollValue = 100;
    const hasExceededThreshold = scrollValue > thresholdScrollValue;

    if (hasExceededThreshold && !isBeyondThreshold) {
      setIsBeyondThreshold(true);
    } else if (!hasExceededThreshold && isBeyondThreshold) {
      setIsBeyondThreshold(false);
    }

    const fvElements = document.querySelectorAll('.fv__background');

    fvElements.forEach((element) => {
      const transitionValue = 'filter 0.5s ease, transform 0.5s ease, background-size 0.5s ease';

      const backgroundElement = element as HTMLElement;

      backgroundElement.style.transition = transitionValue;
      backgroundElement.style.filter = `blur(${calculateBlur()}px)`;
      backgroundElement.style.backgroundSize = `${calculateZoom() * 100}%`;
    });
  }, [scrollValue]);

  return (
    <section className="fv">
      <div className="fv__inner">
        <div className="fv__background" />
      </div>
    </section>
  );
};
