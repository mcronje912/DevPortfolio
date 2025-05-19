// src/pages/contact.tsx
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="py-16">
        <div className="container px-4 mx-auto">
          {/* Header Section with improved spacing */}
          <div className="text-center mb-16">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={title({ size: "lg", class: "mb-6" })}>
                Contact Me
              </h1>
              <p className="text-default-600 mt-4 max-w-2xl mx-auto text-xl">
                Have a project in mind or want to discuss potential
                opportunities?
                <br />
                I&apos;d love to hear from you!
              </p>
            </motion.div>
          </div>

          {/* Main Content with improved grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Information - Left Column */}
            <div className="lg:col-span-4 space-y-6">
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Contact Information
                </h2>

                {/* GitHub Card */}
                <Card className="mb-6 bg-rich-black-500/60 dark:bg-rich-black-600/70 backdrop-blur-sm border-0 shadow-md overflow-hidden">
                  <CardBody className="py-6">
                    <h3 className="text-xl font-heading font-medium mb-2 text-white">
                      GitHub
                    </h3>
                    <Link
                      isExternal
                      className="text-cerulean-600 hover:text-cerulean-400 font-medium text-lg"
                      href="https://github.com/mcronje912"
                    >
                      github.com/mcronje912
                    </Link>
                  </CardBody>
                </Card>

                {/* Location Card */}
                <Card className="bg-rich-black-500/60 dark:bg-rich-black-600/70 backdrop-blur-sm border-0 shadow-md overflow-hidden">
                  <CardBody className="py-6">
                    <h3 className="text-xl font-heading font-medium mb-2 text-white">
                      Location
                    </h3>
                    <p className="text-white font-medium text-lg mb-1">
                      Johannesburg, South Africa
                    </p>
                    <p className="text-ash-gray-400">
                      Remote work available worldwide
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            </div>

            {/* Form Column - Takes more space */}
            <div className="lg:col-span-8">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-white/5 dark:bg-rich-black-600/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
                  <CardBody className="p-8">
                    <h2 className="text-2xl font-heading font-bold mb-6">
                      Get In Touch
                    </h2>
                    <ContactForm />
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
