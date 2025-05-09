// src/components/ProfileImage.tsx
import React from "react";

import { useTheme } from "./ThemeProvider";

interface ProfileImageProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  effectVariant?: "default" | "subtle" | "accent";
  shape?: "square" | "rounded" | "circle";
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  className = "",
  size = "md",
  effectVariant = "default",
  shape = "rounded",
}) => {
  const { currentTheme } = useTheme();
  const isDark = currentTheme === "dark";

  const sizeClasses = {
    xs: "h-32 w-32",
    sm: "h-40 w-40",
    md: "h-64 w-64",
    lg: "h-80 w-80",
  }[size];

  const shapeClasses = {
    square: "rounded-none",
    rounded: "rounded-lg",
    circle: "rounded-full",
  }[shape];

  const getFilterStyle = () => {
    switch (effectVariant) {
      case "subtle":
        return isDark
          ? "brightness(0.85) contrast(1.1)"
          : "brightness(1.05) contrast(1.05)";
      case "accent":
        return isDark
          ? "brightness(0.9) contrast(1.2) drop-shadow(0 0 8px rgba(64, 121, 140, 0.5))"
          : "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(112, 169, 161, 0.4))";
      default:
        return "brightness(1) contrast(1)";
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${sizeClasses} ${shapeClasses} ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cerulean to-verdigris opacity-20" />

      {/* Profile image with filter - FIXED POSITIONING */}
      <img
        alt="Marco Cronje - Full Stack Developer & IoT Systems Engineer"
        className="w-full h-full"
        src="/profile-illustration.png"
        style={{
          filter: getFilterStyle(),
          mixBlendMode: isDark ? "lighten" : "multiply",
          objectFit: "contain", // Changed from object-cover to object-contain
          objectPosition: "center center", // Center the image
          padding: "5px", // Add some padding to ensure no cropping
        }}
      />

      {/* Optional subtle overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr from-transparent via-transparent ${
          isDark ? "to-cerulean-800" : "to-verdigris-200"
        } opacity-20`}
      />
    </div>
  );
};
