import { Card, CardHeader, CardBody } from "@heroui/card";
import { Experience } from "@/data/experience";
import { Chip } from "@heroui/chip";

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  experience, 
  isLast 
}) => {
  return (
    <div className="mb-8 flex w-full">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center mr-4">
        <div className="w-4 h-4 rounded-full bg-cerulean z-10" />
        {!isLast && <div className="h-full w-0.5 bg-default-200" />}
      </div>
      
      {/* Content */}
      <Card className="w-full">
        <CardHeader className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-2">
            <h3 className="font-heading font-bold text-xl">{experience.title}</h3>
            <Chip size="sm" color="primary" variant="flat">
              {experience.startDate} - {experience.endDate}
            </Chip>
          </div>
          <p className="text-default-600">{experience.company}, {experience.location}</p>
        </CardHeader>
        <CardBody>
          <p className="mb-4">{experience.description}</p>
          <div>
            <h4 className="font-medium mb-2">Key Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="text-default-700">{achievement}</li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};