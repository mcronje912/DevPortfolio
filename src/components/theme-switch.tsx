// src/components/theme-switch.tsx
import { FC, useId } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import { useTheme } from "./ThemeProvider";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { currentTheme, toggleTheme } = useTheme();
  const switchId = useId();

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: currentTheme === 'light',
    onChange: toggleTheme,
    'aria-label': currentTheme === 'light' ? "Switch to dark mode" : "Switch to light mode"
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cerulean-500 rounded-full",
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input 
          {...getInputProps()} 
          id={switchId}
          type="checkbox" // Explicitly set type to checkbox
          role="switch" // Add an explicit role of switch
          aria-checked={isSelected} // Now aria-checked is valid with switch role
        />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {isSelected ? (
          <MoonFilledIcon size={22} aria-hidden="true" />
        ) : (
          <SunFilledIcon size={22} aria-hidden="true" />
        )}
      </div>
    </Component>
  );
};