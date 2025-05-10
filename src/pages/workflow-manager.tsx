// src/pages/workflow-manager.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

export default function WorkflowManagerProjectPage() {
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
              Workflow Manager
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Chip color="primary" variant="flat">
                Full Stack
              </Chip>
              <Chip color="primary" variant="flat">
                Business Tool
              </Chip>
              <Chip color="primary" variant="flat">
                React
              </Chip>
              <Chip color="primary" variant="flat">
                Django
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
                  Workflow Manager is a comprehensive business management tool I
                  developed to streamline operations within my printing
                  business. This full-stack application combines a React
                  frontend with a Django backend to automate complex printing
                  calculations, optimize material usage, and generate accurate
                  quotes—transforming a previously time-consuming manual process
                  into an efficient digital workflow.
                </p>
                <p className="mb-4">
                  Unlike generic business software, this custom solution was
                  designed specifically for the unique challenges of print
                  production management, with particular focus on material
                  optimization and accurate pricing calculations based on
                  precise measurements and material selection.
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
                      React
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      TypeScript
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Django
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Python
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      HeroUI
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Tailwind CSS
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      PyPDF2
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

          {/* Technical Stack section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Technical Stack & Architecture
            </h2>
            <div className="prose max-w-none text-default-700 mb-6">
              <p>
                The application leverages modern web technologies to create a
                powerful yet user-friendly tool:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Frontend
                  </h3>
                  <p className="text-default-700">
                    Built with React and TypeScript for a responsive, type-safe
                    interface using the HeroUI component library and Tailwind
                    CSS for styling. This combination provides a clean,
                    professional interface that maintains consistency with my
                    other development work while offering an intuitive user
                    experience.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Backend
                  </h3>
                  <p className="text-default-700">
                    Powered by Django and Python, featuring robust PDF
                    processing capabilities using PyPDF2 for automatic dimension
                    extraction. The backend provides RESTful API endpoints for
                    materials, quotes, and PDF analysis, with SQLite database
                    storage suitable for internal business use.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Key Features section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    PDF Upload & Analysis
                  </h3>
                  <p className="text-default-700">
                    Users can upload PDF artwork, and the system automatically
                    extracts dimensions using PyPDF2, eliminating the need for
                    manual measurements and reducing human error.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Material Management
                  </h3>
                  <p className="text-default-700">
                    Comprehensive system for managing printing materials,
                    including vinyl, laminates, and other production materials
                    with their associated costs, specifications, and inventory
                    levels.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Layout Visualization & Optimization
                  </h3>
                  <p className="text-default-700">
                    An interactive visualization tool that calculates optimal
                    arrangement of labels or items on materials, maximizing
                    efficiency and minimizing waste. This feature alone has
                    saved tremendous time compared to previous manual
                    calculations.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Quote Generation
                  </h3>
                  <p className="text-default-700">
                    Automated calculation of accurate quotes based on extracted
                    dimensions, selected materials, and desired profit margins,
                    ensuring consistent and profitable pricing.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Business Dashboard
                  </h3>
                  <p className="text-default-700">
                    Provides at-a-glance information about recent quotes,
                    material inventory status, and business performance metrics
                    for quick decision-making.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Development Challenges section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Development Challenges
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                The most significant technical challenge has been implementing
                OCR functionality to automatically process customer purchase
                orders. Since customers provide scanned PDFs of varying quality,
                creating a robust solution that can accurately extract
                information from these documents has proven difficult. I&apos;m
                currently working on refining the OCR implementation to handle
                low-quality scans more effectively.
              </p>
              <p className="mb-4">
                Another challenge was designing the layout optimization
                algorithm to efficiently calculate how many items can fit within
                a given space while accounting for various constraints like
                bleed areas and cutting margins. Solving this problem
                dramatically reduced the time spent on manual calculations.
              </p>
            </div>
          </div>

          {/* Impact & Results section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Impact & Results
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                This application has transformed my business operations by:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>
                  Eliminating time-consuming manual calculations for material
                  usage
                </li>
                <li>
                  Standardizing the quoting process for consistency and accuracy
                </li>
                <li>
                  Reducing human error in dimension measurements and price
                  calculations
                </li>
                <li>
                  Creating a centralized system for managing materials and
                  quotes
                </li>
                <li>
                  Providing data-driven insights into business performance
                </li>
              </ul>
            </div>
          </div>

          {/* Ongoing Development section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Ongoing Development
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                The system is currently in active use while continuing to
                evolve. Future enhancements include:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Improved OCR processing for customer purchase orders</li>
                <li>Stock items management and inventory tracking</li>
                <li>Customer information management</li>
                <li>Purchase order creation and tracking</li>
                <li>Delivery note generation</li>
                <li>Enhanced analytics and reporting capabilities</li>
              </ul>
              <p className="mb-4">
                This project demonstrates my ability to identify operational
                inefficiencies and develop comprehensive full-stack solutions
                that address real business needs, combining frontend and backend
                technologies to create practical, value-adding tools.
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
