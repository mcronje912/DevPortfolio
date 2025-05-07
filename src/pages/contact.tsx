import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ContactForm } from "@/components/contact/ContactForm";
import { GithubIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-10">
            <h1 className={title({ size: "lg" })}>Contact Me</h1>
            <p className="text-default-600 mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              I&apos;d love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <Card>
                <CardBody className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <Link href="mailto:marcocronje@gmail.com">
                      marcocronje@gmail.com
                    </Link>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <Link
                      isExternal
                      href="https://www.linkedin.com/in/marco-cronje/"
                    >
                      linkedin.com/in/marco-cronje
                    </Link>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GithubIcon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <Link isExternal href="https://github.com/mcronje912">
                      github.com/mcronje912
                    </Link>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <h3 className="font-medium mb-2">Location</h3>
                  <p>Johannesburg, South Africa</p>
                  <p className="mt-2 text-sm text-default-500">
                    Remote work available worldwide
                  </p>
                </CardBody>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
