/* eslint-disable react/jsx-no-comment-textnodes */
// src/pages/etamax.tsx
import { useState } from "react";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { motion, AnimatePresence } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { EtamaxWebShowcase } from "@/components/projects/EtamaxWebShowcase";
import { EtamaxMobileShowcase } from "@/components/projects/EtamaxMobileShowcase";
import { GlassCard } from "@/components/GlassCard";

export default function EtamaxProjectPage() {
  // State for tracking which code examples are expanded
  const [expandedCode, setExpandedCode] = useState<{ [key: string]: boolean }>({
    bleService: false,
    dataValidation: false,
    errorLogging: false,
  });

  // Toggle function for expanding/collapsing code examples
  const toggleCodeExpand = (codeId: string) => {
    setExpandedCode((prev) => ({
      ...prev,
      [codeId]: !prev[codeId],
    }));
  };

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
              Etamax Solar Water Heating System
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
                  In South Africa, where energy costs continue to rise and load
                  shedding remains a persistent challenge, optimizing solar
                  water heating systems represents a significant opportunity for
                  energy conservation and cost savings. In partnership with
                  Maxlite, a leading distributor of energy-efficient solutions,
                  I developed the comprehensive Etamax system to address this
                  need.
                </p>
                <p className="mb-4">
                  The Etamax system is an intelligent solar water heater
                  management platform that transforms how homeowners utilize
                  solar energy. Through seamless integration between custom
                  hardware, a mobile application, and an administrative
                  dashboard, it provides unprecedented visibility and control
                  over solar water heating systems.
                </p>
                <p className="mb-4">
                  Data from our current deployments shows remarkable results,
                  with users achieving between 50-85% solar utilization for
                  their water heating needs, significantly reducing electricity
                  costs and grid dependence.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard intensity="heavy">
                {" "}
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
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Completed
                  </h3>
                  <p>2024</p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    My Role
                  </h3>
                  <p>Lead Full Stack Developer & IoT System Architect</p>
                </CardBody>
              </GlassCard>
            </div>
          </div>

          {/* Technical Architecture section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Technical Architecture
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                The Etamax solution consists of four key components working in
                harmony:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>
                  <strong>Hardware Controller</strong> - Designed by our
                  electrical engineering team and installed as part of the
                  customer&#39;s solar geyser setup
                </li>
                <li>
                  <strong>Mobile Application</strong> - Cross-platform Flutter
                  app for end-users to monitor and control their system
                </li>
                <li>
                  <strong>Cloud Infrastructure</strong> - Secure database and
                  API services for data synchronization and analytics
                </li>
                <li>
                  <strong>Administrative Dashboard</strong> - React-based web
                  application for system oversight and management
                </li>
              </ol>
              <p className="mb-4">
                The hardware controller continuously collects data on
                temperature, energy usage, and system status. This data flows
                securely to the mobile app via Bluetooth Low Energy (BLE), then
                synchronizes with the cloud database when connectivity is
                available, making it accessible through the administrative
                dashboard.
              </p>
              <div className="bg-default-100 dark:bg-rich-black-600 p-4 rounded-md mb-4 text-code font-mono text-sm">
                Hardware Device ↔ BLE Connection ↔ Mobile App ↔ Cloud
                Database ↔ Admin Dashboard
              </div>
            </div>
          </div>

          {/* Web Dashboard Showcase */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Administrative Dashboard
            </h2>
            <EtamaxWebShowcase />

            <div className="mt-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Dashboard Features
                  </h3>
                  <p className="text-default-700 mb-4">
                    The React-based administrative dashboard provides system
                    administrators with a comprehensive overview of all deployed
                    Etamax devices, with features including:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Usage analytics showing 50-85% solar utilization across
                      installations
                    </li>
                    <li>Real-time device status monitoring and management</li>
                    <li>
                      Interactive charts visualizing energy usage patterns
                    </li>
                    <li>
                      Filtering and search capabilities for device management
                    </li>
                    <li>
                      Performance comparison across different installations
                    </li>
                    <li>Alert systems for potential device issues</li>
                  </ul>
                </CardBody>
              </GlassCard>
            </div>
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
              <GlassCard intensity="heavy">
                  <CardBody>
                    <h3 className="text-xl font-heading font-bold mb-4">
                      Mobile App Features
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
                  </CardBody>
                </GlassCard>
              </div>
            </div>
          </div>

          {/* Technical Challenges section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Technical Challenges Overcome
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Cross-Platform Reliability
                  </h3>
                  <p className="text-default-700">
                    Ensuring consistent BLE connectivity across both iOS and
                    Android platforms presented significant challenges. I
                    developed a platform-specific adaptation layer that
                    addresses the unique Bluetooth implementation differences
                    between operating systems, ensuring reliable communication
                    on all devices.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Robust BLE Communication
                  </h3>
                  <p className="text-default-700">
                    I implemented a sophisticated communication protocol that
                    ensures consistent connectivity with the hardware device,
                    even in challenging conditions, including command queuing,
                    retry logic, and comprehensive error handling.
                  </p>

                  {/* Collapsible Code Example */}
                  <div className="mt-4">
                    <button
                      className="flex items-center justify-between w-full bg-default-200 dark:bg-rich-black-500 p-2 rounded-t-md hover:bg-default-300 dark:hover:bg-rich-black-400 transition-colors"
                      onClick={() => toggleCodeExpand("bleService")}
                    >
                      <span className="font-medium text-sm">
                        Code Example: BLE Service Implementation
                      </span>
                      <span
                        className="transform transition-transform duration-200"
                        style={{
                          transform: expandedCode.bleService
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      >
                        ▼
                      </span>
                    </button>

                    <AnimatePresence>
                      {expandedCode.bleService && (
                        <motion.div
                          animate={{ height: "auto", opacity: 1 }}
                          className="overflow-hidden"
                          exit={{ height: 0, opacity: 0 }}
                          initial={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-default-100 dark:bg-rich-black-600 p-4 border border-default-200 dark:border-rich-black-400 border-t-0 rounded-b-md overflow-auto text-sm font-mono">
                            <pre className="whitespace-pre-wrap">
                              <code className="language-dart text-xs">
                                <span className="text-blue-600 dark:text-blue-400">
                                  class
                                </span>{" "}
                                <span className="text-green-600 dark:text-green-400">
                                  BleService
                                </span>{" "}
                                {`{`}
                                <br />
                                <span className="pl-4 text-green-600 dark:text-green-400">
                                  // Command queue to manage message order and
                                  prevent data collisions
                                </span>
                                <br />
                                <span className="pl-4 text-blue-600 dark:text-blue-400">
                                  final
                                </span>{" "}
                                Queue&lt;Map&lt;
                                <span className="text-orange-600 dark:text-orange-400">
                                  String
                                </span>
                                , dynamic&gt;&gt; _commandQueue =
                                Queue&lt;Map&lt;
                                <span className="text-orange-600 dark:text-orange-400">
                                  String
                                </span>
                                , dynamic&gt;&gt;();
                                <br />
                                <br />
                                <span className="pl-4 text-green-600 dark:text-green-400">
                                  // Retry and reconnection logic
                                </span>
                                <br />
                                <span className="pl-4 text-blue-600 dark:text-blue-400">
                                  Future
                                </span>
                                &lt;
                                <span className="text-orange-600 dark:text-orange-400">
                                  bool
                                </span>
                                &gt;{" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  connectToDevice
                                </span>
                                (BluetoothDevice device){" "}
                                <span className="text-blue-600 dark:text-blue-400">
                                  async
                                </span>{" "}
                                {`{`}
                                <br />
                                <span className="pl-8 text-blue-600 dark:text-blue-400">
                                  try
                                </span>{" "}
                                {`{`}
                                <br />
                                <span className="pl-12 text-green-600 dark:text-green-400">
                                  // Connection attempt with exponential backoff
                                </span>
                                <br />
                                <span className="pl-12 text-blue-600 dark:text-blue-400">
                                  for
                                </span>{" "}
                                (
                                <span className="text-blue-600 dark:text-blue-400">
                                  int
                                </span>{" "}
                                attempt = 0; attempt &lt; maxAttempts;
                                attempt++) {`{`}
                                <br />
                                <span className="pl-16 text-blue-600 dark:text-blue-400">
                                  await
                                </span>{" "}
                                device.
                                <span className="text-purple-600 dark:text-purple-400">
                                  connect
                                </span>
                                (timeout: Duration(seconds: 5 * (attempt + 1)));
                                <br />
                                <span className="pl-16 text-blue-600 dark:text-blue-400">
                                  if
                                </span>{" "}
                                (
                                <span className="text-blue-600 dark:text-blue-400">
                                  await
                                </span>{" "}
                                _verifyConnection()) {`{`}
                                <br />
                                <span className="pl-20 text-blue-600 dark:text-blue-400">
                                  await
                                </span>{" "}
                                _setupListeners();
                                <br />
                                <span className="pl-20 text-blue-600 dark:text-blue-400">
                                  return
                                </span>{" "}
                                <span className="text-orange-600 dark:text-orange-400">
                                  true
                                </span>
                                ;<br />
                                <span className="pl-16">{`}`}</span>
                                <br />
                                <span className="pl-16 text-blue-600 dark:text-blue-400">
                                  await
                                </span>{" "}
                                Future.delayed(Duration(seconds: attempt + 1));
                                <br />
                                <span className="pl-12">{`}`}</span>
                                <br />
                                <span className="pl-12 text-blue-600 dark:text-blue-400">
                                  return
                                </span>{" "}
                                <span className="text-orange-600 dark:text-orange-400">
                                  false
                                </span>
                                ;<br />
                                <span className="pl-8">{`}`}</span>{" "}
                                <span className="text-blue-600 dark:text-blue-400">
                                  catch
                                </span>{" "}
                                (e) {`{`}
                                <br />
                                <span className="pl-12">
                                  _handleErrorWithRecovery(e);
                                </span>
                                <br />
                                <span className="pl-12 text-blue-600 dark:text-blue-400">
                                  return
                                </span>{" "}
                                <span className="text-orange-600 dark:text-orange-400">
                                  false
                                </span>
                                ;<br />
                                <span className="pl-8">{`}`}</span>
                                <br />
                                <span className="pl-4">{`}`}</span>
                                <br />
                                <br />
                                <span className="pl-4 text-green-600 dark:text-green-400">
                                  // Data validation to ensure integrity
                                </span>
                                <br />
                                <span className="pl-4 text-blue-600 dark:text-blue-400">
                                  bool
                                </span>{" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  _validateDataPacket
                                </span>
                                (List&lt;
                                <span className="text-blue-600 dark:text-blue-400">
                                  int
                                </span>
                                &gt; data) {`{`}
                                <br />
                                <span className="pl-8 text-green-600 dark:text-green-400">
                                  // Implement checksum and structure validation
                                </span>
                                <br />
                                <span className="pl-8 text-green-600 dark:text-green-400">
                                  // to verify data integrity and prevent
                                  corrupted commands
                                </span>
                                <br />
                                <span className="pl-4">{`}`}</span>
                                <br />
                                {`}`}
                              </code>
                            </pre>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Data Integrity and Validation
                  </h3>
                  <p className="text-default-700">
                    To prevent data corruption during wireless transmission, I
                    implemented a sophisticated validation system that verifies
                    data structure, checksums, and business rules before
                    processing.
                  </p>

                  {/* Collapsible Code Example */}
                  <div className="mt-4">
                    <button
                      className="flex items-center justify-between w-full bg-default-200 dark:bg-rich-black-500 p-2 rounded-t-md hover:bg-default-300 dark:hover:bg-rich-black-400 transition-colors"
                      onClick={() => toggleCodeExpand("dataValidation")}
                    >
                      <span className="font-medium text-sm">
                        Code Example: Data Validation
                      </span>
                      <span
                        className="transform transition-transform duration-200"
                        style={{
                          transform: expandedCode.dataValidation
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      >
                        ▼
                      </span>
                    </button>

                    <AnimatePresence>
                      {expandedCode.dataValidation && (
                        <motion.div
                          animate={{ height: "auto", opacity: 1 }}
                          className="overflow-hidden"
                          exit={{ height: 0, opacity: 0 }}
                          initial={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-default-100 dark:bg-rich-black-600 p-4 border border-default-200 dark:border-rich-black-400 border-t-0 rounded-b-md overflow-auto text-sm font-mono">
                            <pre className="whitespace-pre-wrap">
                              <code className="language-typescript text-xs">
                                <span className="text-blue-600 dark:text-blue-400">
                                  function
                                </span>{" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  validateDeviceData
                                </span>
                                (
                                <span className="text-orange-600 dark:text-orange-400">
                                  rawData
                                </span>
                                :{" "}
                                <span className="text-blue-600 dark:text-blue-400">
                                  string
                                </span>
                                ):{" "}
                                <span className="text-blue-600 dark:text-blue-400">
                                  boolean
                                </span>{" "}
                                {`{`}
                                <br />
                                <span className="pl-4 text-blue-600 dark:text-blue-400">
                                  try
                                </span>{" "}
                                {`{`}
                                <br />
                                <span className="pl-8 text-green-600 dark:text-green-400">
                                  // Extract key components from the data packet
                                </span>
                                <br />
                                <span className="pl-8 text-blue-600 dark:text-blue-400">
                                  const
                                </span>{" "}
                                {`{ header, payload, checksum }`} ={" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  parsePacket
                                </span>
                                (rawData);
                                <br />
                                <br />
                                <span className="pl-8 text-green-600 dark:text-green-400">
                                  // Verify data structure integrity
                                </span>
                                <br />
                                <span className="pl-8 text-blue-600 dark:text-blue-400">
                                  if
                                </span>{" "}
                                (!
                                <span className="text-purple-600 dark:text-purple-400">
                                  isValidStructure
                                </span>
                                (header, payload)) {`{`}
                                <br />
                                <span className="pl-12 text-purple-600 dark:text-purple-400">
                                  logValidationFailure
                                </span>
                                (
                                <span className="text-orange-600 dark:text-orange-400">
                                  &apos;Invalid structure&apos;
                                </span>
                                , rawData);
                                <br />
                                <span className="pl-12 text-blue-600 dark:text-blue-400">
                                  return
                                </span>{" "}
                                <span className="text-orange-600 dark:text-orange-400">
                                  false
                                </span>
                                ;<br />
                                <span className="pl-8">{`}`}</span>
                                <br />
                                <br />
                                <span className="pl-8 text-green-600 dark:text-green-400">
                                  // Calculate and verify checksum
                                </span>
                                <br />
                                <span className="pl-8 text-blue-600 dark:text-blue-400">
                                  const
                                </span>{" "}
                                calculatedChecksum ={" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  generateChecksum
                                </span>
                                (payload);
                                <br />
                                <span className="pl-8 text-blue-600 dark:text-blue-400">
                                  if
                                </span>{" "}
                                (calculatedChecksum !== checksum) {`{`}
                                <br />
                                <span className="pl-12 text-purple-600 dark:text-purple-400">
                                  logValidationFailure
                                </span>
                                (
                                <span className="text-orange-600 dark:text-orange-400">
                                  &apos;Checksum mismatch&apos;
                                </span>
                                , rawData);
                                <br />
                                <span className="pl-12 text-blue-600 dark:text-blue-400">
                                  return
                                </span>{" "}
                                <span className="text-orange-600 dark:text-orange-400">
                                  false
                                </span>
                                ;<br />
                                <span className="pl-8">{`}`}</span>
                                <br />
                                <br />
                                <span className="pl-8 text-green-600 dark:text-green-400">
                                  // Additional validation rules
                                </span>
                                <br />
                                <span className="pl-8 text-blue-600 dark:text-blue-400">
                                  return
                                </span>{" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  runBusinessRuleValidation
                                </span>
                                (payload);
                                <br />
                                <span className="pl-4">{`}`}</span>{" "}
                                <span className="text-blue-600 dark:text-blue-400">
                                  catch
                                </span>{" "}
                                (error) {`{`}
                                <br />
                                <span className="pl-8 text-green-600 dark:text-green-400">
                                  // Comprehensive error logging for
                                  troubleshooting
                                </span>
                                <br />
                                <span className="pl-8 text-purple-600 dark:text-purple-400">
                                  logValidationFailure
                                </span>
                                (
                                <span className="text-orange-600 dark:text-orange-400">
                                  &apos;Exception during validation&apos;
                                </span>
                                , error);
                                <br />
                                <span className="pl-8 text-blue-600 dark:text-blue-400">
                                  return
                                </span>{" "}
                                <span className="text-orange-600 dark:text-orange-400">
                                  false
                                </span>
                                ;<br />
                                <span className="pl-4">{`}`}</span>
                                <br />
                                {`}`}
                              </code>
                            </pre>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Error Logging System
                  </h3>
                  <p className="text-default-700">
                    Comprehensive error logging was implemented throughout the
                    application to facilitate troubleshooting and improve
                    reliability during development and deployment.
                  </p>

                  {/* Collapsible Code Example */}
                  <div className="mt-4">
                    <button
                      className="flex items-center justify-between w-full bg-default-200 dark:bg-rich-black-500 p-2 rounded-t-md hover:bg-default-300 dark:hover:bg-rich-black-400 transition-colors"
                      onClick={() => toggleCodeExpand("errorLogging")}
                    >
                      <span className="font-medium text-sm">
                        Code Example: Error Logging
                      </span>
                      <span
                        className="transform transition-transform duration-200"
                        style={{
                          transform: expandedCode.errorLogging
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      >
                        ▼
                      </span>
                    </button>

                    <AnimatePresence>
                      {expandedCode.errorLogging && (
                        <motion.div
                          animate={{ height: "auto", opacity: 1 }}
                          className="overflow-hidden"
                          exit={{ height: 0, opacity: 0 }}
                          initial={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-default-100 dark:bg-rich-black-600 p-4 border border-default-200 dark:border-rich-black-400 border-t-0 rounded-b-md overflow-auto text-sm font-mono">
                            <pre className="whitespace-pre-wrap">
                              <code className="language-dart text-xs">
                                <span className="text-green-600 dark:text-green-400">
                                  // Error logging implementation
                                </span>
                                <br />
                                <span className="text-blue-600 dark:text-blue-400">
                                  class
                                </span>{" "}
                                <span className="text-green-600 dark:text-green-400">
                                  AppLogger
                                </span>{" "}
                                {`{`}
                                <br />
                                <span className="pl-4 text-blue-600 dark:text-blue-400">
                                  static final
                                </span>{" "}
                                Logger _logger = Logger(
                                <br />
                                <span className="pl-8">
                                  printer: PrettyPrinter(
                                </span>
                                <br />
                                <span className="pl-12">methodCount: 0,</span>
                                <br />
                                <span className="pl-12">
                                  errorMethodCount: 5,
                                </span>
                                <br />
                                <span className="pl-12">lineLength: 80,</span>
                                <br />
                                <span className="pl-12">
                                  colors:{" "}
                                  <span className="text-orange-600 dark:text-orange-400">
                                    true
                                  </span>
                                  ,
                                </span>
                                <br />
                                <span className="pl-12">
                                  printEmojis:{" "}
                                  <span className="text-orange-600 dark:text-orange-400">
                                    true
                                  </span>
                                  ,
                                </span>
                                <br />
                                <span className="pl-12">
                                  printTime:{" "}
                                  <span className="text-orange-600 dark:text-orange-400">
                                    true
                                  </span>
                                  ,
                                </span>
                                <br />
                                <span className="pl-8">),</span>
                                <br />
                                <span className="pl-4">);</span>
                                <br />
                                <br />
                                <span className="pl-4 text-blue-600 dark:text-blue-400">
                                  static void
                                </span>{" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  debug
                                </span>
                                (
                                <span className="text-blue-600 dark:text-blue-400">
                                  String
                                </span>{" "}
                                message) {`{`}
                                <br />
                                <span className="pl-8">
                                  _logger.d(
                                  <span className="text-orange-600 dark:text-orange-400">
                                    &apos;🔍 $message&apos;
                                  </span>
                                  );
                                </span>
                                <br />
                                <span className="pl-4">{`}`}</span>
                                <br />
                                <br />
                                <span className="pl-4 text-blue-600 dark:text-blue-400">
                                  static void
                                </span>{" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  info
                                </span>
                                (
                                <span className="text-blue-600 dark:text-blue-400">
                                  String
                                </span>{" "}
                                message) {`{`}
                                <br />
                                <span className="pl-8">
                                  _logger.i(
                                  <span className="text-orange-600 dark:text-orange-400">
                                    &lsquo;ℹ️ $message&apos;
                                  </span>
                                  );
                                </span>
                                <br />
                                <span className="pl-4">{`}`}</span>
                                <br />
                                <br />
                                <span className="pl-4 text-blue-600 dark:text-blue-400">
                                  static void
                                </span>{" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  warning
                                </span>
                                (
                                <span className="text-blue-600 dark:text-blue-400">
                                  String
                                </span>{" "}
                                message, [
                                <span className="text-blue-600 dark:text-blue-400">
                                  String
                                </span>
                                ? context]) {`{`}
                                <br />
                                <span className="pl-8">
                                  _logger.w(
                                  <span className="text-orange-600 dark:text-orange-400">
                                    &apos;⚠️ $
                                    {`{context != null ? '[$context] ' : ''}`}
                                    $message&apos;
                                  </span>
                                  );
                                </span>
                                <br />
                                <span className="pl-4">{`}`}</span>
                                <br />
                                <br />
                                <span className="pl-4 text-blue-600 dark:text-blue-400">
                                  static void
                                </span>{" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  error
                                </span>
                                (
                                <span className="text-blue-600 dark:text-blue-400">
                                  String
                                </span>{" "}
                                message, [dynamic error, StackTrace?
                                stackTrace]) {`{`}
                                <br />
                                <span className="pl-8">
                                  _logger.e(
                                  <span className="text-orange-600 dark:text-orange-400">
                                    &apos;❌ Error:&apos;
                                  </span>
                                  , error, stackTrace);
                                </span>
                                <br />
                                <span className="pl-4">{`}`}</span>
                                <br />
                                <br />
                                <span className="pl-4 text-blue-600 dark:text-blue-400">
                                  static void
                                </span>{" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  bleEvent
                                </span>
                                (
                                <span className="text-blue-600 dark:text-blue-400">
                                  String
                                </span>{" "}
                                message) {`{`}
                                <br />
                                <span className="pl-8">
                                  _logger.i(
                                  <span className="text-orange-600 dark:text-orange-400">
                                    &apos;📱 BLE: $message&apos;
                                  </span>
                                  );
                                </span>
                                <br />
                                <span className="pl-4">{`}`}</span>
                                <br />
                                <br />
                                <span className="pl-4 text-blue-600 dark:text-blue-400">
                                  static void
                                </span>{" "}
                                <span className="text-purple-600 dark:text-purple-400">
                                  dataEvent
                                </span>
                                (
                                <span className="text-blue-600 dark:text-blue-400">
                                  String
                                </span>{" "}
                                message) {`{`}
                                <br />
                                <span className="pl-8">
                                  _logger.i(
                                  <span className="text-orange-600 dark:text-orange-400">
                                    &apos;📊 DATA: $message&apos;
                                  </span>
                                  );
                                </span>
                                <br />
                                <span className="pl-4">{`}`}</span>
                                <br />
                                {`}`}
                              </code>
                            </pre>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </CardBody>
              </GlassCard>
            </div>

              <GlassCard intensity="heavy">
              <CardBody>
                <h3 className="text-lg font-heading font-bold mb-3">
                  Serverless Functions Implementation
                </h3>
                <p className="text-default-700">
                  I implemented serverless functions to handle critical backend
                  operations without requiring dedicated server infrastructure:
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                  <li>
                    Periodic database maintenance tasks that optimize
                    performance and data storage
                  </li>
                  <li>
                    Notification systems that alert users to important status
                    changes or potential issues
                  </li>
                  <li>
                    Leak detection alerts that notify users when the system
                    detects potential water leaks
                  </li>
                  <li>
                    Future capability for secure voucher generation for payment
                    plans
                  </li>
                </ul>
              </CardBody>
            </GlassCard>
          </div>

          {/* Business Impact section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Business Impact
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                The Etamax system has delivered significant value to both
                end-users and our partner, Maxlite:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Energy Savings:</strong> Users achieve 50-85% solar
                  utilization for water heating, significantly reducing
                  electricity costs and grid dependence
                </li>
                <li>
                  <strong>Enhanced Customer Experience:</strong> The system
                  provides unprecedented visibility and control over solar water
                  heating, transforming a &quot;set and forget&quot; installation into an
                  actively managed energy solution
                </li>
                <li>
                  <strong>Market Differentiation:</strong> For our distribution
                  partner Maxlite, the intelligent management capabilities
                  differentiate their offering from conventional systems,
                  supporting premium positioning
                </li>
              </ul>
            </div>
          </div>

          {/* Future Development section - condensed */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Future Development
            </h2>
              <GlassCard intensity="heavy">
              <CardBody>
                <p className="text-default-700">
                  The Etamax system continues to evolve with planned
                  enhancements including payment integration for pay-per-use and
                  subscription models, predictive maintenance capabilities to
                  identify potential issues before they occur, and expanded
                  energy management features that will integrate with broader
                  home systems for comprehensive energy optimization.
                </p>
              </CardBody>
            </GlassCard>
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
