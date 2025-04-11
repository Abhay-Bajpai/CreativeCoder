import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare, FileText } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10"
    >
      <div className="container mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Abhay Bajpai
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl font-medium mb-6 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Aspiring Software Developer | AI/ML Explorer | Frontend Craftsman
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Building intelligent & creative web experiences with a passion for AI, ML, and web development.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md flex items-center transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Me
            </motion.a>

            <motion.a
              href="#projects"
              className="border border-primary text-primary hover:bg-primary hover:text-white py-3 px-6 rounded-md flex items-center transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="h-5 w-5 mr-2" />
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-12 flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a
              href="https://github.com/Abhay-Bajpai"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-400 hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/abhay-bajpai-"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-400 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:abhayofc59@gmail.com"
              className="social-icon text-gray-400 hover:text-primary"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
