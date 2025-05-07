import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You'll implement the actual form submission later
    console.log("Form submitted:", formData);
    alert("Thanks for your message! I'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-heading font-bold">Get In Touch</h2>
        <p className="text-default-500">
          I&apos;d love to hear from you! Fill out the form below.
        </p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isRequired
          />
          <Input
            label="Email"
            placeholder="your.email@example.com"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            isRequired
          />
          <Input
            label="Subject"
            placeholder="What's this about?"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            isRequired
          />
          <Textarea
            label="Message"
            placeholder="Your message here..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            isRequired
            minRows={4}
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            className="bg-cerulean hover:bg-cerulean-600 mt-4"
          >
            Send Message
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};