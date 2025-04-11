import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = ({ className }) => {
  // Generate random positions and sizes for the floating elements
  const elements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 5 + Math.random() * 20,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 5,
  }));

  const codeSnippets = [
    '<div>', '</div>', 'const', 'let', 'import', 'export', 'return', '()', '[]', '{}', '=>', 'async', 'await', '.then', 'useState'
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-primary/30 font-mono text-xs sm:text-sm whitespace-nowrap"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            opacity: 0.2,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, Math.random() > 0.5 ? 10 : -10, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
          }}
        >
          {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;