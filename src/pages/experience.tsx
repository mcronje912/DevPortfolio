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
              A journey through my professional career, highlighting key roles,
              responsibilities, and achievements along the way.
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