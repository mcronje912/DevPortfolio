// src/components/Hero.tsx
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { ProfileImage } from "@/components/ProfileImage";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 md:py-28">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 mb-10 md:mb-0">
            <span className="inline-block text-cerulean font-medium mb-3">
              Hello, I&apos;m
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Marco{" "}
              <span className="text-gradient bg-gradient-to-r from-cerulean to-verdigris">
                Cronje
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-default-600 mb-6">
              Full Stack Developer & IoT Systems Engineer
            </h2>

            <p className="text-lg max-w-xl mb-8">
              I build end-to-end solutions that bridge the gap between hardware
              and software in the electronics manufacturing industry. From{" "}
              <span className="text-cerulean font-medium">
                intuitive mobile apps
              </span>{" "}
              to{" "}
              <span className="text-cerulean font-medium">
                smart IoT systems
              </span>
              , I transform complex challenges into elegant, automated
              solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                as={Link}
                className="bg-cerulean hover:bg-cerulean-600 px-6 py-2"
                color="primary"
                href="/projects"
                variant="shadow"
              >
                View My Projects
              </Button>
              <Button
                as={Link}
                className="border-cerulean text-cerulean px-6 py-2"
                href="/contact"
                variant="bordered"
              >
                Let&apos;s Connect
              </Button>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center relative">
            {/* Profile image with animated accent effect */}
            <div className="relative">
              <ProfileImage
                className="shadow-xl z-10 relative"
                effectVariant="accent"
                size="sm"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-verdigris rounded-full opacity-30 blur-md animate-pulse-subtle" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-cerulean rounded-full opacity-30 blur-md animate-pulse-subtle delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
