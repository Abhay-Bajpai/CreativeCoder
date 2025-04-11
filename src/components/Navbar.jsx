import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../../hooks/use-active-section";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-lg font-semibold text-white hover:text-primary transition-colors duration-300"
          >
            <span className="text-primary">&lt;</span> Abhay Bajpai{" "}
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-item ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="/Abhay_Bajpai_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded transition-colors duration-300"
          >
            Resume
          </a>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden mt-4 py-2 ${mobileMenuOpen ? "block" : "hidden"}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block py-2 text-gray-300 hover:text-primary transition-colors duration-300 ${
                activeSection === item.id ? "text-primary" : ""
              }`}
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Abhay_Bajpai_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-center transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            Resume
          </a>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
