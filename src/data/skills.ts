// src/data/skills.ts
export interface Skill {
  name: string;
  level: number; // 1-10
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// Create the skills data first
const unsortedSkillsData: SkillCategory[] = [
  {
    name: "Mobile Development",
    skills: [
      { name: "Flutter/Dart", level: 9 },
      { name: "BLE Integration", level: 9 },
      { name: "Cross-Platform Development", level: 9 },
      { name: "Xcode", level: 6 },
      { name: "Android Studio", level: 3 },
      { name: "App Store Deployment", level: 8 },
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
      { name: "Node.js/Express", level: 7 },
      { name: "Python", level: 7 },
      { name: "Django", level: 6 },
      { name: "FastAPI", level: 5 },
      { name: "GraphQL", level: 3 },
      { name: "RESTful APIs", level: 9 },
      { name: "PostgreSQL", level: 7 },
      { name: "SQLite", level: 8 },
    ],
  },
  {
    name: "DevOps & Cloud Services",
    skills: [
      { name: "Git/GitHub", level: 8 },
      { name: "Google Cloud Platform", level: 7 },
      { name: "Vercel", level: 8 },
      { name: "Cloud Functions", level: 7 },
      { name: "CI/CD", level: 7 },
      { name: "App Store Submission", level: 8 },
      { name: "Google Play Submission", level: 8 },
    ],
  },
  {
    name: "Data Science & ML",
    skills: [
      { name: "Jupyter Notebook", level: 7 },
      { name: "Computer Vision", level: 6 },
      { name: "OCR Implementation", level: 7 },
      { name: "Sentiment Analysis", level: 6 },
      { name: "Data Visualization", level: 7 },
      { name: "Text Processing", level: 6 },
    ],
  },
  {
    name: "Specialized Capabilities",
    skills: [
      { name: "IoT Integration", level: 9 },
      { name: "Real-time Sync", level: 9 },
      { name: "AES Communication", level: 8 },
      { name: "Business Process Automation", level: 9 },
      { name: "Payment Integration", level: 7 },
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

// Create a sorted copy of the skills data
export const skillsData: SkillCategory[] = unsortedSkillsData.map(
  (category) => ({
    ...category,
    skills: [...category.skills].sort((a, b) => b.level - a.level),
  }),
);
