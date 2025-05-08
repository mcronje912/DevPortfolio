// src/App.tsx
import { Route, Routes } from "react-router-dom";
import { BackgroundPattern } from "@/components/BackgroundPattern";

import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import SkillsPage from "@/pages/skills";
import ExperiencePage from "@/pages/experience";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";

function App() {
  return (
    <>
      {/* Background pattern - placed here to be rendered by React */}
      <BackgroundPattern />
      
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<ProjectsPage />} path="/projects" />
        <Route element={<SkillsPage />} path="/skills" />
        <Route element={<ExperiencePage />} path="/experience" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
      </Routes>
    </>
  );
}

export default App;