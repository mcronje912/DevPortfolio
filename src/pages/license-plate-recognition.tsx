// src/pages/license-plate-recognition.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { LicensePlateShowcase } from "@/components/projects/LicensePlateShowcase";

export default function LicensePlateRecognitionPage() {
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
              License Plate Recognition System
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Chip color="primary" variant="flat">
                Computer Vision
              </Chip>
              <Chip color="primary" variant="flat">
                Python
              </Chip>
              <Chip color="primary" variant="flat">
                FastAPI
              </Chip>
              <Chip color="primary" variant="flat">
                R&D
              </Chip>
            </div>
          </div>

          {/* Desktop Showcase */}
          <LicensePlateShowcase />

          {/* Overview section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
              <div className="prose max-w-none text-default-700">
                <p className="mb-4">
                  This License Plate Recognition System is an exploratory R&D
                  project developed to investigate computer vision capabilities
                  for automatically detecting and recognizing plates from
                  images. As our company specializes in parking guidance
                  systems, this research directly complements our core business
                  offerings.
                </p>
                <p className="mb-4">
                  The system can analyze images containing vehicles, locate
                  license plates, and extract the plate text using optical
                  character recognition (OCR). It&apos;s particularly optimized for
                  for South African license plate formats and includes
                  validation logic to ensure accurate readings even in
                  challenging visual conditions.
                </p>
                <p className="mb-4">
                  This R&D project demonstrates how computer vision technology
                  could potentially enhance our parking solutions with automated
                  vehicle identification capabilities.
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
                      Python
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      FastAPI
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      OpenCV
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      EasyOCR
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      NumPy
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      RegEx
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
                  <p>Full Stack Developer</p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Status
                  </h3>
                  <p>R&D Project - Running Locally</p>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Technical Implementation section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Technical Implementation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Architecture
                  </h3>
                  <p className="text-default-700">
                    The system follows a service-oriented architecture with
                    FastAPI handling HTTP requests and serving the API
                    endpoints, an ImageProcessor class encapsulating the license
                    plate detection logic, and a simple file-based storage for
                    uploaded and processed images.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Image Processing Pipeline
                  </h3>
                  <p className="text-default-700">
                    The core processing pipeline involves multiple stages: image
                    loading, preprocessing with OpenCV to enhance features, text
                    detection using EasyOCR, text filtering and merging through
                    a custom algorithm, and license plate validation using
                    pattern matching.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Text Merging Algorithm
                  </h3>
                  <p className="text-default-700">
                    One of the technical innovations is a custom text merging
                    algorithm that can combine fragmented text detections into
                    complete license plates, even when the OCR engine initially
                    detects them as separate elements. This greatly improves
                    recognition accuracy.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    API Implementation
                  </h3>
                  <p className="text-default-700">
                    The API endpoints are built with FastAPI, providing a simple
                    interface for uploading images, processing them for license
                    plate detection, and retrieving the results with confidence
                    scores and visual feedback showing the detected regions.
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
                    License Plate Detection
                  </h3>
                  <p className="text-default-700">
                    The system can detect license plates in images containing
                    vehicles, highlighting the plate location with bounding
                    boxes and extracting the text through OCR.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    South African Plate Recognition
                  </h3>
                  <p className="text-default-700">
                    Specialized for South African license plate formats, the
                    system includes validation rules to verify that detected
                    text matches known license plate patterns.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Confidence Scoring
                  </h3>
                  <p className="text-default-700">
                    Each detection includes a confidence score, helping users
                    evaluate the reliability of the recognition and potentially
                    filter out low-confidence results.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Visual Feedback
                  </h3>
                  <p className="text-default-700">
                    The system provides visual feedback by drawing bounding
                    boxes around detected text regions, making it easy to verify
                    the accuracy of detections at a glance.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Simple API Interface
                  </h3>
                  <p className="text-default-700">
                    A straightforward API allows for easy integration with other
                    systems, with endpoints for image upload, processing, and
                    result retrieval.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Side-by-Side Comparison
                  </h3>
                  <p className="text-default-700">
                    The system generates comparison views showing the original
                    image alongside the processed version with detections
                    highlighted, facilitating evaluation of recognition
                    accuracy.
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
              <p className="mb-4">
                Developing an accurate license plate recognition system
                presented several challenges:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Text Fragmentation:</strong> The OCR engine often
                  detected license plate characters as separate fragments. I
                  developed a custom text merging algorithm that analyzes the
                  spatial relationships between text regions to reconstruct
                  complete license plates.
                </li>
                <li>
                  <strong>Parameter Tuning:</strong> Finding the optimal
                  parameters for the OCR engine required extensive
                  experimentation. I systematically tested different
                  configurations to balance accuracy with processing speed.
                </li>
                <li>
                  <strong>Variable Image Conditions:</strong> License plates
                  photographed under different lighting, angles, and distances
                  created inconsistent results. I implemented adaptive
                  preprocessing techniques to normalize images before text
                  detection.
                </li>
                <li>
                  <strong>Format Variations:</strong> South African license
                  plates follow several different formats depending on the
                  province. I created a flexible pattern-matching system that
                  could validate plates across multiple regional formats.
                </li>
              </ul>
            </div>
          </div>

          {/* Business Applications section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Business Applications
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                This R&D project has direct relevance to our company&apos;s
                parking guidance systems:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>
                  <strong>Automated Access Control:</strong> The technology
                  could enable automatic verification of authorized vehicles
                  entering secure parking facilities.
                </li>
                <li>
                  <strong>Parking Space Allocation:</strong> Integration with
                  our guidance systems could allow for intelligent allocation of
                  parking spaces based on vehicle identification.
                </li>
                <li>
                  <strong>Billing Systems:</strong> Automatic capture of license
                  plates could streamline billing in commercial parking
                  structures by eliminating the need for physical tickets.
                </li>
                <li>
                  <strong>Security Enhancements:</strong> The system could flag
                  unauthorized vehicles or maintain logs of entries and exits
                  for security purposes.
                </li>
              </ul>
              <p className="mb-4">
                These applications demonstrate how this exploratory project
                could potentially enhance our existing product offerings with
                advanced vehicle identification capabilities.
              </p>
            </div>
          </div>

          {/* Future Developments section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Future Developments
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                There are several potential directions for further development:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>
                  Server deployment for production use with increased
                  concurrency handling
                </li>
                <li>
                  Integration with live video feeds for real-time plate
                  recognition
                </li>
                <li>
                  Addition of a machine learning component to improve accuracy
                  over time
                </li>
                <li>
                  Implementation of a database for tracking vehicles and
                  generating reports
                </li>
                <li>
                  Development of a more comprehensive user interface for
                  non-technical operators
                </li>
                <li>
                  Extension of pattern matching to support international license
                  plate formats
                </li>
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