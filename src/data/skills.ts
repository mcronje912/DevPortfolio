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
      { name: "Flutter/Dart", level: 8 },
      { name: "BLE Integration", level: 8 },
      { name: "Cross-Platform Development", level: 9 },
      { name: "Xcode", level: 6 },
      { name: "Android Studio", level: 3 },
      { name: "App Store Deployment", level: 8 },
    ],
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "React.js", level: 8 },
      { name: "TypeScript", level: 7 },
      { name: "Next.js", level: 7 },
      { name: "HTML/CSS", level: 8 },
      { name: "Tailwind CSS", level: 8 },
      { name: "HeroUI Components", level: 8 },
      { name: "Responsive Design", level: 8 },
    ],
  },
  {
    name: "Design & User Experience",
    skills: [
      { name: "UI Design", level: 8 },
      { name: "UX Design", level: 8 },
      { name: "Prototyping", level: 7 },
      { name: "User Research", level: 7 },
      { name: "Figma", level: 8 },
      { name: "Adobe Illustrator", level: 9 },
      { name: "Adobe Photoshop", level: 9 },

    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Supabase/Firebase", level: 9 },
      { name: "Node.js/Express", level: 7 },
      { name: "Python", level: 7 },
      { name: "Django", level: 6 },
      { name: "FastAPI", level: 5 },
      { name: "GraphQL", level: 3 },
      { name: "RESTful APIs", level: 8 },
      { name: "PostgreSQL", level: 7 },
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
      { name: "Docker", level: 6 },
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
      { name: "Exploratory Data Analysis", level: 7 },
    ],
  },
  {
    name: "Specialized Capabilities",
    skills: [
      { name: "IoT Integration", level: 8 },
      { name: "AES Communication", level: 6 },
      { name: "Business Process Automation", level: 8 },
      { name: "Payment Integration", level: 5 },
      { name: "ESP32", level: 8 },
      { name: "MQTT", level: 7 },
      { name: "Digital Marketing & Ecommerce", level: 8 },

      
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