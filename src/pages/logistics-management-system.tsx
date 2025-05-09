// src/pages/logistics-management-system.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

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
                  <p>2025 (Ongoing Development)</p>
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

          {/* Business Challenge section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Business Challenge & Solution
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                The logistics company faced significant operational challenges
                with their paper-based system. Their drivers needed to collect
                customer signatures on physical delivery notes, and office staff
                had limited visibility of delivery status and driver locations.
                The process was time-consuming, prone to errors, and created
                delays in reporting.
              </p>
              <p className="mb-4">
                The Logistics Management System transformed their operations by:
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
