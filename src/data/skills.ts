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
    name: "Frontend Development",
    skills: [
      { name: "React.js", level: 9 },
      { name: "TypeScript", level: 8 },
      { name: "Flutter/Dart", level: 9 },
      { name: "HTML/CSS", level: 9 },
      { name: "Tailwind CSS", level: 8 },
      { name: "UX/UI Design", level: 7 },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 8 },
      { name: "Express", level: 8 },
      { name: "PostgreSQL", level: 7 },
      { name: "Firebase", level: 9 },
      { name: "Supabase", level: 7 },
      { name: "GraphQL", level: 6 },
      { name: "RESTful APIs", level: 9 },
    ],
  },
  {
    name: "IoT & Hardware Integration",
    skills: [
      { name: "ESP32/STM32", level: 8 },
      { name: "Platform IO", level: 7 },
      { name: "Bluetooth Low Energy", level: 9 },
      { name: "MQTT", level: 7 },
      { name: "AES Encryption", level: 6 },
    ],
  },
  {
    name: "Tools & Processes",
    skills: [
      { name: "Git/GitHub", level: 8 },
      { name: "VS Code", level: 9 },
      { name: "Google Cloud Platform", level: 7 },
      { name: "CI/CD", level: 6 },
      { name: "Serverless Functions", level: 8 },
    ],
  },
  {
    name: "Design & Graphics",
    skills: [
      { name: "Adobe Illustrator", level: 8 },
      { name: "Adobe Photoshop", level: 7 },
      { name: "Autodesk Fusion360", level: 6 },
      { name: "Figma", level: 7 },
    ],
  },
];
