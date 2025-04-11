import { useState, useEffect } from "react";
import { getCurrentSection } from "../lib/utils";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getCurrentSection();
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize active section on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return activeSection;
};
