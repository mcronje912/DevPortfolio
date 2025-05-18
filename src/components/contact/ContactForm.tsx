// src/components/contact/ContactForm.tsx
import { useState, useRef } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setStatus({ 
      submitted: false, 
      submitting: true, 
      info: { error: false, msg: null } 
    });
    
    try {
      // Using your EmailJS credentials
      await emailjs.sendForm(
        'service_cgcy3xv',           // Your Service ID 
        'template_9egp519', // Replace with your template ID
        formRef.current,
        'b3S5dSqsBJsINPdib'          // Your Public Key
      );
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" }
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
        info: { error: true, msg: "An error occurred. Please try again later." }
      });
    }
  };

  return (
    <>
      {status.submitted ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cerulean/20 text-cerulean mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="text-2xl font-medium mb-4">Thank You!</h3>
          <p className="text-ash-gray-400 text-lg mb-8">
            Your message has been received. I&apos;ll get back to you soon.
          </p>
          <Button 
            color="primary" 
            size="lg"
            className="px-8 py-2 bg-cerulean hover:bg-cerulean-600"
            onClick={() => setStatus({ 
              submitted: false, 
              submitting: false, 
              info: { error: false, msg: null } 
            })}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                label="Name"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isRequired
                variant="bordered"
                classNames={{
                  label: "text-default-600",
                  input: "bg-transparent"
                }}
                size="lg"
              />
            </div>
            <div>
              <Input
                label="Email"
                placeholder="your.email@example.com"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                isRequired
                variant="bordered"
                classNames={{
                  label: "text-default-600",
                  input: "bg-transparent"
                }}
                size="lg"
              />
            </div>
          </div>
          
          <Input
            label="Subject"
            placeholder="What's this about?"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            isRequired
            variant="bordered"
            classNames={{
              label: "text-default-600",
              input: "bg-transparent"
            }}
            size="lg"
          />
          
          <Textarea
            label="Message"
            placeholder="Your message here..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            isRequired
            minRows={5}
            variant="bordered"
            classNames={{
              label: "text-default-600",
              input: "bg-transparent"
            }}
            size="lg"
          />
          
          {status.info.error && (
            <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-500">
              {status.info.msg}
            </div>
          )}
          
          <Button
            type="submit"
            color="primary"
            size="lg"
            fullWidth
            className="bg-cerulean hover:bg-cerulean-600 mt-6 py-6"
            isLoading={status.submitting}
            disabled={status.submitting}
          >
            {status.submitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </form>
      )}
    </>
  );
};