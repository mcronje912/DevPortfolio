export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  subPeriods?: {
    title: string;
    startDate: string;
    endDate: string;
    achievements: string[];
  }[];
}

export const experiences: Experience[] = [
  {
    id: "jves",
    title: "Director & Technical Lead",
    company: "Joint Ventures Electronic Services (Pty) Ltd",
    location: "Johannesburg",
    startDate: "January 2010",
    endDate: "Present",
    description:
      "15+ year evolution from business operations to technical leadership and software development, driving digital transformation initiatives and building comprehensive technology solutions.",
    achievements: [],
    subPeriods: [
      {
        title: "Software Development & IoT Systems",
        startDate: "2022",
        endDate: "Present",
        achievements: [
          "Developed the Etamax Solar Monitoring System — a comprehensive IoT solution including a Flutter mobile application and React-based administrative dashboard that enables real-time monitoring and optimization of solar energy systems through BLE communications with proprietary hardware",
          "Created custom business management tools, including a Print Quote System that reduced quote generation time from 30+ minutes to under 5 minutes through automated calculations and visual layout optimization",
          "Eliminated external development costs by establishing in-house software development capabilities, delivering multiple cross-platform applications while maintaining full control over proprietary technology",
          "Implemented secure IoT communication protocols with AES encryption for data protection, ensuring reliable BLE connectivity between mobile applications and custom hardware devices",
          "Architected scalable cloud infrastructure using Firebase/Supabase and Google Cloud Platform that maintains consistent performance during peak usage periods while supporting offline functionality for field operations",
          "Self-taught Flutter, React, and IoT integration through practical application on real business projects"
        ]
      },
      {
        title: "Technical Leadership & Business Automation",
        startDate: "2020",
        endDate: "2022",
        achievements: [
          "Led digital transformation initiatives and technical project planning sessions with stakeholders",
          "Developed initial automation tools and workflow improvements to address operational inefficiencies",
          "Collaborated closely with engineering teams on technical solutions and system integrations",
          "Began learning software development methodologies to solve internal business challenges",
          "Implemented technical systems for data management and process optimization",
          "Established foundation for in-house development capabilities through research and prototyping"
        ]
      },
      {
        title: "Operations & Digital Systems Management",
        startDate: "January 2010",
        endDate: "2020",
        achievements: [
          "Established and managed the in-house digital printing department, developing automated workflows that increased production efficiency by 30%",
          "Implemented technical systems for tracking production status, resource allocation, and quality control metrics, creating data-driven processes that improved manufacturing operations",
          "Collaborated with engineering teams to develop streamlined production processes, creating interfaces between design software and manufacturing equipment that reduced production time and material waste",
          "Designed and maintained internal production databases that automated inventory management and facilitated real-time status reporting",
          "Developed and executed comprehensive digital strategies, including website optimization and targeted Google Ads campaigns, resulting in measurable growth in customer acquisition and online brand visibility"
        ]
      }
    ]
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
      "Managed the administration of group health insurance policies, ensuring meticulous data entry and efficient processing of new enrollments, additions, and coverage changes",
      "Ensured full compliance with state and federal regulations, including HIPAA, while maintaining strict adherence to patient confidentiality guidelines",
      "Collaborated with international colleagues in the USA offices to streamline administrative processes, leading to improved cross-border communication and operational efficiency"
    ]
  }
];