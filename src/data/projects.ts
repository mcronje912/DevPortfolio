export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  projectUrl: string;
  featured: boolean;
  technologies: string[];
  completed: string;
}

export const projects: Project[] = [
  {
    id: "etamax",
    title: "Etamax Solar Monitoring System",
    description:
      "An intelligent solar geyser monitoring system that helps users optimize their solar energy usage.",
    longDescription:
      "Etamax is a comprehensive solution for solar energy optimization. I developed both the cross-platform mobile application using Flutter and the React-based management dashboard. The system provides real-time monitoring of solar geyser performance, enabling users to maximize energy efficiency and reduce costs. The solution incorporates IoT device integration through BLE communications, providing users with actionable insights about their solar energy usage.",
    imageUrl: "/projects/etamax-placeholder.jpg",
    tags: ["Mobile App", "Web Dashboard", "IoT Integration"],
    projectUrl: "/projects/etamax",
    featured: true,
    technologies: ["Flutter", "React", "TypeScript", "Firebase", "BLE", "IoT"],
    completed: "2023",
  },
  {
    id: "react-quiz",
    title: "React Learning Quiz App",
    description:
      "A cross-platform learning application to help developers master React concepts through interactive quizzes.",
    longDescription:
      "The React Learning Quiz App is a comprehensive educational tool designed to help developers strengthen their React knowledge. Built with Flutter for cross-platform functionality, the app features interactive quizzes, coding challenges, and progress tracking to facilitate effective learning. The backend is powered by Firebase, providing real-time updates and secure user authentication.",
    imageUrl: "/projects/react-quiz-placeholder.jpg",
    tags: ["Mobile App", "Education", "Cross-Platform"],
    projectUrl: "/projects/react-quiz",
    featured: true,
    technologies: ["Flutter", "Dart", "Firebase", "State Management"],
    completed: "2022",
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "A responsive portfolio website built with React, TypeScript, and Hero UI.",
    longDescription:
      "This portfolio website showcases my development skills and projects. Built with React, TypeScript, and Hero UI, it features a responsive design that works seamlessly across all devices. The site includes interactive components, dynamic content loading, and implements both light and dark themes.",
    imageUrl: "/projects/portfolio-placeholder.jpg",
    tags: ["Web", "Portfolio", "Responsive"],
    projectUrl: "/projects/portfolio",
    featured: false,
    technologies: ["React", "TypeScript", "Hero UI", "Tailwind CSS"],
    completed: "2023",
  },
];
