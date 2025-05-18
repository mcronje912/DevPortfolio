// src/pages/etamax.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { EtamaxWebShowcase } from "@/components/projects/EtamaxWebShowcase";
import { EtamaxMobileShowcase } from "@/components/projects/EtamaxMobileShowcase";

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

          {/* Web Dashboard Showcase */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Administrative Dashboard
            </h2>
            <EtamaxWebShowcase />

            {/* Admin Features Card */}
            <Card className="bg-default-50">
              <CardBody>
                <h3 className="text-lg font-heading font-bold mb-3">
                  Admin Dashboard Features
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Real-time device monitoring across the entire deployment
                    ecosystem
                  </li>
                  <li>Energy usage analytics with detailed historical data</li>
                  <li>User management and role-based access control</li>
                  <li>Alert system for device issues and maintenance needs</li>
                  <li>
                    Comprehensive reporting tools for system performance
                    analysis
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>

          {/* Mobile App + Description Side by Side Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Mobile Application
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mobile showcase - narrower, takes up 1/3 of the width */}
              <div className="md:col-span-1">
                <EtamaxMobileShowcase />
              </div>

              {/* Description text - takes up 2/3 of the width */}
              <div className="md:col-span-2">
                <Card className="h-full">
                  <CardBody>
                    <h3 className="text-xl font-heading font-bold mb-4">
                      Mobile App Design & Features
                    </h3>
                    <p className="text-default-700 mb-6">
                      The Etamax mobile application provides homeowners with
                      intuitive control over their solar water heating systems.
                      By focusing on ease of use and real-time data
                      visualization, the app helps users make informed decisions
                      about their energy usage and maximize solar power
                      utilization.
                    </p>

                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Key Mobile Features:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Real-time Temperature Monitoring:</strong>{" "}
                          View current water temperature and track changes
                          throughout the day.
                        </li>
                        <li>
                          <strong>Energy Usage Visualization:</strong>{" "}
                          Interactive graphs showing solar vs. grid energy
                          consumption with cost savings.
                        </li>
                        <li>
                          <strong>Custom Heating Schedules:</strong> Set
                          personalized schedules to optimize energy usage based
                          on your household routine.
                        </li>
                        <li>
                          <strong>Boost Mode Control:</strong> Manually activate
                          heating when needed, with intelligent timing
                          suggestions to minimize grid power use.
                        </li>
                        <li>
                          <strong>System Alerts:</strong> Receive notifications
                          about potential issues, including leak detection and
                          maintenance reminders.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        Technical Implementation:
                      </h4>
                      <p className="text-default-700 mb-4">
                        Built with Flutter to ensure consistent performance
                        across both iOS and Android devices, with several
                        technical innovations:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Robust BLE Architecture:</strong> Custom
                          implementation of Bluetooth Low Energy connectivity
                          with automatic reconnection and data validation.
                        </li>
                        <li>
                          <strong>Efficient State Management:</strong> Using
                          Provider pattern for predictable state updates and
                          responsive UI.
                        </li>
                        <li>
                          <strong>Offline Capability:</strong> Local data
                          storage ensures the app remains functional even
                          without internet connectivity.
                        </li>
                        <li>
                          <strong>Analytics Engine:</strong> On-device
                          processing of usage data to deliver personalized
                          energy-saving recommendations.
                        </li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </div>
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
