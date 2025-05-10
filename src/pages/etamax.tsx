// src/pages/projects/etamax.tsx or can be used in your project-detail.tsx with the etamax ID
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

export default function EtamaxProjectPage() {
  return (
    <DefaultLayout>
      <div className="py-10">
        <div className="container px-4 mx-auto">
          {/* Header section */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center mb-4">
              <Link
                className="flex items-center hover:opacity-80 transition-opacity mr-4"
                color="primary"
                href="/projects"
              >
                <span className="text-lg">←</span>
                <span className="ml-1">Projects</span>
              </Link>
            </div>

            <h1 className={title({ size: "lg", class: "mb-4" })}>
              Etamax Solar Energy Management System
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Chip color="primary" variant="flat">
                IoT Integration
              </Chip>
              <Chip color="primary" variant="flat">
                Mobile App
              </Chip>
              <Chip color="primary" variant="flat">
                Web Dashboard
              </Chip>
              <Chip color="primary" variant="flat">
                BLE
              </Chip>
              <Chip color="primary" variant="flat">
                Cloud Services
              </Chip>
            </div>
          </div>

          {/* Image container */}
          <Card className="mb-10 shadow-md overflow-hidden">
            <CardBody className="p-0">
              <div className="bg-gradient-to-br from-cerulean to-verdigris h-80 w-full flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-white text-xl font-medium mb-2">
                    Project Image
                  </p>
                  <p className="text-white-800 text-sm opacity-80">
                    Screenshots coming soon
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Overview section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
              <div className="prose max-w-none text-default-700">
                <p className="mb-4">
                  A comprehensive IoT solution for intelligent solar water
                  heater management, featuring a cross-platform mobile
                  application and administrative dashboard. Designed and
                  developed entirely in South Africa, the Etamax system helps
                  users maximize solar energy utilization while providing
                  administrators with robust management tools.
                </p>
                <p className="mb-4">
                  The system enables homeowners to monitor and control their
                  solar water heating systems via a mobile app that connects
                  through Bluetooth when within range. Users can track grid and
                  solar energy usage, set custom schedules, and manually boost
                  their geyser when required—all contributing to significant
                  electricity savings, which is the primary value proposition.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Chip color="secondary" variant="flat">
                      Flutter
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      React
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      TypeScript
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      BLE
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Supabase
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      PostgreSQL
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Provider
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Tailwind CSS
                    </Chip>
                  </div>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Completed
                  </h3>
                  <p>2024</p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    My Role
                  </h3>
                  <p>Lead Full Stack Developer & IoT System Architect</p>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* My Role section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">My Role</h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                As Lead Full Stack Developer & IoT System Architect, I
                conceptualized and implemented the entire Etamax digital
                ecosystem from the ground up. My responsibilities included:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  Developing a cross-platform mobile application using
                  Flutter/Dart
                </li>
                <li>Creating a React/TypeScript administrative dashboard</li>
                <li>
                  Implementing Bluetooth Low Energy (BLE) device communication
                </li>
                <li>
                  Designing and building the cloud infrastructure with Supabase
                </li>
                <li>
                  Publishing applications to both iOS and Android app stores
                </li>
                <li>
                  Collaborating with hardware engineers to ensure seamless
                  integration
                </li>
              </ul>
            </div>
          </div>

          {/* System Components section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              System Components
            </h2>

            {/* Mobile Application sub-section */}
            <div className="mb-8">
              <h3 className="text-xl font-heading font-bold mb-3">
                Mobile Application
              </h3>
              <Card className="mb-6 bg-default-50">
                <CardBody className="p-0">
                  <div className="bg-gradient-to-r from-cornsilk-700 to-cornsilk-600 h-64 w-full flex items-center justify-center">
                    <div className="text-center px-6">
                      <p className="text-rich-black text-xl font-medium mb-2">
                        Mobile App Screenshots
                      </p>
                      <p className="text-rich-black-400 text-sm opacity-80">
                        Coming soon
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="prose max-w-none text-default-700">
                <p className="mb-4">
                  The Etamax mobile application provides homeowners with
                  real-time control and monitoring of their solar water heating
                  system. Built with Flutter to ensure a consistent experience
                  across both iOS and Android platforms.
                </p>

                <h4 className="text-lg font-bold mt-4 mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Real-time temperature and energy monitoring</li>
                  <li>Solar vs. grid energy usage visualization</li>
                  <li>
                    Custom heating schedules to maximize solar utilization
                  </li>
                  <li>Leak detection alerts and notifications</li>
                  <li>Holiday mode for optimal energy management</li>
                  <li>
                    Multi-device management for households with multiple units
                  </li>
                </ul>

                <h4 className="text-lg font-bold mt-4 mb-2">
                  Technical Implementation:
                </h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>
                    Robust BLE connection management with automatic reconnection
                  </li>
                  <li>
                    Efficient data synchronization between device and cloud
                  </li>
                  <li>
                    Stream-based reactive programming for real-time updates
                  </li>
                  <li>Comprehensive data validation and error handling</li>
                  <li>Local caching for offline functionality</li>
                </ul>
              </div>
            </div>

            {/* Admin Dashboard sub-section */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-3">
                Administrative Dashboard
              </h3>
              <Card className="mb-6 bg-default-50">
                <CardBody className="p-0">
                  <div className="bg-gradient-to-r from-ash-gray-700 to-ash-gray-600 h-64 w-full flex items-center justify-center">
                    <div className="text-center px-6">
                      <p className="text-rich-black text-xl font-medium mb-2">
                        Admin Dashboard Screenshots
                      </p>
                      <p className="text-rich-black-400 text-sm opacity-80">
                        Coming soon
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="prose max-w-none text-default-700">
                <p className="mb-4">
                  The web-based dashboard provides system administrators with
                  comprehensive tools for monitoring, managing, and analyzing
                  the entire Etamax device ecosystem.
                </p>

                <h4 className="text-lg font-bold mt-4 mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>
                    Real-time device status monitoring across the deployment
                    ecosystem
                  </li>
                  <li>Installation tracking with location data</li>
                  <li>Energy usage analytics and reporting</li>
                  <li>Alert management for system issues</li>
                  <li>User management and access control</li>
                  <li>
                    Device lifecycle management (from testing to retirement)
                  </li>
                </ul>

                <h4 className="text-lg font-bold mt-4 mb-2">
                  Technical Implementation:
                </h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>
                    React and TypeScript frontend with modular component
                    architecture
                  </li>
                  <li>Supabase for real-time data synchronization</li>
                  <li>Comprehensive data visualization</li>
                  <li>Role-based access control</li>
                  <li>
                    Scalable architecture to support growing device deployments
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development Journey section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Development Journey
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                This project represented a significant evolution in our approach
                to IoT device management. I identified an opportunity to create
                a more robust, user-friendly system that would work flawlessly
                across platforms while providing powerful management tools.
              </p>
              <p className="mb-4">
                Taking initiative, I developed a solution that expanded the
                capabilities of the original concept, introducing cloud
                connectivity, data analytics, and an intuitive interface—all
                while ensuring seamless compatibility with the existing hardware
                infrastructure.
              </p>
            </div>
          </div>

          {/* Technical Challenges section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Technical Challenges Overcome
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Challenge 1 */}
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Cross-Platform Database Integration
                  </h3>
                  <p className="text-default-700">
                    After encountering critical iOS compatibility issues with
                    Firebase (particularly with CocoaPods dependencies), I
                    researched alternatives and successfully migrated to
                    Supabase with PostgreSQL. This required restructuring the
                    entire data layer, but resulted in improved reliability and
                    performance across both platforms.
                  </p>
                </CardBody>
              </Card>

              {/* Challenge 2 */}
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Reliable BLE Communication
                  </h3>
                  <p className="text-default-700">
                    Developing stable Bluetooth connectivity presented
                    significant challenges, including creating a robust
                    connection management system, preventing duplicate data
                    streams, designing validation protocols for corrupted data,
                    and establishing automatic reconnection with intelligent
                    retry logic. After extensive testing across multiple device
                    types, I achieved a remarkably stable BLE implementation.
                  </p>
                </CardBody>
              </Card>

              {/* Challenge 3 */}
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Full-Stack Integration
                  </h3>
                  <p className="text-default-700">
                    Creating a seamless experience between the mobile
                    application and administrative dashboard required careful
                    planning of the data architecture. By implementing a
                    thoughtful database schema and API design, I ensured that
                    data flows efficiently between all system components while
                    maintaining integrity and security.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Impact and Results section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Impact and Results
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                The Etamax system has transformed how users interact with their
                solar water heaters, providing unprecedented visibility and
                control over energy usage. For administrators, the dashboard has
                streamlined operations and provided valuable insights into
                system performance.
              </p>
              <p className="mb-4">
                The solution has been well-received by stakeholders and
                partners, who have expressed appreciation for the system&apos;s
                reliability, intuitive interface, and comprehensive feature set.
                As the product moves into the market, it demonstrates South
                African innovation in renewable energy management.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex justify-center mt-12">
            <Button
              as={Link}
              className="px-8"
              color="primary"
              href="/contact"
              variant="shadow"
            >
              Discuss Similar Projects
            </Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
