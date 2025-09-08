export const projects = [
  {
    id: "finance-quest",
    title: "Finance Quest",
    description: "A gamified personal expense dashboard where users track finances like an RPG. Features kingdoms, quests, and a magical cyber grove.",
    technologies: ["JavaScript", "React", "Framer Motion", "Tailwind CSS", "Recharts"],
    categories: ["web-dev", "frontend"],
    codeUrl: "https://github.com/Abhay-Bajpai/finance-quest",
    demoUrl: "https://finance-quest-beta.vercel.app",
    gradientColor: "from-purple-500 to-pink-600",
    githubRepo: "Abhay-Bajpai/finance-quest",
    featured: true
  },
  {
    id: "creative-coder",
    title: "Creative Coder Portfolio",
    description: "Personal portfolio website showcasing projects, skills, and achievements with modern design and smooth animations.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Framer Motion", "Vite"],
    categories: ["web-dev", "frontend"],
    codeUrl: "https://github.com/Abhay-Bajpai/CreativeCoder",
    demoUrl: "https://abhaybajpai.vercel.app/#home",
    gradientColor: "from-blue-500 to-indigo-600",
    githubRepo: "Abhay-Bajpai/CreativeCoder",
    featured: true
  },
  {
    id: "legal-summarizer",
    title: "Legal Document Summarizer",
    description: "AI-powered legal document analysis and summarization tool with frontend and backend integration.",
    technologies: ["Python", "JavaScript", "React", "Flask", "NLP"],
    categories: ["ai-ml", "full-stack"],
    codeUrl: "https://github.com/Abhay-Bajpai/legal-summarizer-frontend",
    demoUrl: "https://legal-summarizer-frontend.vercel.app",
    gradientColor: "from-emerald-500 to-green-600",
    githubRepo: "Abhay-Bajpai/legal-summarizer-frontend",
    featured: true
  },
  {
    id: "tickit",
    title: "TICKIT - Heritage Site Booking",
    description: "Smart ticketing system for Indian archaeological sites with adaptive orchestration using ATRO algorithm.",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    categories: ["web-dev", "full-stack"],
    codeUrl: "https://github.com/Abhay-Bajpai/TICKIT",
    demoUrl: "https://tickit-gold.vercel.app",
    gradientColor: "from-cyan-500 to-blue-600",
    githubRepo: "Abhay-Bajpai/TICKIT"
  },
  {
    id: "ticket-booking-site",
    title: "Modern Ticket Booking Platform",
    description: "Contemporary ticket booking interface with user-friendly design and seamless booking experience.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    categories: ["web-dev", "frontend"],
    codeUrl: "https://github.com/Abhay-Bajpai/ticket_booking_site",
    demoUrl: "https://ticket-booking-site-phi.vercel.app",
    gradientColor: "from-red-500 to-orange-600",
    githubRepo: "Abhay-Bajpai/ticket_booking_site"
  },
  {
    id: "legal-analysis",
    title: "Legal Text Analysis",
    description: "Python-based legal document analysis tool for processing and extracting insights from legal texts.",
    technologies: ["Python", "NLP", "Machine Learning", "Text Analysis"],
    categories: ["ai-ml"],
    codeUrl: "https://github.com/Abhay-Bajpai/Legal_analysis",
    gradientColor: "from-yellow-500 to-amber-600",
    githubRepo: "Abhay-Bajpai/Legal_analysis"
  }
];

// Helper function to get GitHub repository stats
export const fetchGitHubStats = async (repoFullName) => {
  try {
    const response = await fetch(`https://api.github.com/repos/${repoFullName}`);
    if (!response.ok) throw new Error('Failed to fetch');
    
    const data = await response.json();
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      language: data.language,
      updatedAt: data.updated_at,
      description: data.description,
      topics: data.topics || []
    };
  } catch (error) {
    console.error(`Failed to fetch stats for ${repoFullName}:`, error);
    return {
      stars: 0,
      forks: 0,
      language: 'Unknown',
      updatedAt: null,
      description: null,
      topics: []
    };
  }
};

// Helper function to get GitHub Open Graph image
export const getGitHubOGImage = (repoFullName) => {
  return `https://opengraph.githubassets.com/1/${repoFullName}`;
};

// Helper function to get GitHub repository shields
export const getGitHubShields = (repoFullName, language) => {
  const baseUrl = 'https://img.shields.io';
  return {
    stars: `${baseUrl}/github/stars/${repoFullName}?style=flat&logo=github&logoColor=white&labelColor=333&color=yellow`,
    forks: `${baseUrl}/github/forks/${repoFullName}?style=flat&logo=github&logoColor=white&labelColor=333&color=blue`,
    language: `${baseUrl}/github/languages/top/${repoFullName}?style=flat&logoColor=white&labelColor=333`,
    issues: `${baseUrl}/github/issues/${repoFullName}?style=flat&logo=github&logoColor=white&labelColor=333&color=red`,
    license: `${baseUrl}/github/license/${repoFullName}?style=flat&logoColor=white&labelColor=333&color=green`
  };
};

export const skillCategories = {
  "Frontend Development": [
    { name: "React", icon: "react", color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", icon: "javascript", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", icon: "typescript", color: "from-blue-600 to-blue-800" },
    { name: "HTML/CSS", icon: "html5", color: "from-orange-400 to-orange-600" },
    { name: "Tailwind CSS", icon: "tailwindcss", color: "from-cyan-400 to-cyan-600" }
  ],
  "Backend Development": [
    { name: "Node.js", icon: "nodejs", color: "from-green-400 to-green-600" },
    { name: "Python", icon: "python", color: "from-blue-500 to-yellow-500" },
    { name: "Express.js", icon: "express", color: "from-gray-400 to-gray-600" },
    { name: "Flask", icon: "flask", color: "from-gray-500 to-gray-700" }
  ],
  "AI & Machine Learning": [
    { name: "TensorFlow", icon: "tensorflow", color: "from-orange-400 to-orange-600" },
    { name: "NLP", icon: "brain", color: "from-purple-400 to-purple-600" },
    { name: "Data Analysis", icon: "chart", color: "from-indigo-400 to-indigo-600" },
    { name: "Machine Learning", icon: "robot", color: "from-pink-400 to-pink-600" }
  ],
  "Database & Tools": [
    { name: "MongoDB", icon: "mongodb", color: "from-green-500 to-green-700" },
    { name: "Git", icon: "git", color: "from-red-400 to-red-600" },
    { name: "Docker", icon: "docker", color: "from-blue-500 to-blue-700" },
    { name: "AWS", icon: "aws", color: "from-orange-500 to-orange-700" }
  ]
};

// Keep old format for backward compatibility
export const programmingSkills = [
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 85 },
  { name: "Python", percentage: 80 },
  { name: "Node.js", percentage: 75 },
  { name: "TypeScript", percentage: 70 },
  { name: "Machine Learning", percentage: 65 },
  { name: "TensorFlow", percentage: 60 },
  { name: "MongoDB", percentage: 70 }
];

export const toolsAndTech = [
  { name: "Git", icon: "git" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
  { name: "Firebase", icon: "firebase" },
  { name: "TailwindCSS", icon: "tailwindcss" },
  { name: "VSCode", icon: "vscode" },
  { name: "Figma", icon: "figma" },
  { name: "Postman", icon: "postman" }
];

export const concepts = [
  "AI/ML",
  "NLP",
  "DSA",
  "DBMS",
  "OS",
  "Computer Networks",
  "REST APIs",
  "Distributed Systems",
  "System Architecture",
  "Responsive Design",
  "Agile Methodology"
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering (AI & ML)",
    institution: "Babu Banarasi Das Institute of Technology & Management",
    year: "2021 - 2025",
    grade: "CGPA: 8.4/10"
  },
  {
    degree: "Class 12",
    institution: "St. Mary's Day Inter College",
    year: "Completed",
    grade: "Percentage: 79.6%"
  },
  {
    degree: "Class 10",
    institution: "St. Mary's Day Inter College",
    year: "Completed",
    grade: "Percentage: 83.4%"
  }
];

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    description: "BBDITM, Apr 2025",
    type: "certification"
  },
  {
    title: "Machine Learning & DSA",
    description: "Score: 80%, Jul–Aug 2024",
    type: "certification"
  },
  {
    title: "Introduction to Front-End Development",
    description: "Meta (Coursera), Apr 2024",
    type: "certification"
  },
  {
    title: "Programming with JavaScript",
    description: "Meta (Coursera), Apr 2024",
    type: "certification"
  },
  {
    title: "Introduction to Cyber Security",
    description: "Duke University (Coursera), May 2023",
    type: "certification"
  },
  {
    title: "Introduction to Data Structures and Machine Learning",
    description: "Coding Ninjas, Apr 2023",
    type: "certification"
  }
];