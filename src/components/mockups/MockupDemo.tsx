// src/components/mockups/MockupDemo.tsx
import React from "react";
import { DeviceMockup } from "./DeviceMockup";
import { ProjectMockup } from "./ProjectMockup";
import { Card, CardBody } from "@heroui/card";
import { Tabs, Tab } from "@heroui/tabs";

// Define your screenshots with the exact filenames you have
const mobileScreenshots = [
  {
    id: "etamax-home",
    name: "Etamax Home",
    path: "/screenshots/mobile/etamax-home.PNG",
    description: "Main screen of the Etamax solar monitoring app showing system status and controls"
  },
  {
    id: "etamax-dashboard",
    name: "Etamax Dashboard",
    path: "/screenshots/mobile/etamax-dashboard.png",
    description: "Energy monitoring dashboard with detailed analytics and usage patterns"
  },
  {
    id: "etamax-3",
    name: "Etamax Details",
    path: "/screenshots/mobile/etamax-3.png",
    description: "Detailed view of the solar energy system performance metrics"
  }
];

export const MockupDemo: React.FC = () => {
  const [selectedScreenshot, setSelectedScreenshot] = React.useState(mobileScreenshots[0].id);
  
  const currentScreenshot = mobileScreenshots.find(s => s.id === selectedScreenshot) || mobileScreenshots[0];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-heading font-bold mb-6">Etamax App Showcase</h2>
      
      <div className="mb-8">
        <Tabs 
          aria-label="App screenshots" 
          color="primary"
          variant="underlined"
          selectedKey={selectedScreenshot}
          onSelectionChange={(key) => setSelectedScreenshot(key as string)}
        >
          {mobileScreenshots.map((screenshot) => (
            <Tab key={screenshot.id} title={screenshot.name} />
          ))}
        </Tabs>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Card className="h-full">
            <CardBody className="flex flex-col items-center justify-center p-8 bg-ash-gray-900 dark:bg-rich-black-600">
              <DeviceMockup 
                type="phone" 
                image={currentScreenshot.path} 
                alt={currentScreenshot.name} 
              />
            </CardBody>
          </Card>
        </div>
        
        <div className="w-full md:w-1/2">
          <Card className="h-full">
            <CardBody>
              <h3 className="text-xl font-heading font-bold mb-4">{currentScreenshot.name}</h3>
              <p className="text-default-700 mb-6">{currentScreenshot.description}</p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Application Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Real-time solar energy monitoring</li>
                  <li>Energy usage analytics and visualization</li>
                  <li>Temperature and system controls</li>
                  <li>Usage optimization recommendations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Technical Implementation:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Built with Flutter for cross-platform support</li>
                  <li>BLE communications for device connectivity</li>
                  <li>Real-time data synchronization</li>
                  <li>Local storage for offline functionality</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      
      <h2 className="text-2xl font-heading font-bold my-8">Multi-Device Comparison</h2>
      
      <Card>
        <CardBody className="p-8 bg-ash-gray-900 dark:bg-rich-black-600">
          <ProjectMockup 
            mobileImage="/screenshots/mobile/etamax-home.PNG"
            desktopImage="/screenshots/mobile/etamax-dashboard.png" // Using dashboard as desktop for now
            alt="Etamax Project Showcase"
          />
        </CardBody>
      </Card>
      
      <h2 className="text-2xl font-heading font-bold my-8">Different Device Views</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardBody className="p-6 bg-ash-gray-900 dark:bg-rich-black-600">
            <h3 className="text-lg font-medium mb-4 text-center text-white">Phone View</h3>
            <DeviceMockup 
              type="phone" 
              image="/screenshots/mobile/etamax-home.PNG"
              alt="Etamax on Phone" 
            />
          </CardBody>
        </Card>
        
        <Card>
          <CardBody className="p-6 bg-ash-gray-900 dark:bg-rich-black-600">
            <h3 className="text-lg font-medium mb-4 text-center text-white">Tablet View</h3>
            <DeviceMockup 
              type="tablet" 
              image="/screenshots/mobile/etamax-dashboard.png"
              alt="Etamax on Tablet" 
              className="scale-[0.6] origin-top"
            />
          </CardBody>
        </Card>
        
        <Card>
          <CardBody className="p-6 bg-ash-gray-900 dark:bg-rich-black-600">
            <h3 className="text-lg font-medium mb-4 text-center text-white">Laptop View</h3>
            <DeviceMockup 
              type="laptop" 
              image="/screenshots/mobile/etamax-3.png"
              alt="Etamax on Laptop" 
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};