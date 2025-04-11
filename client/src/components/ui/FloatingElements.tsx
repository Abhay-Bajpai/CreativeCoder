import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ className = '' }) => {
  // Items to float (code symbols, icons)
  const floatingItems = [
    { content: '<div>', delay: 0, size: 'text-sm' },
    { content: '</>', delay: 0.5, size: 'text-lg' },
    { content: '{ }', delay: 1, size: 'text-sm' },
    { content: '()', delay: 1.5, size: 'text-sm' },
    { content: '=>', delay: 2, size: 'text-sm' },
    { content: '[]', delay: 2.5, size: 'text-sm' },
    { content: '/**/', delay: 3, size: 'text-sm' },
    { content: 'function()', delay: 3.5, size: 'text-xs' },
    { content: 'const', delay: 4, size: 'text-xs' },
    { content: 'import', delay: 4.5, size: 'text-xs' },
    { content: 'await', delay: 5, size: 'text-xs' },
    { content: 'export', delay: 5.5, size: 'text-xs' },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.size} font-mono text-primary/40 font-bold`}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2], 
            y: [0, -15, 0],
            x: [0, Math.random() > 0.5 ? 5 : -5, 0],
            rotate: [0, Math.random() > 0.5 ? 10 : -10, 0],
          }}
          transition={{
            delay: item.delay,
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {item.content}
        </motion.div>
      ))}

      {/* Floating circles */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`circle-${index}`}
          className="absolute rounded-full"
          style={{
            background: `rgba(139, 92, 246, ${0.1 + Math.random() * 0.15})`,
            width: 10 + Math.random() * 30,
            height: 10 + Math.random() * 30,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            delay: Math.random() * 2,
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;