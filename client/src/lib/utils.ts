import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

export function getScrollProgress() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  return scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
}

export function getElementOffset(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return 0;
  
  return element.offsetTop;
}

export function getCurrentSection() {
  const scrollPosition = window.scrollY + 100;
  const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && scrollPosition >= section.offsetTop) {
      return sections[i];
    }
  }
  
  return 'home';
}
