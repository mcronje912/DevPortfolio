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

export const skillsData: SkillCategory[] = [
  {
    name: "Mobile Development",
    skills: [
      { name: "Flutter/Dart", level: 9 },
      { name: "BLE Integration", level: 8 },
      { name: "Cross-Platform Development", level: 9 },
      { name: "Xcode", level: 6 },
      { name: "Android Studio", level: 3 },
      { name: "React Native", level: 3 },
    ],
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "React.js", level: 8 },
      { name: "TypeScript", level: 8 },
      { name: "Next.js", level: 8 },
      { name: "HTML/CSS", level: 8 },
      { name: "Tailwind CSS", level: 8 },
      { name: "HeroUI Components", level: 8 },
      { name: "Responsive Design", level: 8 },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Supabase", level: 9 },
      { name: "Firebase", level: 9 },
      { name: "Node.js/Express", level: 7 },
      { name: "Python", level: 7 },
      { name: "Django", level: 6 },
      { name: "FastAPI", level: 5 },
      { name: "GraphQL", level: 3 },
      { name: "RESTful APIs", level: 8 },
      { name: "PostgreSQL", level: 8 },
      { name: "SQLite", level: 8 },
    ],
  },
  {
    name: "DevOps & Cloud Services",
    skills: [
      { name: "Git/GitHub", level: 8 },
      { name: "Google Cloud Platform", level: 8 },
      { name: "Vercel", level: 8 },
      { name: "Serverless Functions", level: 8 },
      { name: "CI/CD", level: 7 },
      { name: "App Store Submission", level: 8 },
      { name: "Google Play Submission", level: 8 },
      { name: "Agile Mehodology", level: 6 },
    ],
  },
  {
    name: "Data Science & ML",
    skills: [
      { name: "Jupyter Notebook", level: 8 },
      { name: "Computer Vision", level: 6 },
      { name: "OCR Implementation", level: 7 },
      { name: "Sentiment Analysis", level: 6 },
      { name: "Data Visualization", level: 8 },
      { name: "Text Processing", level: 6 },
    ],
  },
  {
    name: "Specialized Capabilities",
    skills: [
      { name: "IoT Integration", level: 8 },
      { name: "Real-time Sync", level: 8 },
      { name: "AES Communication", level: 7 },
      { name: "Business Process Automation", level: 9 },
      { name: "Payment Integration", level: 7 },
    ],
  },
];