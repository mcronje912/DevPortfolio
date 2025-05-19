// src/pages/logistics-management-system.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import {
  AdminDashboardShowcase,
  MobileAppShowcase,
} from "@/components/projects/LogisticsShowcase";

export default function LogisticsManagementSystemPage() {
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
              Logistics Management System
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Chip color="primary" variant="flat">
                Full Stack
              </Chip>
              <Chip color="primary" variant="flat">
                Mobile App
              </Chip>
              <Chip color="primary" variant="flat">
                Admin Dashboard
              </Chip>
              <Chip color="primary" variant="flat">
                Real-time
              </Chip>
            </div>
          </div>

          {/* Overview section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
              <div className="prose max-w-none text-default-700">
                <p className="mb-4">
                  This comprehensive logistics management system was developed
                  for an international logistics company specializing in
                  hazardous materials transport. The project involved creating
                  both a mobile application for drivers and an administrative
                  dashboard for office staff, enabling real-time tracking,
                  secure digital signatures, and comprehensive job management.
                </p>
                <p className="mb-4">
                  The solution replaced an inefficient paper-based system with a
                  modern digital platform, significantly improving operational
                  efficiency while maintaining strict security protocols
                  necessary for handling hazardous materials.
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
                      Tailwind CSS
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      HeroUI
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Secure Cloud Database
                    </Chip>
                  </div>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Completed
                  </h3>
                  <p>2025 (Proof of concept)</p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    My Role
                  </h3>
                  <p>Full Stack Developer</p>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Admin Dashboard Showcase */}
          <AdminDashboardShowcase />

          {/* Mobile App + Description Side by Side Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Driver Mobile Application
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mobile showcase - narrower, takes up 1/3 of the width */}
              <div className="md:col-span-1">
                <MobileAppShowcase />
              </div>

              {/* Description text - takes up 2/3 of the width */}
              <div className="md:col-span-2">
                <Card className="h-full">
                  <CardBody>
                    <h3 className="text-xl font-heading font-bold mb-4">
                      Mobile App Design & Features
                    </h3>
                    <p className="text-default-700 mb-6">
                      The mobile application was designed specifically for
                      drivers transporting hazardous materials, with particular
                      attention to ease of use while on the road. By digitizing
                      all aspects of the delivery process, we&apos;ve created a
                      solution that enhances safety, efficiency, and compliance.
                    </p>

                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Key Mobile Features:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Digital Signature Capture:</strong> Capturing
                          of electronic signatures that eliminate the need for
                          paper documentation while maintaining compliance with
                          regulations.
                        </li>
                        <li>
                          <strong>Offline Functionality:</strong> Critical data
                          is stored locally and synchronized when connectivity
                          is restored, ensuring drivers can continue operations
                          in remote areas with limited cell service.
                        </li>
                        <li>
                          <strong>Real-time Updates:</strong> Drivers receive
                          immediate notifications about route changes, delivery
                          updates, and new assignments without needing to
                          contact dispatch.
                        </li>
                        <li>
                          <strong>Secure Login:</strong> Drivers are only able
                          to view jobs that are assigned to them.
                        </li>
                        <li>
                          <strong>Intuitive Interface:</strong> Designed for
                          minimal distraction with large buttons, clear visuals,
                          and voice feedback to maintain driver safety.
                        </li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>

          {/* Business Challenge section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Business Challenge & Solution
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                The company faced significant operational challenges with their
                paper-based system. Their drivers needed to collect customer
                signatures on physical delivery notes, and office staff had
                limited visibility of delivery status and driver locations. The
                process was time-consuming, prone to errors, and created delays
                in reporting.
              </p>
              <p className="mb-4">
                The Logistics Management System is able to transform operations by:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>
                  Digitalizing the entire delivery workflow from job assignment
                  to proof of delivery
                </li>
                <li>
                  Implementing real-time tracking and updates visible to both
                  drivers and office staff
                </li>
                <li>
                  Creating a secure digital signature system for proof of
                  delivery/collection
                </li>
                <li>
                  Establishing instant communication between office and field
                  personnel
                </li>
                <li>
                  Providing comprehensive reporting and analytics for management
                  oversight
                </li>
              </ul>
            </div>
          </div>

          {/* Key Technical Achievements section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Key Technical Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Real-Time Synchronization
                  </h3>
                  <p className="text-default-700">
                    The system features effective real-time data synchronization
                    between the mobile and web applications. When office staff
                    assign or modify a job, the information appears on the
                    driver&apos;s mobile device without requiring manual
                    refreshes. Similarly, as drivers update job statuses or
                    collect signatures, the information is immediately visible
                    on the administrative dashboard.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Push Notification System
                  </h3>
                  <p className="text-default-700">
                    Drivers receive immediate push notifications when new jobs
                    are assigned, even when their phones are in standby mode.
                    This ensures critical information is never missed and allows
                    for dynamic rerouting and job assignment throughout the day.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Digital Signature Capture
                  </h3>
                  <p className="text-default-700">
                    Implemented a secure signature capture system using
                    Syncfusion&apos;s signature pad, allowing directly on the
                    driver&apos;s mobile device. Signatures are uploaded to the
                    secure database and visible on the administrative dashboard
                    as proof of delivery.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Offline Capability
                  </h3>
                  <p className="text-default-700">
                    Recognizing that drivers often work in areas with limited
                    connectivity, the system includes offline functionality that
                    stores data locally and synchronizes when connectivity is
                    restored.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Impact & Results section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Impact & Results
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                The system is currently in field testing but has already
                demonstrated:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Significant reduction in paperwork processing time</li>
                <li>Improved accuracy in delivery recording and reporting</li>
                <li>Enhanced visibility of operations for management</li>
                <li>Increased driver efficiency through better job routing</li>
                <li>Secure digital record-keeping for deliveries</li>
              </ul>
            </div>
          </div>

          {/* Next Steps section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Next Steps</h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                Following successful field testing, the system will be rolled
                out to additional branches. Future planned enhancements include:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Advanced analytics dashboard</li>
                <li>Route optimization features</li>
                <li>Integration with inventory management systems</li>
                <li>Enhanced geolocation capabilities</li>
              </ul>
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
