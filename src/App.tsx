// src/App.tsx
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { ThemeLoader } from "@/components/ThemeLoader";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { useAnalytics } from "@/hooks/useAnalytics";
import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import EtamaxProjectPage from "@/pages/etamax";
import ReactQuizProjectPage from "@/pages/react-quiz";
import AuctionAppProjectPage from "@/pages/auction-app";
import WorkflowManagerProjectPage from "@/pages/workflow-manager";
import InvoiceCompanionProjectPage from "@/pages/invoice-companion";
import LogisticsManagementSystemPage from "@/pages/logistics-management-system";
import EmotionDetectionProjectPage from "@/pages/emotion-detection";
import LicensePlateRecognitionPage from "@/pages/license-plate-recognition"; 
import SkillsPage from "@/pages/skills";
import ExperiencePage from "@/pages/experience";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import { MockupDemo } from "@/components/mockups/MockupDemo";
import PortfolioProjectPage from "./pages/portfolio";

function App() {
  const location = useLocation();
  const { trackEvent } = useAnalytics();

  // Track page views whenever the location changes
  useEffect(() => {
    // Small delay to ensure the page has loaded
    const timeout = setTimeout(() => {
      trackEvent('page_view', {
        path: location.pathname,
        query: location.search,
        title: document.title
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [location, trackEvent]);

  return (
    <>
      <ThemeLoader />
      <BackgroundPattern />

      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<ProjectsPage />} path="/projects" />
        <Route element={<EtamaxProjectPage />} path="/projects/etamax" />
        <Route element={<ReactQuizProjectPage />} path="/projects/react-quiz" />
        <Route
          element={<AuctionAppProjectPage />}
          path="/projects/auction-app"
        />
        <Route
          element={<WorkflowManagerProjectPage />}
          path="/projects/workflow-manager"
        />
        <Route
          element={<InvoiceCompanionProjectPage />}
          path="/projects/invoice-companion"
        />
        <Route
          element={<LogisticsManagementSystemPage />}
          path="/projects/logistics-management-system"
        />
        <Route
          element={<EmotionDetectionProjectPage />}
          path="/projects/emotion-detection"
        />
        <Route
          element={<LicensePlateRecognitionPage />}
          path="/projects/license-plate-recognition"
        />
        <Route element={<PortfolioProjectPage />} path="/projects/portfolio" />
        <Route element={<MockupDemo />} path="/mockup-demo" />
        <Route element={<SkillsPage />} path="/skills" />
        <Route element={<ExperiencePage />} path="/experience" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
      </Routes>
    </>
  );
}

export default App;