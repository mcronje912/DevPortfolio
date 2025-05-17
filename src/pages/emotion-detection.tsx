// src/pages/emotion-detection.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { EmotionDetectionShowcase } from "@/components/projects/EmotionDetectionShowcase";

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

          {/* App Showcase Section */}
          <EmotionDetectionShowcase />

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
                    href="https://github.com/mcronje912/emotion-detector-IBM-final-project"
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

        </div>
      </div>
    </DefaultLayout>
  );
}