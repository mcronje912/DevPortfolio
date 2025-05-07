import { experiences } from "@/data/experience";
import { TimelineItem } from "./TimelineItem";

export const Timeline = () => {
  return (
    <div className="py-6">
      {experiences.map((experience, index) => (
        <TimelineItem 
          key={experience.id} 
          experience={experience} 
          isLast={index === experiences.length - 1} 
        />
      ))}
    </div>
  );
};