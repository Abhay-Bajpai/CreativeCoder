import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-800/80 dark:bg-gray-200/80 border border-gray-600 dark:border-gray-300 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          animate={{
            rotate: isDark ? 0 : 180,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-yellow-400" />
        </motion.div>
        
        <motion.div
          animate={{
            rotate: isDark ? 180 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-yellow-500" />
        </motion.div>
      </div>

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/30"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2, opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
