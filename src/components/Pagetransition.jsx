import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ScrollTransition({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      style={{ width: '100%' }}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -80 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
