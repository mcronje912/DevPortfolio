// src/App.tsx
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { ThemeLoader } from "@/components/ThemeLoader";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { ErrorBoundary } from "@/components/ErrorBoundary";
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
import PortfolioProjectPage from "./pages/portfolio";
import { MockupDemo } from "@/components/mockups/MockupDemo";

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

      {/* The correct way to use ErrorBoundary with Routes */}
      <ErrorBoundary>
        <Routes>
          <Route element={<IndexPage />} path="/" />
          
          {/* Project routes - each wrapped in its own ErrorBoundary */}
          <Route element={<ProjectsPage />} path="/projects" />
          <Route element={
            <ErrorBoundary>
              <EtamaxProjectPage />
            </ErrorBoundary>
          } path="/projects/etamax" />
          <Route element={
            <ErrorBoundary>
              <ReactQuizProjectPage />
            </ErrorBoundary>
          } path="/projects/react-quiz" />
          <Route element={
            <ErrorBoundary>
              <AuctionAppProjectPage />
            </ErrorBoundary>
          } path="/projects/auction-app" />
          <Route element={
            <ErrorBoundary>
              <WorkflowManagerProjectPage />
            </ErrorBoundary>
          } path="/projects/workflow-manager" />
          <Route element={
            <ErrorBoundary>
              <InvoiceCompanionProjectPage />
            </ErrorBoundary>
          } path="/projects/invoice-companion" />
          <Route element={
            <ErrorBoundary>
              <LogisticsManagementSystemPage />
            </ErrorBoundary>
          } path="/projects/logistics-management-system" />
          <Route element={
            <ErrorBoundary>
              <EmotionDetectionProjectPage />
            </ErrorBoundary>
          } path="/projects/emotion-detection" />
          <Route element={
            <ErrorBoundary>
              <LicensePlateRecognitionPage />
            </ErrorBoundary>
          } path="/projects/license-plate-recognition" />
          <Route element={
            <ErrorBoundary>
              <PortfolioProjectPage />
            </ErrorBoundary>
          } path="/projects/portfolio" />
          
          {/* Other main routes */}
          <Route element={
            <ErrorBoundary>
              <MockupDemo />
            </ErrorBoundary>
          } path="/mockup-demo" />
          <Route element={
            <ErrorBoundary>
              <SkillsPage />
            </ErrorBoundary>
          } path="/skills" />
          <Route element={
            <ErrorBoundary>
              <ExperiencePage />
            </ErrorBoundary>
          } path="/experience" />
          <Route element={
            <ErrorBoundary>
              <AboutPage />
            </ErrorBoundary>
          } path="/about" />
          <Route element={
            <ErrorBoundary>
              <ContactPage />
            </ErrorBoundary>
          } path="/contact" />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;