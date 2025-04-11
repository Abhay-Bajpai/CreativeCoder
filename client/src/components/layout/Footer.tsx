import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="text-center mb-6">
            <a href="#home" className="text-2xl font-semibold text-white">
              <span className="text-primary">&lt;</span> Abhay Bajpai{" "}
              <span className="text-primary">/&gt;</span>
            </a>
          </div>

          <div className="flex space-x-8 mb-8">
            <a
              href="https://github.com/Abhay-Bajpai"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-400 hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/abhay-bajpai-"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-400 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:abhayofc59@gmail.com"
              className="social-icon text-gray-400 hover:text-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#home" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
              Projects
            </a>
            <a href="#skills" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
              Skills
            </a>
            <a href="#education" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
              Education
            </a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            Copyright © {currentYear} Abhay Bajpai. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
