// src/components/contact/ContactForm.tsx
import { useState, useRef } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import emailjs from "@emailjs/browser";

import { useAnalytics } from "@/hooks/useAnalytics";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { trackEvent } = useAnalytics();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  });

  // Form validation states
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form first
    if (!validateForm()) {
      trackEvent("contact_form_validation_failed", {
        fields_with_errors: Object.entries(errors)
          .filter(([_, value]) => value !== "")
          .map(([key]) => key)
          .join(","),
      });

      return;
    }

    if (!formRef.current) return;

    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null },
    });

    try {
      // Track form submission attempt
      trackEvent("contact_form_submit_attempt", {
        has_subject: !!formData.subject.trim(),
      });

      // Using your EmailJS credentials
      await emailjs.sendForm(
        "service_cgcy3xv", // Your Service ID
        "template_9egp519", // Replace with your template ID
        formRef.current,
        "b3S5dSqsBJsINPdib", // Your Public Key
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" },
      });

      // Track successful form submission
      trackEvent("contact_form_submitted", {
        success: true,
        message_length: formData.message.length,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "An error occurred. Please try again later.",
        },
      });

      // Track form submission error
      trackEvent("contact_form_error", {
        success: false,
        error_message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  return (
    <>
      {status.submitted ? (
        <div aria-live="polite" className="text-center py-12">
          <div
            aria-hidden="true"
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cerulean/20 text-cerulean mb-6"
          >
            <svg
              fill="none"
              height="40"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="text-2xl font-medium mb-4">Thank You!</h3>
          <p className="text-ash-gray-400 text-lg mb-8">
            Your message has been received. I&apos;ll get back to you soon.
          </p>
          <Button
            className="px-8 py-2 bg-cerulean hover:bg-cerulean-600 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
            color="primary"
            size="lg"
            onClick={() => {
              setStatus({
                submitted: false,
                submitting: false,
                info: { error: false, msg: null },
              });
              trackEvent("contact_form_reset", {
                action: "send_another_message",
              });
            }}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form
          ref={formRef}
          noValidate
          aria-label="Contact form"
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                isRequired
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={!!errors.name}
                aria-required="true"
                classNames={{
                  label: "text-default-600",
                  input: "bg-transparent",
                  errorMessage: "text-danger font-medium",
                }}
                errorMessage={errors.name}
                id="name"
                isInvalid={!!errors.name}
                label="Name"
                name="name"
                placeholder="Your name"
                size="lg"
                value={formData.name}
                variant="bordered"
                onChange={handleChange}
              />
              {errors.name && (
                <span className="sr-only" id="name-error">
                  {errors.name}
                </span>
              )}
            </div>
            <div>
              <Input
                isRequired
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
                aria-required="true"
                classNames={{
                  label: "text-default-600",
                  input: "bg-transparent",
                  errorMessage: "text-danger font-medium",
                }}
                errorMessage={errors.email}
                id="email"
                isInvalid={!!errors.email}
                label="Email"
                name="email"
                placeholder="your.email@example.com"
                size="lg"
                type="email"
                value={formData.email}
                variant="bordered"
                onChange={handleChange}
              />
              {errors.email && (
                <span className="sr-only" id="email-error">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <Input
            isRequired
            aria-describedby={errors.subject ? "subject-error" : undefined}
            aria-invalid={!!errors.subject}
            aria-required="true"
            classNames={{
              label: "text-default-600",
              input: "bg-transparent",
              errorMessage: "text-danger font-medium",
            }}
            errorMessage={errors.subject}
            id="subject"
            isInvalid={!!errors.subject}
            label="Subject"
            name="subject"
            placeholder="What's this about?"
            size="lg"
            value={formData.subject}
            variant="bordered"
            onChange={handleChange}
          />
          {errors.subject && (
            <span className="sr-only" id="subject-error">
              {errors.subject}
            </span>
          )}

          <Textarea
            isRequired
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
            aria-required="true"
            classNames={{
              label: "text-default-600",
              input: "bg-transparent",
              errorMessage: "text-danger font-medium",
            }}
            errorMessage={errors.message}
            id="message"
            isInvalid={!!errors.message}
            label="Message"
            minRows={5}
            name="message"
            placeholder="Your message here..."
            size="lg"
            value={formData.message}
            variant="bordered"
            onChange={handleChange}
          />
          {errors.message && (
            <span className="sr-only" id="message-error">
              {errors.message}
            </span>
          )}

          {status.info.error && (
            <div
              aria-live="assertive"
              className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-500"
              role="alert"
            >
              {status.info.msg}
            </div>
          )}

          <Button
            fullWidth
            aria-disabled={status.submitting}
            className="bg-cerulean hover:bg-cerulean-600 mt-6 py-6 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
            color="primary"
            disabled={status.submitting}
            isLoading={status.submitting}
            size="lg"
            type="submit"
          >
            {status.submitting ? "Sending Message..." : "Send Message"}
          </Button>
        </form>
      )}
    </>
  );
};
