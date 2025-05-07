import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { title, subtitle } from "@/components/primitives";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className={title()}>Hello, I&apos;m </span>
              <span className={title({ color: "blue" })}>Marco Cronje</span>
            </h1>
            <p className={subtitle({ class: "max-w-md mb-8" })}>
              Full Stack Developer & IoT Systems Engineer creating end-to-end
              solutions that connect hardware and software in the electronics
              manufacturing industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                as={Link}
                className="bg-cerulean hover:bg-cerulean-600"
                color="primary"
                href="/projects"
                variant="shadow"
              >
                View My Projects
              </Button>
              <Button
                as={Link}
                className="border-cerulean text-cerulean"
                href="/contact"
                variant="bordered"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-cerulean to-verdigris h-96 rounded-lg flex items-center justify-center">
              <p className="text-white text-xl font-medium">
                Profile Image Placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
