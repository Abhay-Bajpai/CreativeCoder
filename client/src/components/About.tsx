import { motion } from "framer-motion";
import { Download, MessageSquare } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/80 to-primary/40 rounded-full flex items-center justify-center overflow-hidden shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-32 w-32 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-6 text-gray-300">
              I'm Abhay Bajpai, a passionate and curious Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, currently pursuing my B.Tech at Babu Banarasi Das Institute of Technology & Management.
            </p>

            <p className="text-lg mb-6 text-gray-300">
              From building responsive websites to experimenting with natural language processing and intelligent systems, I thrive at the intersection of creativity and logic. Whether it's bringing digital experiences to life through clean code or solving real-world problems using AI, I approach every challenge with a growth mindset.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 mb-6 italic text-gray-400">
              "In the midst of chaos, there is also opportunity." — Sun Tzu
            </blockquote>

            <p className="text-lg mb-8 text-gray-300">
              This mindset drives me to continuously learn, iterate, and adapt. My goal is to create impactful software that blends performance, design, and human-centered thinking.
            </p>

            <p className="text-lg mb-8 text-gray-300">
              When I'm not coding, you'll find me either deep in a chess game or enjoying a game of basketball — both fueling strategic thinking and focus in their own unique ways.
            </p>

            <div className="flex flex-wrap space-x-4 gap-y-4">
              <motion.a
                href="/Abhay_Bajpai_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded flex items-center transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </motion.a>
              
              <motion.a
                href="#contact"
                className="border border-primary text-primary hover:bg-primary hover:text-white py-2 px-6 rounded transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="h-5 w-5 mr-2 inline-block" />
                Let's Connect
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
