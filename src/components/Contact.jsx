import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Abhay-Bajpai",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:text-gray-300",
      description: "Check out my repositories and contributions"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/abhay-bajpai",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:text-blue-400",
      description: "Connect with me professionally"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:abhayofc59@gmail.com",
      color: "from-green-600 to-green-800",
      hoverColor: "hover:text-green-400",
      description: "Send me a direct message"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:text-blue-300",
      description: "Follow me for updates"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Let's Connect</h2>
        <div className="section-divider" />
        <p className="section-subtitle max-w-3xl mx-auto">
          I'm always interested in discussing new opportunities, innovative projects, and creative collaborations. 
          Let's connect and explore how we can work together.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        <motion.div variants={cardVariants} className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
          <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-gray-400">Lucknow, India</p>
        </motion.div>

        <motion.div variants={cardVariants} className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
          <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <a 
            href="mailto:abhayofc59@gmail.com" 
            className="text-gray-400 hover:text-primary transition-colors duration-300"
          >
            abhayofc59@gmail.com
          </a>
        </motion.div>

        <motion.div variants={cardVariants} className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
          <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Phone className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-gray-400">+91 6386648923</p>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-semibold mb-8">Connect With Me</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : '_self'}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${social.color} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 text-gray-300 ${social.hoverColor} transition-colors duration-300`} />
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {social.name}
                    </h4>
                    
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {social.description}
                    </p>
                    
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center bg-gradient-to-r from-primary/10 to-violet-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20"
      >
        <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          I'm currently available for freelance work and always excited about interesting projects. 
          Let's discuss how we can bring your ideas to life!
        </p>
        
        <motion.a
          href="mailto:abhayofc59@gmail.com?subject=Project Inquiry"
          className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="h-5 w-5 mr-2" />
          Start a Conversation
        </motion.a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-24 h-24 bg-violet-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Contact;