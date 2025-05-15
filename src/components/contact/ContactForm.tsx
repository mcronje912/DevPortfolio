// src/components/contact/ContactForm.tsx
import { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";

export const ContactForm = () => {
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-heading font-bold">Get In Touch</h2>
        <p className="text-default-500">
          I&apos;d love to hear from you! Please reach out via email or use this form.
        </p>
      </CardHeader>
      <CardBody>
        <div className="mb-6">
          <h3 className="font-medium mb-2">Contact Information:</h3>
          <p className="mb-2">
            <span className="font-medium">Email:</span>{" "}
            <Link 
              href="mailto:marcocronje@gmail.com" 
              className="text-cerulean hover:underline"
            >
              marcocronje@gmail.com
            </Link>
          </p>
          <p className="mb-2">
            <span className="font-medium">Location:</span> Johannesburg, South Africa
          </p>
          <p className="text-sm text-default-500 mt-4">
            Form submission functionality coming soon. In the meantime, please 
            contact me directly via email for any inquiries.
          </p>
        </div>
        
        <div className="flex mt-6 gap-4">
          <Button
            as={Link}
            href="mailto:marcocronje@gmail.com"
            color="primary"
            className="bg-cerulean hover:bg-cerulean-600"
          >
            Email Me
          </Button>
          <Button
            as={Link}
            href="https://www.linkedin.com/in/marco-cronje/"
            isExternal
            variant="bordered"
            className="border-cerulean text-cerulean"
          >
            Connect on LinkedIn
          </Button>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center text-center text-sm text-default-500">
        <p>
          I&apos;ll typically respond to inquiries within 24-48 hours.
        </p>
      </CardFooter>
    </Card>
  );
};