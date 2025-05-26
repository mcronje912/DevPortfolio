import { CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";

import { Experience } from "@/data/experience";
import { GlassCard } from "../GlassCard";

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  experience,
  isLast,
}) => {
  return (
    <div className="mb-8 flex w-full">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center mr-4">
        <div className="w-4 h-4 rounded-full bg-cerulean z-10" />
        {!isLast && <div className="h-full w-0.5 bg-default-200" />}
      </div>

      {/* Content */}
      <GlassCard className="w-full">
        <CardHeader className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-2">
            <h3 className="font-heading font-bold text-xl">
              {experience.title}
            </h3>
            <Chip color="primary" size="sm" variant="flat">
              {experience.startDate} - {experience.endDate}
            </Chip>
          </div>
          <p className="text-default-600">
            {experience.company}, {experience.location}
          </p>
        </CardHeader>

        <CardBody>
          <p className="mb-4">{experience.description}</p>

          {/* Handle subPeriods if they exist */}
          {experience.subPeriods && experience.subPeriods.length > 0 ? (
            <div className="space-y-6">
              {experience.subPeriods.map((period, index) => (
                <div
                  key={index}
                  className="border-l-2 border-cerulean-200 pl-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-heavy text-lg text-cerulean-600 dark:text-cerulean-600">
                      {period.title}
                    </h4>
                    <Chip color="secondary" size="sm" variant="flat">
                      {period.startDate} - {period.endDate}
                    </Chip>
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    {period.achievements.map(
                      (achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-default-700 text-sm"
                        >
                          {achievement}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            /* Fallback to regular achievements if no subPeriods */
            <div>
              <h4 className="font-medium mb-2">Key Achievements:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-default-700">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardBody>
      </GlassCard>
    </div>
  );
};
