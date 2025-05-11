// src/pages/emotion-detection.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

export default function EmotionDetectionProjectPage() {
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
              Emotion Detection Web App
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Chip color="primary" variant="flat">
                AI/ML
              </Chip>
              <Chip color="primary" variant="flat">
                Python
              </Chip>
              <Chip color="primary" variant="flat">
                Flask
              </Chip>
              <Chip color="primary" variant="flat">
                NLP
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
                  The Emotion Detection Web Application is an AI-powered tool
                  that analyzes text to identify emotional content across five
                  primary emotions: joy, sadness, anger, fear, and disgust.
                  Built as a project within the IBM Full Stack Developer
                  program, this application showcases the integration of
                  advanced NLP capabilities into a web-based interface.
                </p>
                <p className="mb-4">
                  A key technical achievement in this implementation was
                  successfully adapting the project to use Hugging Face&apos;s
                  &apos;emotion-english-distilroberta-base&apos; model instead of the
                  recommended Watson NLP service. This modification created a
                  fully local, open-source solution that eliminates external API
                  dependencies while maintaining high accuracy in emotion
                  detection.
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
                      Flask
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Hugging Face
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      HTML/CSS/JS
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Transformers
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Unittest
                    </Chip>
                  </div>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Project Type
                  </h3>
                  <p>IBM Full Stack Developer Course</p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    GitHub Repository
                  </h3>
                  <Link
                    isExternal
                    className="text-cerulean hover:underline"
                    href="https://github.com/mcronje912/NLP-Sentiment-Analysis-practice-project"
                  >
                    View Repository
                  </Link>
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
                    The application implements a clean client-server
                    architecture with a Flask-powered backend that processes
                    requests, a transformer-based emotion detection model
                    running locally, and a frontend interface for user
                    interaction.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    NLP Implementation
                  </h3>
                  <p className="text-default-700">
                    Instead of using the recommended Watson NLP service, the
                    application implements Hugging Face&apos;s
                    &apos;emotion-english-distilroberta-base&apos; model. This approach
                    provides a fully local, open-source solution that preserves
                    privacy and eliminates external dependencies.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Testing & Quality
                  </h3>
                  <p className="text-default-700">
                    The application includes comprehensive unit tests using
                    Python&apos;s unittest framework to verify emotion detection
                    accuracy. Code quality is maintained with PyLint, achieving
                    a perfect 10/10 quality score by adhering to PEP 8
                    guidelines.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Error Handling
                  </h3>
                  <p className="text-default-700">
                    Robust error handling is implemented throughout the
                    application for empty or invalid inputs, processing errors
                    in the emotion detection pipeline, and user-friendly error
                    messages that enhance the user experience.
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
                    Multi-Emotion Detection
                  </h3>
                  <p className="text-default-700">
                    The application analyzes text for five primary emotions:
                    joy, sadness, anger, fear, and disgust, providing a
                    comprehensive emotional profile of the content.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Dominant Emotion Identification
                  </h3>
                  <p className="text-default-700">
                    Beyond detecting multiple emotions, the system identifies
                    the strongest emotional signal present in the text, giving
                    users clear insight into the primary emotional tone.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Real-time Analysis
                  </h3>
                  <p className="text-default-700">
                    Users receive immediate feedback on the emotional content of
                    their text, with results processed and displayed in
                    real-time through the web interface.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Privacy-Focused Design
                  </h3>
                  <p className="text-default-700">
                    All text processing occurs locally without external API
                    calls, ensuring that sensitive content remains private and
                    is not transmitted to third-party services.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    User-Friendly Interface
                  </h3>
                  <p className="text-default-700">
                    The application provides an intuitive web interface for
                    submitting text and viewing emotion analysis results, making
                    advanced NLP technology accessible to users.
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
                Several technical challenges were addressed during development:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>
                  Configuring the NLP environment with compatible package
                  versions
                </li>
                <li>
                  Implementing an alternative model while maintaining accuracy
                  requirements
                </li>
                <li>
                  Creating comprehensive error handling for various edge cases
                </li>
                <li>Achieving a perfect PyLint code quality score of 10/10</li>
              </ul>
            </div>
          </div>

          {/* Future Improvements section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Future Improvements
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                Planned enhancements for future iterations include:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Enhanced visualization of emotion scores</li>
                <li>Support for analyzing longer text passages</li>
                <li>Historical analysis of multiple inputs</li>
                <li>Multi-language emotion detection support</li>
              </ul>
            </div>
          </div>

          {/* Skills Demonstrated section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Skills Demonstrated
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                This project showcases several important technical capabilities:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>
                  Integration of advanced AI/ML models into web applications
                </li>
                <li>
                  Adaptation and problem-solving when implementing alternative
                  technologies
                </li>
                <li>
                  Application of software engineering best practices (testing,
                  code quality)
                </li>
                <li>
                  Creation of user-friendly interfaces for complex AI
                  functionality
                </li>
              </ul>
              <p className="mb-4">
                As AI becomes increasingly important across various
                applications, this project demonstrates the ability to
                effectively integrate these technologies into practical,
                user-facing solutions.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex justify-center mt-12">
            <Button
              isExternal
              as={Link}
              className="px-8"
              color="primary"
              href="https://github.com/mcronje912/NLP-Sentiment-Analysis-practice-project"
              variant="shadow"
            >
              View GitHub Repository
            </Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
