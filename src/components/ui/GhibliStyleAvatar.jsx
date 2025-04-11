import React from 'react';
import { motion } from 'framer-motion';

const GhibliStyleAvatar = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <motion.svg 
        viewBox="0 0 400 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Ghibli-style background */}
        <motion.circle 
          cx="200" cy="200" r="180" 
          fill="url(#ghibliGradient)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Subtle clouds/stars in background */}
        {[...Array(10)].map((_, i) => (
          <motion.circle
            key={`star-${i}`}
            cx={100 + Math.random() * 200}
            cy={50 + Math.random() * 120}
            r={2 + Math.random() * 2}
            fill="white"
            opacity={0.6 + Math.random() * 0.4}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Face */}
        <motion.ellipse 
          cx="200" cy="180" 
          rx="90" ry="100" 
          fill="#FEE7D6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        
        {/* Hair */}
        <motion.path
          d="M120 120C100 140 90 180 95 220C105 240 120 250 150 260L140 170C140 170 160 110 200 100C240 110 260 170 260 170L250 260C280 250 295 240 305 220C310 180 300 140 280 120C290 90 270 60 240 55C220 40 180 40 160 55C130 60 110 90 120 120Z"
          fill="#333333"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        
        {/* Eyes */}
        <motion.ellipse 
          cx="170" cy="180" 
          rx="10" ry="12" 
          fill="#333333"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />
        <motion.ellipse 
          cx="230" cy="180" 
          rx="10" ry="12" 
          fill="#333333"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />
        
        {/* Eyebrows */}
        <motion.path 
          d="M155 160C155 160 165 155 185 160" 
          stroke="#333333" 
          strokeWidth="3" 
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
        <motion.path 
          d="M215 160C215 160 225 155 245 160" 
          stroke="#333333" 
          strokeWidth="3" 
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
        
        {/* Mouth */}
        <motion.path 
          d="M180 220C180 220 190 230 200 230C210 230 220 220 220 220" 
          stroke="#333333" 
          strokeWidth="3" 
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        />
        
        {/* Blush */}
        <motion.circle 
          cx="155" cy="200" 
          r="10" 
          fill="#FFCACA" 
          opacity="0.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
        <motion.circle 
          cx="245" cy="200" 
          r="10" 
          fill="#FFCACA" 
          opacity="0.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
        
        {/* Glasses */}
        <motion.circle 
          cx="170" cy="180" 
          r="20" 
          stroke="#555555" 
          strokeWidth="2" 
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        />
        <motion.circle 
          cx="230" cy="180" 
          r="20" 
          stroke="#555555" 
          strokeWidth="2" 
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        />
        <motion.path 
          d="M190 180L210 180" 
          stroke="#555555" 
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ delay: 1.2, duration: 0.3 }}
        />
        
        {/* Collar/Shirt hint */}
        <motion.path 
          d="M150 280C150 280 180 290 200 290C220 290 250 280 250 280C250 280 240 310 200 310C160 310 150 280 150 280Z" 
          fill="#8B5CF6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        />
        
        {/* Code symbols floating around */}
        <motion.text 
          x="120" y="140" 
          fill="#8B5CF6" 
          fontFamily="monospace" 
          fontSize="12"
          opacity="0.7"
          animate={{ 
            y: [140, 130, 140],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          &lt;/&gt;
        </motion.text>
        <motion.text 
          x="260" y="150" 
          fill="#8B5CF6" 
          fontFamily="monospace" 
          fontSize="12"
          opacity="0.7"
          animate={{ 
            y: [150, 140, 150],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        >
          { }
        </motion.text>
        <motion.text 
          x="110" y="240" 
          fill="#8B5CF6" 
          fontFamily="monospace" 
          fontSize="12"
          opacity="0.7"
          animate={{ 
            y: [240, 230, 240],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 4.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        >
          ()=&gt;
        </motion.text>
        <motion.text 
          x="270" y="230" 
          fill="#8B5CF6" 
          fontFamily="monospace" 
          fontSize="12"
          opacity="0.7"
          animate={{ 
            y: [230, 220, 230],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 3.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5
          }}
        >
          []
        </motion.text>
        
        {/* Gradients */}
        <defs>
          <radialGradient id="ghibliGradient" cx="50%" cy="50%" r="50%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B794F4" />
            <stop offset="100%" stopColor="#553C9A" />
          </radialGradient>
        </defs>
      </motion.svg>
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: 4 + Math.random() * 4,
            height: 4 + Math.random() * 4,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default GhibliStyleAvatar;