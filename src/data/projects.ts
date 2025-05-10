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
    projectUrl: "/projects/etamax", // This is correct
    featured: true,
    technologies: ["Flutter", "React", "TypeScript", "Firebase", "BLE", "IoT"],
    completed: "2024",
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
  {
    id: "auction-app",
    title: "Real-time Auction Platform",
    description:
      "A full-stack web application enabling real-time auctions with instant bidding updates, user authentication, and responsive design.",
    longDescription:
      "This real-time auction platform is a full-stack web application built with Next.js, React, and Supabase. It allows users to create auction listings, browse items, place bids, and track auctions in real-time. The platform demonstrates my ability to implement complex features including real-time data synchronization, user authentication, and responsive design using modern web technologies.",
    imageUrl: "/projects/auction-app-placeholder.jpg", // Create this placeholder image
    tags: ["Web App", "Next.js", "Real-time", "Full Stack"],
    projectUrl: "/projects/auction-app",
    featured: true,
    technologies: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "HeroUI",
    ],
    completed: "In Development (2024)",
  },
  {
    id: "workflow-manager",
    title: "Workflow Manager",
    description:
      "An in-house business management system that streamlines print production workflows with automated quote generation and material optimization.",
    longDescription:
      "Workflow Manager is a custom business tool I developed to streamline operations within my printing business. This full-stack application combines a React frontend with a Django backend to automate complex printing calculations, optimize material usage, and generate accurate quotes—transforming a previously time-consuming manual process into an efficient digital workflow.",
    imageUrl: "/projects/workflow-manager-placeholder.jpg",
    tags: ["Full Stack", "Business Tool", "React", "Django"],
    projectUrl: "/projects/workflow-manager",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Django",
      "Python",
      "HeroUI",
      "Tailwind CSS",
      "PyPDF2",
    ],
    completed: "2025 (Ongoing)",
  },
  {
    id: "invoice-companion",
    title: "InvoiceCompanion",
    description:
      "A cross-platform invoicing application built with Flutter for personal business management with comprehensive client, product, and invoice tracking.",
    longDescription:
      "InvoiceCompanion is a full-featured invoicing solution I developed to address my own business needs. Built with Flutter, this cross-platform app provides complete invoice management including customer tracking, product catalogs, quote and invoice generation with PDF export, and business analytics—all with an intuitive interface that works seamlessly across devices.",
    imageUrl: "/projects/invoice-companion-placeholder.jpg",
    tags: ["Mobile App", "Flutter", "Cross-Platform", "Business Tool"],
    projectUrl: "/projects/invoice-companion",
    featured: true,
    technologies: [
      "Flutter",
      "Dart",
      "SQLite",
      "Provider",
      "RevenueCat",
      "PDF Generation",
    ],
    completed: "2024 (Ongoing)",
  },
  {
    id: "logistics-management-system",
    title: "Logistics Management System",
    description:
      "A comprehensive platform for hazardous materials logistics with real-time tracking, digital signatures, and operational management.",
    longDescription:
      "This logistics management system was developed for an international logistics company specializing in hazardous materials transport. It features a Flutter-based mobile app for drivers and a React-based admin dashboard with real-time synchronization, digital signature capture, and comprehensive job management.",
    imageUrl: "/projects/logistics-management-system-placeholder.jpg",
    tags: ["Full Stack", "Mobile App", "Admin Dashboard", "Real-time"],
    projectUrl: "/projects/logistics-management-system",
    featured: true,
    technologies: [
      "Flutter",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Secure Cloud Database",
    ],
    completed: "2025 (Ongoing)",
  },
];
