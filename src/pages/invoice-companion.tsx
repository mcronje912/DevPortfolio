// src/pages/invoice-companion.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import { title } from "../components/primitives";
import DefaultLayout from "../layouts/default";

import { InvoiceShowcase } from "@/components/projects/InvoiceShowcase";
import { GlassCard } from "@/components/GlassCard";

export default function InvoiceCompanionProjectPage() {
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
              Invoicing Application
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Chip color="primary" variant="flat">
                Mobile App
              </Chip>
              <Chip color="primary" variant="flat">
                Flutter
              </Chip>
              <Chip color="primary" variant="flat">
                Cross-Platform
              </Chip>
              <Chip color="primary" variant="flat">
                Business Tool
              </Chip>
            </div>
          </div>

          {/* Mobile App Showcase */}
          <InvoiceShowcase />

          {/* Overview section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
              <div className="prose max-w-none text-default-700">
                <p className="mb-4">
                  InvoiceCompanion is a comprehensive invoicing solution I
                  developed to address my own business needs. Rather than
                  settling for existing apps that didn&apos;t quite fit my
                  workflow, I created a custom solution that perfectly aligns
                  with my requirements while showcasing my cross-platform mobile
                  development skills.
                </p>
                <p className="mb-4">
                  Built with Flutter, this app provides a complete invoicing
                  system including customer management, product/service
                  catalogs, quote and invoice creation, PDF generation, and data
                  analytics—all with a clean, intuitive interface that works
                  seamlessly across multiple devices and platforms.
                </p>
                <p className="mb-4">
                  While primarily developed for personal use, the app has been
                  designed with commercial potential in mind, incorporating a
                  subscription model and premium features that could be marketed
                  to other small business owners and freelancers.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Chip color="secondary" variant="flat">
                      Flutter
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Dart
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      SQLite
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Provider
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      RevenueCat
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      PDF Generation
                    </Chip>
                  </div>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Completed
                  </h3>
                  <p>2024 (Ongoing Development)</p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    My Role
                  </h3>
                  <p>Mobile App Developer</p>
                </CardBody>
              </GlassCard>
            </div>
          </div>

          {/* Technical Stack section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Technical Stack & Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Cross-Platform Development
                  </h3>
                  <p className="text-default-700">
                    Built with Flutter and Dart, enabling a single codebase that
                    runs natively on iOS, Android, and potentially Windows. This
                    approach maximizes development efficiency while maintaining
                    platform-specific performance and user experience.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Local Database
                  </h3>
                  <p className="text-default-700">
                    Uses SQLite via the sqflite package for efficient local data
                    storage. This provides robust data persistence, complex
                    queries, and transaction support while maintaining complete
                    offline functionality—essential for a business tool.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    State Management
                  </h3>
                  <p className="text-default-700">
                    Implements the Provider pattern for clean, efficient state
                    management throughout the app. Each feature has dedicated
                    providers (InvoiceProvider, CustomerProvider, etc.), making
                    the codebase maintainable and testable.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Subscription Integration
                  </h3>
                  <p className="text-default-700">
                    Integrated with RevenueCat for subscription management,
                    enabling premium features and potential monetization. This
                    implementation allows for flexible pricing models like free
                    usage up to a certain number of invoices with paid tiers
                    beyond that limit.
                  </p>
                </CardBody>
              </GlassCard>
            </div>
          </div>

          {/* Key Features section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Customer Management
                  </h3>
                  <p className="text-default-700">
                    Comprehensive client database with contact information,
                    transaction history, and customizable fields. Easily add,
                    edit, and organize customer records for quick access during
                    invoicing.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Product/Service Catalog
                  </h3>
                  <p className="text-default-700">
                    Maintain a database of products and services with pricing
                    information, descriptions, and categories. This streamlines
                    the creation of quotes and invoices with consistent pricing
                    and formatting.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Quote & Invoice Generation
                  </h3>
                  <p className="text-default-700">
                    Create, edit, and manage professional quotes and invoices
                    with customizable templates. Seamlessly convert quotes to
                    invoices when projects are approved, maintaining a complete
                    paper trail of transactions.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    PDF Export
                  </h3>
                  <p className="text-default-700">
                    Generate professional PDF documents for quotes and invoices
                    using the syncfusion_flutter_pdf package. Custom templates
                    ensure consistent branding and professional presentation to
                    clients.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Data Import/Export
                  </h3>
                  <p className="text-default-700">
                    Comprehensive backup and restore functionality with CSV
                    import/export capabilities for customers, products, and
                    transaction records. This ensures data portability and
                    security.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Analytics & Reporting
                  </h3>
                  <p className="text-default-700">
                    Visualize business performance with charts and reports using
                    fl_chart for data visualization. Track income, outstanding
                    payments, and client activity to inform business decisions.
                  </p>
                </CardBody>
              </GlassCard>
            </div>
          </div>

          {/* Development Challenges section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Development Challenges
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                One of the most significant technical challenges was
                implementing the RevenueCat integration for subscription
                management, particularly in the iOS development environment.
                Setting up the sandbox testing environment in Xcode required
                navigating complex App Store Connect configurations and
                debugging silent failures in the subscription validation
                process.
              </p>
              <p className="mb-4">
                Creating a robust, error-free PDF generation system also
                presented challenges, especially ensuring consistent formatting
                across different devices and properly handling various edge
                cases like very long product descriptions or unusual character
                sets in client information.
              </p>
              <p className="mb-4">
                Designing the database schema required careful planning to
                ensure efficient queries while maintaining flexibility for
                future feature additions. This involved balancing normalization
                principles with practical performance considerations for a
                mobile application.
              </p>
            </div>
          </div>

          {/* Personal Impact section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Personal Impact
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                As a personal tool, InvoiceCompanion has significantly improved
                my business operations by providing:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>
                  A streamlined workflow for creating professional quotes and
                  invoices
                </li>
                <li>Better organization of customer and product information</li>
                <li>
                  Time savings through templates and quick-access features
                </li>
                <li>
                  Professional PDF documents that enhance my business image
                </li>
                <li>Valuable insights through the analytics features</li>
              </ul>
              <p className="mb-4">
                The process of creating this app also enhanced my development
                skills, particularly in Flutter application architecture,
                subscription integration, and cross-platform deployment
                considerations.
              </p>
            </div>
          </div>

          {/* Future Plans section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Future Plans
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                While InvoiceCompanion is already fully functional for my
                personal use, I have several enhancements planned:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>
                  App Store deployment for Android and potential Windows release
                </li>
                <li>Enhanced subscription model with tiered features</li>
                <li>Cloud backup integration for additional data security</li>
                <li>Receipt scanning and OCR for expense tracking</li>
                <li>
                  Integration with payment gateways for direct invoice payment
                </li>
                <li>Additional analytics and financial reporting features</li>
              </ul>
              <p className="mb-4">
                These improvements will not only enhance the functionality for
                my own use but also increase the app&apos;s commercial potential
                if I decide to release it to a wider audience.
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
