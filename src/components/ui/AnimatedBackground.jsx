import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Generate floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  const gridLines = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 opacity-50" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        {/* Vertical Lines */}
        {gridLines.map((line) => (
          <motion.div
            key={`v-${line}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
            style={{ left: `${(line / 20) * 100}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              delay: line * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Horizontal Lines */}
        {gridLines.map((line) => (
          <motion.div
            key={`h-${line}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{ top: `${(line / 20) * 100}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              delay: line * 0.15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -50, 50, 0],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Large Ambient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-violet-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Scanning Lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)'
        }}
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
