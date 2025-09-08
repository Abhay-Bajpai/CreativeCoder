import React from 'react';
import { motion } from 'framer-motion';
import GhibliStyleAvatar from './ui/GhibliStyleAvatar';
import { Code, Laptop, BookOpen, Lightbulb, Heart, Download } from 'lucide-react';

const About = () => {
  const aboutItems = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: 'Software Development',
      description: 'Passionate about creating clean, efficient, and user-friendly applications using modern technologies and best practices.'
    },
    {
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: 'AI & Machine Learning',
      description: 'Exploring the cutting-edge of artificial intelligence and machine learning to solve complex problems and create intelligent systems.'
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: 'Continuous Learning',
      description: 'Always expanding my knowledge and skills through research, online courses, and practical application of new technologies.'
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: 'Problem Solving',
      description: 'Approaching challenges with analytical thinking and creative solutions, breaking down complex problems into manageable pieces.'
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: 'Passion for Technology',
      description: 'Driven by a genuine interest in how technology can improve lives and transform industries through innovation.'
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />
        <p className="section-subtitle max-w-3xl mx-auto">
          Get to know more about me, my background, and what drives me forward in the world of technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px]"
        >
          <GhibliStyleAvatar />

          <motion.div 
            className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-gray-700 max-w-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <p className="text-gray-300 text-sm italic">
              "I believe in creating technology that makes a positive impact, focusing on both functional elegance and user experience."
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column - About Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Abhay Bajpai</h3>
          <h4 className="text-xl text-primary mb-4">Software Developer & AI/ML Explorer</h4>
          <p className="text-gray-300 mb-6">
            I'm a passionate developer with a strong foundation in both software development and artificial intelligence. 
            With a background in Computer Science from prestigious institutions, I combine technical expertise with creative 
            problem-solving to develop innovative solutions.
          </p>
          <p className="text-gray-300 mb-6">
            My journey in technology began with a curiosity about how digital systems work and has evolved into a 
            professional path where I continuously push boundaries and explore new possibilities. I'm particularly 
            interested in the intersection of web technologies and machine learning.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Name:</span> Abhay Bajpai
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Email:</span> abhayofc59@gmail.com
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Location:</span> Lucknow, India
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Availability:</span> Open to opportunities
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-flex items-center transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            
            <motion.a
              href="https://drive.google.com/file/d/1YaCgtmZV6AuwZVSqylCN_309brGZJBP0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md inline-flex items-center transition-colors duration-300 border border-gray-600 hover:border-primary/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg hover:border-primary/50 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;