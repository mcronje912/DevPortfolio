import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  const certificates = [
    "IBM - Full Stack Developer (in progress)",
    "IBM - iOS and Android Mobile App Developer",
    "IBM - Data Science",
    "Google - Digital Marketing & E-Commerce",
    "Autodesk - 3D Model Creation with Fusion 360",
  ];

  const education = [
    {
      institution: "Damelin, Johannesburg",
      degree: "Certificate in Media Design Technology",
      years: "2003 - 2004",
    },
    {
      institution: "Hoerskool President, Johannesburg",
      degree: "High School Senior Certificate",
      years: "2002",
    },
  ];

  return (
    <DefaultLayout>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left column - Image and basic info */}
            <div className="w-full md:w-1/3">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-cerulean to-verdigris h-80 rounded-lg flex items-center justify-center mb-6">
                  <p className="text-white text-xl font-medium">
                    Profile Image Placeholder
                  </p>
                </div>

                <Card className="mb-6">
                  <CardBody>
                    <h2 className="font-heading font-bold text-xl mb-4">
                      Contact Information
                    </h2>
                    <div className="space-y-2">
                      <p>
                        <strong>Location:</strong> Johannesburg, South Africa
                      </p>
                      <p>
                        <strong>Email:</strong> marcocronje@gmail.com
                      </p>
                      <p>
                        <strong>Phone:</strong> 083 442 3567
                      </p>
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <h2 className="font-heading font-bold text-xl mb-4">
                      Languages
                    </h2>
                    <div className="space-y-2">
                      <p>
                        <strong>Fluent:</strong> English, Afrikaans
                      </p>
                      <p>
                        <strong>Beginner:</strong> Italian
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>

            {/* Right column - About content */}
            <div className="w-full md:w-2/3">
              <h1 className={title({ size: "lg", class: "mb-6" })}>About Me</h1>

              <div className="prose max-w-none mb-10">
                <p className="text-lg mb-4">
                  As a Full Stack Developer & IoT Systems Engineer, I create
                  end-to-end technology solutions that connect hardware and
                  software in the electronics manufacturing industry.
                </p>

                <p className="mb-4">
                  My expertise spans the complete development stack - from
                  responsive front-end interfaces using React and Flutter to
                  robust back-end systems and cloud infrastructure. I specialize
                  in integrating IoT devices with web and mobile applications
                  through BLE communications, RESTful APIs, and cloud services
                  like Firebase and Google Cloud Platform.
                </p>

                <p className="mb-8">
                  Driven by a passion for comprehensive solution design, I focus
                  on building autonomous systems that address real-world
                  business challenges through practical implementation of modern
                  technologies. My approach combines technical development with
                  business process automation, delivering scalable solutions
                  that enhance efficiency and operate independently.
                </p>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Education
                </h2>
                <div className="space-y-4 mb-8">
                  {education.map((edu, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{edu.institution}</h3>
                        <p className="text-default-600">{edu.degree}</p>
                      </div>
                      <Chip size="sm" variant="flat">
                        {edu.years}
                      </Chip>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Certifications
                </h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {certificates.map((cert, index) => (
                    <Chip key={index} color="secondary" variant="flat">
                      {cert}
                    </Chip>
                  ))}
                </div>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  My Approach
                </h2>
                <p className="mb-4">
                  I believe in creating practical solutions that solve real
                  business problems. My development philosophy focuses on
                  building systems that not only meet current requirements but
                  are also maintainable and adaptable to future needs.
                </p>

                <p>
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying the outdoors around Johannesburg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
