// src/test/mocks/mockProjects.ts
import { Project } from "../../data/projects";

export const mockProjects: Project[] = [
  {
    id: "test-project-1",
    title: "Test Project 1",
    description: "This is a test project description",
    longDescription: "This is a longer description for test project 1",
    thumbnailUrl: "/images/projects/thumbnails/test-project.png",
    deviceType: "desktop",
    tags: ["Test", "Mock", "React"],
    projectUrl: "/projects/test-project-1",
    featured: true,
    technologies: ["React", "TypeScript", "Vitest"],
    completed: "2024",
  },
  {
    id: "test-project-2",
    title: "Test Project 2",
    description: "Another test project description",
    longDescription: "This is a longer description for test project 2",
    thumbnailUrl: "/images/projects/thumbnails/test-project-2.png",
    deviceType: "mobile",
    tags: ["Mobile", "Flutter"],
    projectUrl: "/projects/test-project-2",
    featured: false,
    technologies: ["Flutter", "Dart"],
    completed: "2023",
  }
];