export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "jves",
    title: "Full Stack Developer & IoT Systems Engineer",
    company: "Joint Ventures Electronic Services (Pty) Ltd",
    location: "Johannesburg",
    startDate: "April 2023",
    endDate: "Present",
    description:
      "Leading development of cross-platform applications and IoT systems integration for electronic equipment.",
    achievements: [
      "Developed cross-platform mobile applications using Flutter interfacing with proprietary hardware through BLE",
      "Built comprehensive React-based admin panels with TypeScript for device management and user tracking",
      "Established in-house development capability, eliminating external outsourcing needs",
      "Engineered Node.js/Express backend systems with efficient database architectures",
      "Implemented secure IoT communication protocols between mobile applications and custom hardware devices",
      "Architected scalable cloud infrastructure using Firebase/Supabase and Google Cloud Platform",
    ],
  },
  {
    id: "graphics-manager",
    title: "Graphics and Print Production Manager",
    company: "Joint Ventures Electronic Services (Pty) Ltd",
    location: "Johannesburg",
    startDate: "January 2010",
    endDate: "April 2023",
    description:
      "Managed in-house digital printing department and implemented technical systems for production tracking.",
    achievements: [
      "Established and managed the in-house digital printing department",
      "Implemented technical systems for tracking production status and resource allocation",
      "Developed and executed comprehensive digital strategies including website optimization",
      "Designed and maintained internal production databases that automated inventory management",
    ],
  },
  {
    id: "discovery",
    title: "New Business Administrator",
    company: "Discovery Health",
    location: "Sandton",
    startDate: "2006",
    endDate: "2009",
    description:
      "Managed administration of group health insurance policies and ensured compliance with regulations.",
    achievements: [
      "Managed the administration of group health insurance policies",
      "Ensured full compliance with state and federal regulations",
      "Collaborated with international colleagues to streamline administrative processes",
    ],
  },
  {
    id: "clear-channel",
    title: "Team Lead - Applications",
    company: "Clear Channel - TaxiMedia",
    location: "London, UK",
    startDate: "2004",
    endDate: "2006",
    description:
      "Led vinyl applications team responsible for black cab branding and outdoor advertising.",
    achievements: [
      "Led, managed, and supervised a vinyl applications team",
      "Ensured high-quality standards and compliance with industry guidelines",
      "Streamlined workflow processes by implementing best practices",
    ],
  },
];
