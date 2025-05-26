import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Timeline } from "@/components/experience/Timeline";

export default function ExperiencePage() {
  return (
    <DefaultLayout>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-10">
            <h1 className={title({ size: "lg" })}>My Experience</h1>
            <p className="text-default-600 mt-4 max-w-2xl mx-auto">
              From identifying business challenges to building the software
              solutions that solve them—a journey through the roles and projects
              that shaped my development career.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Timeline />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
