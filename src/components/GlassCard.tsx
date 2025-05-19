// src/components/GlassCard.tsx
import { Card, CardProps } from "@heroui/card";
import clsx from "clsx";

interface GlassCardProps extends CardProps {
  intensity?: "light" | "medium" | "heavy";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  intensity = "medium",
  ...props
}) => {
  const glassEffect = {
    light:
      "bg-white/10 dark:bg-rich-black-500/10 backdrop-blur-sm border border-white/10 dark:border-rich-black-300/10",
    medium:
      "bg-white/20 dark:bg-rich-black-500/20 backdrop-blur-md border border-white/20 dark:border-rich-black-300/20",
    heavy:
      "bg-white/30 dark:bg-rich-black-500/30 backdrop-blur-md border border-white/30 dark:border-rich-black-300/30",
  }[intensity];

  return (
    <Card
      className={clsx(
        glassEffect,
        "shadow-lg hover:shadow-xl transition-all duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  );
};
