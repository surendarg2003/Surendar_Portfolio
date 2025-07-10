import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const getPageVariants = (isDesktop) => ({
  initial: { opacity: 0, y: 0 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: 0 }
});

const pageTransition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.8
};

const PageTransition = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const pageVariants = getPageVariants(isDesktop);

  // Always animate on desktop and mobile with updated transition for smoothness
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
