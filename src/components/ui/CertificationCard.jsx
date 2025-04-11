import React from 'react';
import { motion } from 'framer-motion';
import { Award, Medal } from 'lucide-react';

const CertificationCard = ({ title, description, type }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 relative overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start mb-4">
        <div className="bg-primary/20 p-3 rounded-lg mr-4">
          {type === 'certification' ? (
            <Award className="h-6 w-6 text-primary" />
          ) : (
            <Medal className="h-6 w-6 text-primary" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default CertificationCard;