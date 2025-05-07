import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import SkillsPage from "@/pages/skills";
import ExperiencePage from "@/pages/experience";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<SkillsPage />} path="/skills" />
      <Route element={<ExperiencePage />} path="/experience" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
  );
}

export default App;