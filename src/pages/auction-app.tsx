// src/pages/auction-app.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { AuctionAppShowcase } from "@/components/projects/AuctionAppShowcase";
import { GlassCard } from "@/components/GlassCard";

export default function AuctionAppProjectPage() {
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
              Real-time Auction Platform
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Chip color="primary" variant="flat">
                Web App
              </Chip>
              <Chip color="primary" variant="flat">
                Next.js
              </Chip>
              <Chip color="primary" variant="flat">
                Real-time
              </Chip>
              <Chip color="primary" variant="flat">
                Full Stack
              </Chip>
            </div>
          </div>

          {/* App Showcase Section */}
          <AuctionAppShowcase />

          {/* Overview section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
              <div className="prose max-w-none text-default-700">
                <p className="mb-4">
                  This real-time auction platform is a full-stack web
                  application built with Next.js, React, and Supabase. It allows
                  users to create auction listings, browse items, place bids,
                  and track auctions in real-time. The platform demonstrates my
                  ability to implement complex features including real-time data
                  synchronization, user authentication, and responsive design
                  using modern web technologies.
                </p>
                <p className="mb-4">
                  A key technical achievement in this implementation was
                  successfully integrating Supabase&apos;s real-time
                  subscriptions for instant bid updates across all connected
                  clients. This creates an engaging auction experience similar
                  to in-person events, where all participants see bid changes
                  immediately.
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
                      Next.js 15
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      React 18
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      TypeScript
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Supabase
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Tailwind CSS
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      HeroUI
                    </Chip>
                  </div>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Status
                  </h3>
                  <p>In Development (2024)</p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    My Role
                  </h3>
                  <p>Full Stack Developer</p>
                </CardBody>
              </GlassCard>
            </div>
          </div>

          {/* Technical Stack section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Technical Stack & Architecture
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                This project utilizes a modern tech stack carefully selected to
                provide the best balance of developer experience, performance,
                and functionality:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Frontend
                  </h3>
                  <p className="text-default-700 mb-4">
                    Built with Next.js 15 using the app directory structure for
                    optimized routing and organization. React 18 with TypeScript
                    provides type safety and improved development experience,
                    while Tailwind CSS and HeroUI create a responsive, polished
                    user interface.
                  </p>
                  <p className="text-default-700">
                    State management is implemented using React Context API with
                    custom hooks for domain-specific state, providing a clean
                    and maintainable approach to state across the application.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Backend & Database
                  </h3>
                  <p className="text-default-700 mb-4">
                    Supabase powers the backend functionality, providing
                    PostgreSQL database services with real-time capabilities. I
                    specifically chose Supabase for its excellent developer
                    experience and integrated features:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Built-in authentication with secure session management
                    </li>
                    <li>Real-time subscriptions for live auction updates</li>
                    <li>Row-level security for data protection</li>
                    <li>
                      PostgreSQL database with SQL capabilities and REST API
                    </li>
                  </ul>
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
                    Real-time Bidding
                  </h3>
                  <p className="text-default-700">
                    The platform&apos;s core feature is its real-time bidding
                    system, using Supabase&apos;s real-time subscriptions to
                    ensure all users see current bid information instantly. This
                    creates an engaging auction experience similar to in-person
                    events.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Auction Management
                  </h3>
                  <p className="text-default-700">
                    Sellers can create detailed auction listings with images,
                    descriptions, starting prices, and end times. The system
                    handles scheduling, visibility rules, and auction close
                    procedures automatically.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    User Authentication
                  </h3>
                  <p className="text-default-700">
                    Secure authentication system with email/password login,
                    profile creation, and session management. The authentication
                    context makes user state available throughout the
                    application for personalized experiences.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Responsive Design
                  </h3>
                  <p className="text-default-700">
                    Built with a mobile-first approach using Tailwind CSS, the
                    application delivers a consistent experience across all
                    device sizes. The UI adapts fluidly from smartphones to
                    desktop screens.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Countdown Timers
                  </h3>
                  <p className="text-default-700">
                    Dynamic countdown timers show the remaining time for each
                    auction, creating urgency and engagement. The system handles
                    time-sensitive actions like auction closing automatically.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    User Profiles
                  </h3>
                  <p className="text-default-700">
                    Personalized user profiles track bidding history, won
                    auctions, and active listings. This creates a complete
                    ecosystem for both buyers and sellers to manage their
                    activities.
                  </p>
                </CardBody>
              </GlassCard>
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
