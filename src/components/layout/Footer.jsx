import React from 'react';
import { 
  Github, Linkedin, Twitter, Mail, ArrowUp
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Abhay Bajpai</span>
            </h3>
            <p className="mb-4 text-gray-400 max-w-md">
              Aspiring Software Developer & AI/ML Explorer, creating innovative solutions with a focus on user experience and modern technologies.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/abhaybajpai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300 social-icon"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/abhaybajpai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300 social-icon"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/abhaybajpai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300 social-icon"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@abhaybajpai.com" 
                className="text-gray-400 hover:text-primary transition-colors duration-300 social-icon"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="md:text-right">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {year} Abhay Bajpai. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;