// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnailUrl: string;
  deviceType: "desktop" | "mobile" | "dual"; // Required property
  tags: string[];
  projectUrl: string;
  featured: boolean;
  technologies: string[];
  completed: string;
  demoUrl?: string; // Optional URL for live demo
  mockups?: {
    // Optional mockup images
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
}

export const projects: Project[] = [
  {
    id: "etamax",
    title: "Etamax Solar Monitoring System",
    description:
      "An intelligent solar geyser monitoring system that helps users optimize their solar energy usage.",
    longDescription:
      "Etamax is a comprehensive solution for solar energy optimization. I developed both the cross-platform mobile application using Flutter and the React-based management dashboard. The system provides real-time monitoring of solar geyser performance, enabling users to maximize energy efficiency and reduce costs. The solution incorporates IoT device integration through BLE communications, providing users with actionable insights about their solar energy usage.",
    thumbnailUrl: "/images/projects/thumbnails/etamax-thumb.png",
    deviceType: "dual", // Added property
    tags: ["Mobile App", "Web Dashboard", "IoT Integration"],
    projectUrl: "/projects/etamax",
    featured: true,
    technologies: ["Flutter", "React", "TypeScript", "Firebase", "BLE", "IoT"],
    completed: "2024",
    mockups: {
      mobile: "/images/projects/etamax/mobile/home.png",
      desktop: "/images/projects/etamax/web/dashboard.png",
    },
  },
  {
    id: "react-quiz",
    title: "React Learning Quiz App",
    description:
      "A cross-platform learning application to help developers master React concepts through interactive quizzes.",
    longDescription:
      "The React Learning Quiz App is a comprehensive educational tool designed to help developers strengthen their React knowledge. Built with Flutter for cross-platform functionality, the app features interactive quizzes, coding challenges, and progress tracking to facilitate effective learning. The backend is powered by Firebase, providing real-time updates and secure user authentication.",
    thumbnailUrl: "/images/projects/thumbnails/react-splash.png",
    deviceType: "mobile", // Added property
    tags: ["Mobile App", "Education", "Cross-Platform"],
    projectUrl: "/projects/react-quiz",
    featured: true,
    technologies: ["Flutter", "Dart", "Firebase", "State Management"],
    completed: "2022",
    mockups: {
      mobile: "/images/projects/react-quiz/mobile/react-splash.png",
      desktop: "/images/projects/react-quiz/mobile/concept-map.png",
    },
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "A responsive portfolio website built with React, TypeScript, and HeroUI to showcase my projects and skills.",
    longDescription:
      "This portfolio website demonstrates my approach to web development using React and TypeScript. It features responsive design, accessibility considerations, and interactive elements like project showcases with device mockups and lightbox modals.",
    thumbnailUrl: "/images/projects/thumbnails/portfolio.png", // Update with actual thumbnail
    deviceType: "desktop",
    tags: ["Web App", "Portfolio", "React"],
    projectUrl: "/projects/portfolio",
    featured: false,
    technologies: ["React", "TypeScript", "HeroUI", "Tailwind CSS", "Vite"],
    completed: "2024",
  },
  {
    id: "auction-app",
    title: "Real-time Auction Platform",
    description:
      "A full-stack web application enabling real-time auctions with instant bidding updates, user authentication, and responsive design.",
    longDescription:
      "This real-time auction platform is a full-stack web application built with Next.js, React, and Supabase. It allows users to create auction listings, browse items, place bids, and track auctions in real-time. The platform demonstrates my ability to implement complex features including real-time data synchronization, user authentication, and responsive design using modern web technologies.",
    thumbnailUrl: "/images/projects/thumbnails/auction1-front.png",
    deviceType: "desktop", // Added property
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
    mockups: {
      desktop: "/images/projects/auction-app/auction1.png",
      mobile: "/images/projects/auction-app/auction2.png",
    },
  },
  {
    id: "workflow-manager",
    title: "Workflow Manager System",
    description:
      "An in-house business management system that streamlines production workflows with automated quote generation and material optimization.",
    longDescription:
      "Workflow Manager is a custom business tool I developed to streamline operations within my printing business. This full-stack application combines a React frontend with a Django backend to automate complex printing calculations, optimize material usage, and generate accurate quotes—transforming a previously time-consuming manual process into an efficient digital workflow.",
    thumbnailUrl: "/images/projects/thumbnails/workflow-manager.png",
    deviceType: "desktop", // Added property
    tags: ["Full Stack", "Business Tool", "React", "Django"],
    projectUrl: "/projects/workflow-manager",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Django",
      "Python",
      "Docker",
      "Tailwind CSS",
      "PyPDF2",
    ],
    completed: "2025 (Ongoing)",
    mockups: {
      desktop: "/images/projects/workflow-manager/bm1.png",
    },
  },
  {
    id: "invoice-companion",
    title: "InvoiceCompanion",
    description:
      "A cross-platform invoicing application built with Flutter for personal business management with comprehensive client, product, and invoice tracking.",
    longDescription:
      "InvoiceCompanion is a full-featured invoicing solution I developed to address my own business needs. Built with Flutter, this cross-platform app provides complete invoice management including customer tracking, product catalogs, quote and invoice generation with PDF export, and business analytics—all with an intuitive interface that works seamlessly across devices.",
    thumbnailUrl: "/images/projects/thumbnails/inv-thumb-left.png", // Update with actual thumbnail
    deviceType: "mobile",
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
    mockups: {
      mobile: "/images/projects/invoice-companion/inv1.PNG",
    },
  },
  {
    id: "logistics-management-system",
    title: "Logistics Management System",
    description:
      "A comprehensive platform for hazardous materials logistics with real-time tracking, digital signatures, and operational management.",
    longDescription:
      "This logistics management system was developed for an international logistics company specializing in hazardous materials transport. It features a Flutter-based mobile app for drivers and a React-based admin dashboard with real-time synchronization, digital signature capture, and comprehensive job management.",
    thumbnailUrl: "/images/projects/thumbnails/hazmat-mobile.png", // Update with an actual thumbnail
    deviceType: "mobile",
    tags: [
      "Full Stack",
      "Mobile App",
      "Admin Dashboard",
      "Real-time",
      "Business Tool",
    ],
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
    mockups: {
      mobile: "/images/projects/logistics/mobile/haz-mobile1.PNG",
      desktop: "/images/projects/logistics/web/haz-admin1.png",
    },
  },
  {
    id: "emotion-detection",
    title: "Emotion Detection Web App",
    description:
      "An AI-powered web application that analyzes text to identify emotional content across five primary emotions, using local NLP models.",
    longDescription:
      "The Emotion Detection Web App is an AI-powered tool that analyzes text for emotional content across five primary emotions: joy, sadness, anger, fear, and disgust. Built as part of the IBM Full Stack Developer program, this application showcases the successful integration of the Hugging Face Transformers library instead of the recommended Watson NLP, creating a privacy-focused local solution.",
    thumbnailUrl: "/images/projects/thumbnails/nlp-thumb.png",
    deviceType: "desktop", // Added property
    tags: ["AI/ML", "Python", "Flask", "NLP"],
    projectUrl: "/projects/emotion-detection",
    featured: false,
    technologies: [
      "Python",
      "Flask",
      "Hugging Face",
      "HTML/CSS/JS",
      "Transformers",
      "Unittest",
    ],
    completed: "2024",
    mockups: {
      desktop: "/images/projects/emotion-detection/nlp1.png",
    },
  },
  {
    id: "license-plate-recognition",
    title: "License Plate Recognition System",
    description:
      "An exploratory R&D project that uses computer vision and OCR to automatically detect and recognize vehicle license plates from images.",
    longDescription:
      "This License Plate Recognition System is an R&D project developed to investigate computer vision capabilities for automatically identifying license plates. Built with Python, FastAPI, and OpenCV, it identifies South African license plates in images with custom text merging algorithms to improve OCR accuracy. This technology has direct applications for our company's parking guidance systems.",
    thumbnailUrl: "/images/projects/thumbnails/lic-thumb.png",
    deviceType: "desktop",
    tags: ["Computer Vision", "Python", "FastAPI", "R&D"],
    projectUrl: "/projects/license-plate-recognition",
    featured: true,
    technologies: ["Python", "FastAPI", "OpenCV", "EasyOCR", "NumPy", "RegEx"],
    completed: "2024",
    mockups: {
      desktop: "/images/projects/license-plate-recognition/lic-1.png",
    },
  },
];
