export interface Skill {
  name: string;
  level: number; // 1-10
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Mobile Development",
    skills: [
      { name: "Flutter/Dart", level: 9 },
      { name: "BLE Integration", level: 9 },
      { name: "Cross-Platform Development", level: 9 },
      { name: "App Store Deployment", level: 8 },
      { name: "RevenueCat Integration", level: 7 },
      { name: "Push Notifications", level: 8 },
      { name: "Offline-First Design", level: 8 },
    ],
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "React.js", level: 9 },
      { name: "TypeScript", level: 8 },
      { name: "Next.js", level: 8 },
      { name: "HTML/CSS", level: 9 },
      { name: "Tailwind CSS", level: 9 },
      { name: "HeroUI Components", level: 8 },
      { name: "Responsive Design", level: 9 },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Supabase", level: 9 },
      { name: "Firebase", level: 8 },
      { name: "Node.js", level: 8 },
      { name: "Python", level: 7 },
      { name: "Django", level: 6 },
      { name: "RESTful APIs", level: 9 },
      { name: "Real-time Databases", level: 9 },
      { name: "PostgreSQL", level: 8 },
      { name: "SQLite", level: 8 },
    ],
  },
  {
    name: "DevOps & Deployment",
    skills: [
      { name: "Git/GitHub", level: 8 },
      { name: "Vercel", level: 8 },
      { name: "Cloud Functions", level: 7 },
      { name: "CI/CD", level: 7 },
      { name: "App Store Submission", level: 8 },
      { name: "Google Play Submission", level: 8 },
    ],
  },
  {
    name: "Specialized Capabilities",
    skills: [
      { name: "IoT Integration", level: 9 },
      { name: "Real-time Sync", level: 9 },
      { name: "PDF Generation", level: 8 },
      { name: "Digital Signature Capture", level: 8 },
      { name: "Business Process Automation", level: 9 },
      { name: "Payment Integration", level: 7 },
      { name: "Data Visualization", level: 8 },
    ],
  },
  {
    name: "Project Management",
    skills: [
      { name: "Requirements Analysis", level: 8 },
      { name: "System Architecture", level: 8 },
      { name: "Solution Design", level: 9 },
      { name: "Client Communication", level: 8 },
      { name: "Documentation", level: 7 },
      { name: "Project Planning", level: 8 },
    ],
  },
];