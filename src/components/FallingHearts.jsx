import React from 'react';
import { motion } from 'framer-motion';

const FallingHearts = () => {
  // Generate random hearts
  const hearts = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 5 + Math.random() * 10,
    size: 10 + Math.random() * 20,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: '110vh',
            opacity: [0, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            color: 'rgba(255, 182, 193, 0.6)', // Light pink
          }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
};

export default FallingHearts;
