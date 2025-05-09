import { Route, Routes } from "react-router-dom";
import { ThemeLoader } from "@/components/ThemeLoader";
import { BackgroundPattern } from "@/components/BackgroundPattern";

import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import EtamaxProjectPage from "@/pages/etamax";
import ReactQuizProjectPage from "@/pages/react-quiz";
import AuctionAppProjectPage from "@/pages/auction-app";
import WorkflowManagerProjectPage from "@/pages/workflow-manager";
import InvoiceCompanionProjectPage from "@/pages/invoice-companion";
import LogisticsManagementSystemPage from "@/pages/logistics-management-system"; // Import Logistics System page
import SkillsPage from "@/pages/skills";
import ExperiencePage from "@/pages/experience";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";

function App() {
  return (
    <>
      <ThemeLoader />
      <BackgroundPattern />
      
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<ProjectsPage />} path="/projects" />
        <Route element={<EtamaxProjectPage />} path="/projects/etamax" />
        <Route element={<ReactQuizProjectPage />} path="/projects/react-quiz" />
        <Route element={<AuctionAppProjectPage />} path="/projects/auction-app" />
        <Route element={<WorkflowManagerProjectPage />} path="/projects/workflow-manager" />
        <Route element={<InvoiceCompanionProjectPage />} path="/projects/invoice-companion" />
        <Route element={<LogisticsManagementSystemPage />} path="/projects/logistics-management-system" /> {/* Add Logistics System route */}
        <Route element={<SkillsPage />} path="/skills" />
        <Route element={<ExperiencePage />} path="/experience" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
      </Routes>
    </>
  );
}

export default App;