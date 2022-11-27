import React, { useRef, useEffect } from 'react';
import scrollReveal from "scrollreveal";

export interface IScrollRevealProps {
  children: React.ReactNode;
};

const ScrollReveal = (props: IScrollRevealProps) => {
  const { children } = props;
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current)
      scrollReveal().reveal(ref.current, {
        reset: true,
        distance: '20px',
        delay: 200,
        scale: 0.9,
        duration: 1000,
      });
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  )
}

export default ScrollReveal