// src/pages/workflow-manager.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { WorkflowManagerShowcase } from "@/components/projects/WorkflowManagerShowcase";

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
              Workflow Manager System
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Chip color="primary" variant="flat">
                Full Stack
              </Chip>
              <Chip color="primary" variant="flat">
                Business Tool
              </Chip>
              <Chip color="primary" variant="flat">
                Docker
              </Chip>
              <Chip color="primary" variant="flat">
                Process Automation
              </Chip>
            </div>
          </div>

          {/* App Showcase Section */}
          <WorkflowManagerShowcase />

          {/* Overview section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
              <div className="prose max-w-none text-default-700">
                <p className="mb-4">
                  This comprehensive business management system was developed to
                  address a specific pain point in my printing business
                  operations - the time-intensive process of creating quotes. By
                  automating dimension calculations, material cost estimation,
                  and layout optimization, I can now create accurate quotes in
                  minutes rather than hours.
                </p>
                <p className="mb-4">
                  What began as a quoting tool has evolved into a more
                  comprehensive solution that streamlines multiple aspects of
                  print production management. The system combines a
                  React/TypeScript frontend with a Django/Python backend, all
                  containerized with Docker for consistent deployment across
                  environments.
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
                      Docker
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
                    Development Period
                  </h3>
                  <p>3 months (Ongoing Improvements)</p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    My Role
                  </h3>
                  <p>Full Stack Developer & Business Analyst</p>
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
                This application leverages a modern tech stack designed for
                performance, maintainability, and consistent deployment:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Frontend Architecture
                  </h3>
                  <p className="text-default-700 mb-4">
                    Built with React and TypeScript, the frontend follows a
                    component-based architecture with clean separation of
                    concerns. Tailwind CSS provides responsive styling while
                    custom hooks manage complex business logic.
                  </p>
                  <p className="text-default-700">
                    State management is implemented using React&apos;s built-in
                    useState and useEffect hooks, with service modules handling
                    API communication through Axios. The UI emphasizes workflow
                    efficiency with a clean, functional design.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Backend Architecture
                  </h3>
                  <p className="text-default-700 mb-4">
                    Powered by Django and Django REST Framework, the backend
                    provides robust API endpoints for materials, quotes, and PDF
                    processing. Python&apos;s PyPDF2 and Tesseract OCR handle
                    document analysis and text extraction.
                  </p>
                  <p className="text-default-700">
                    The application follows Django&apos;s app-based structure
                    with separate modules for different business domains. SQLite
                    provides data persistence appropriate for the internal
                    tool&apos;s scale and usage patterns.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Docker Containerization
                  </h3>
                  <p className="text-default-700">
                    The entire application is containerized using Docker and
                    Docker Compose, ensuring consistent behavior across
                    development and production environments. This approach
                    resolved cross-architecture compatibility challenges,
                    particularly between Apple Silicon and x86 systems.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Development Workflow
                  </h3>
                  <p className="text-default-700">
                    The development process follows an agile-inspired approach
                    with iterative improvements based on real business needs.
                    Git version control with a trunk-based development approach
                    maintains code quality, while Docker volumes optimize the
                    development experience.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    PDF Upload & Analysis
                  </h3>
                  <p className="text-default-700">
                    Clients often provide artwork as PDFs without clear
                    dimensions. The system automatically extracts these
                    dimensions using PyPDF2, eliminating the need for manual
                    measurements and reducing human error. A robust PDF
                    processing pipeline includes fallback options for
                    consistency.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Material Management
                  </h3>
                  <p className="text-default-700">
                    Comprehensive material management tracks inventory, costs,
                    and specifications for various printing materials. This
                    creates a centralized repository that ensures quotes use
                    up-to-date pricing and availability information.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Layout Visualization & Optimization
                  </h3>
                  <p className="text-default-700">
                    One of the most innovative features is the interactive
                    layout visualization tool. It provides a visual
                    representation of how labels would be arranged on material
                    and calculates efficiency metrics in real-time. The custom
                    optimization algorithm considers rotation, spacing, and
                    material utilization to minimize waste.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Quote Generation
                  </h3>
                  <p className="text-default-700">
                    The system automatically calculates accurate quotes based on
                    material costs, dimensions, labor estimates, and desired
                    profit margins. This ensures consistent pricing while
                    accommodating project-specific requirements and client
                    considerations.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Business Dashboard
                  </h3>
                  <p className="text-default-700">
                    A comprehensive dashboard provides at-a-glance information
                    about recent quotes, material inventory status, and business
                    performance metrics. This enables quick decision-making and
                    highlights areas that need attention.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    API-Driven Architecture
                  </h3>
                  <p className="text-default-700">
                    The application&apos;s API-driven design separates concerns
                    between frontend and backend, enabling future integrations
                    with other business systems. This architecture supports the
                    system&apos;s evolution into a more comprehensive business
                    management platform.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Technical Challenges section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Technical Challenges Overcome
            </h2>
            <div className="prose max-w-none text-default-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-default-50">
                  <CardBody>
                    <h3 className="text-lg font-heading font-bold mb-3">
                      Cross-Architecture Docker Compatibility
                    </h3>
                    <p className="text-default-700">
                      One of the most significant challenges was ensuring
                      consistent Docker operation across different CPU
                      architectures, particularly between Apple Silicon and x86
                      systems. After several iterations, I resolved these issues
                      by using specific Node.js container versions, configuring
                      environment variables to bypass architecture-specific
                      dependencies, and creating a custom Docker configuration
                      with appropriate volume mounts.
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-default-50">
                  <CardBody>
                    <h3 className="text-lg font-heading font-bold mb-3">
                      PDF Dimension Extraction Accuracy
                    </h3>
                    <p className="text-default-700">
                      Ensuring consistent dimension extraction from various PDF
                      formats presented significant challenges. Client files
                      often came in diverse formats with inconsistent metadata.
                      I developed a robust processing pipeline with multiple
                      extraction methods and fallback options to handle edge
                      cases and maintain accuracy regardless of the source
                      file&apos;s quality or structure.
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-default-50">
                  <CardBody>
                    <h3 className="text-lg font-heading font-bold mb-3">
                      Layout Optimization Algorithm
                    </h3>
                    <p className="text-default-700">
                      Developing an algorithm that could efficiently calculate
                      the optimal arrangement of labels on material required
                      careful consideration of mathematical constraints and
                      performance optimization. The solution balances
                      calculation speed with layout efficiency, providing
                      real-time updates as parameters change while maximizing
                      material utilization.
                    </p>
                  </CardBody>
                </Card>

                <Card className="bg-default-50">
                  <CardBody>
                    <h3 className="text-lg font-heading font-bold mb-3">
                      Canvas-Based Visualization
                    </h3>
                    <p className="text-default-700">
                      The interactive layout visualization component initially
                      faced performance issues with larger label arrangements.
                      Through careful optimization of the rendering logic,
                      including use of React&apos;s useMemo hook to prevent
                      unnecessary recalculations, the visualization now
                      maintains responsiveness even with complex layouts.
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>

          {/* Business Impact section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Business Impact & Results
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                This application has transformed our business operations with
                measurable improvements:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Time efficiency:</strong> Quote creation time reduced
                  from 30+ minutes to less than 5 minutes per quote
                </li>
                <li>
                  <strong>Accuracy improvement:</strong> Elimination of manual
                  calculation errors has improved quote precision
                </li>
                <li>
                  <strong>Material optimization:</strong> Layout visualization
                  has reduced material waste by identifying efficient
                  arrangements
                </li>
                <li>
                  <strong>Process standardization:</strong> Consistent quoting
                  approach across all team members
                </li>
                <li>
                  <strong>Business intelligence:</strong> Better visibility into
                  quote histories and conversion rates
                </li>
              </ul>
              <p className="mb-4">
                The system has become an essential part of our daily operations,
                enabling faster response to customer inquiries and more
                competitive pricing strategies.
              </p>
            </div>
          </div>

          {/* Future Development section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Future Development Plans
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                The system will continue to evolve with several planned
                enhancements:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Stock items management and inventory tracking</li>
                <li>
                  Customer information database with relationship management
                </li>
                <li>Purchase order creation and tracking</li>
                <li>Order analytics dashboard with profitability metrics</li>
                <li>Delivery note generation and shipping integration</li>
                <li>User authentication with role-based permissions</li>
                <li>Migration to PostgreSQL for improved data integrity</li>
                <li>Comprehensive test coverage implementation</li>
              </ul>
              <p className="mb-4">
                These enhancements will transform the current quoting system
                into a comprehensive business management platform tailored to
                the specific needs of our printing operations.
              </p>
            </div>
          </div>

          {/* Learning & Growth Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Key Learnings & Technical Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Technical Skills Gained
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Docker containerization and multi-container architecture
                    </li>
                    <li>Cross-platform compatibility troubleshooting</li>
                    <li>Advanced React patterns with TypeScript</li>
                    <li>Django REST Framework implementation</li>
                    <li>Canvas-based visualization programming</li>
                    <li>PDF processing and analysis techniques</li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Development Approach Insights
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The importance of early cross-platform testing</li>
                    <li>
                      The value of containerization for consistent environments
                    </li>
                    <li>
                      The balance between custom solutions and existing
                      libraries
                    </li>
                    <li>The critical role of comprehensive error handling</li>
                    <li>
                      The effectiveness of business-focused technology decisions
                    </li>
                  </ul>
                </CardBody>
              </Card>
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
