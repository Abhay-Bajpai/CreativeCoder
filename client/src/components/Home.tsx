import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare, FileText, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Particles } from "@tsparticles/react";
import { type Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Using slim version for better compatibility
import Tilt from "react-parallax-tilt";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Initialize particles
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800
              }
            },
            color: {
              value: ["#8b5cf6", "#a78bfa", "#c4b5fd"],
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.5
            },
            size: {
              value: { min: 1, max: 5 }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#8b5cf6",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out"
              },
              attract: {
                enable: true,
                rotate: {
                  x: 600,
                  y: 1200
                }
              }
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: {
                enable: true
              }
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5
                }
              },
              push: {
                quantity: 6
              }
            }
          },
          detectRetina: true
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Spotlight effect */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-radial from-primary/5 to-transparent opacity-60"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-6 py-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary mb-2 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-block relative">
              <span className="absolute left-0 -top-6 w-10 h-10 text-primary opacity-20 text-3xl">&lt;</span>
              Hello, I'm
              <span className="absolute right-0 bottom-0 w-10 h-10 text-primary opacity-20 text-3xl">/&gt;</span>
            </span>
          </motion.p>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Abhay Bajpai
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-3xl font-medium mb-6 text-gray-300 h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                'Aspiring Software Developer',
                1000,
                'AI/ML Explorer',
                1000,
                'Frontend Craftsman',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-medium inline-block"
            />
          </motion.div>
          
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
              className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md flex items-center transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-white/30 to-primary/0 -translate-x-full group-hover:animate-shimmer" />
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Me
            </motion.a>

            <motion.a
              href="#projects"
              className="border border-primary text-primary hover:bg-primary hover:text-white py-3 px-6 rounded-md flex items-center transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="h-5 w-5 mr-2" />
              View Projects
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              className="border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white py-3 px-6 rounded-md flex items-center transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5 mr-2" />
              Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-12 flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {/* Social Links with Tilt Effect */}
            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.2} transitionSpeed={2000}>
              <a
                href="https://github.com/Abhay-Bajpai"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-gray-800 p-3 rounded-full text-gray-300 hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </Tilt>
            
            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.2} transitionSpeed={2000}>
              <a
                href="https://linkedin.com/in/abhay-bajpai-"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-gray-800 p-3 rounded-full text-gray-300 hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </Tilt>
            
            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.2} transitionSpeed={2000}>
              <a
                href="mailto:abhayofc59@gmail.com"
                className="social-icon bg-gray-800 p-3 rounded-full text-gray-300 hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </Tilt>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-5 h-9 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-2 bg-primary rounded-full mt-1"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
