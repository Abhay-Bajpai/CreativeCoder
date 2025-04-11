import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from './ui/TimelineItem';
import CertificationCard from './ui/CertificationCard';
import { education, certifications } from '../lib/data';
import { Award, GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Education & Certifications</h2>
        <div className="section-divider" />
        <p className="section-subtitle max-w-3xl mx-auto">
          My academic journey and professional certifications that have shaped my skills and knowledge.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-8">
            <GraduationCap className="text-primary mr-3 h-6 w-6" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>

          <div className="relative pl-6">
            {/* Timeline line */}
            <div className="timeline-line" />
            
            {/* Timeline items */}
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className="relative"
                >
                  <TimelineItem
                    title={item.degree}
                    institution={item.institution}
                    year={item.year}
                    grade={item.grade}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-8">
            <Award className="text-primary mr-3 h-6 w-6" />
            <h3 className="text-2xl font-semibold">Certifications & Achievements</h3>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CertificationCard
                  title={cert.title}
                  description={cert.description}
                  type={cert.type}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-24 text-center max-w-3xl mx-auto bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700"
      >
        <p className="text-lg text-gray-300 italic mb-4">
          "Education is not the learning of facts, but the training of the mind to think."
        </p>
        <p className="text-sm text-gray-400">- Albert Einstein</p>
      </motion.div>
    </div>
  );
};

export default Education;