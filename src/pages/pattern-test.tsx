// src/pages/pattern-test.tsx
import { useState } from "react";
import { Slider } from "@heroui/slider";

import DefaultLayout from "@/layouts/default";

export default function PatternTestPage() {
  const [opacity, setOpacity] = useState(5);
  const [size, setSize] = useState(300);

  const updatePattern = () => {
    const root = document.documentElement;

    root.style.setProperty("--pattern-opacity", `${opacity / 100}`);
    root.style.setProperty("--pattern-size", `${size}px`);
  };

  // Update CSS when values change
  useState(() => {
    updatePattern();
  }, [opacity, size]);

  return (
    <DefaultLayout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Pattern Background Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-rich-black-400 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Pattern Opacity</h2>
            <Slider
              aria-label="Pattern Opacity"
              className="mb-4"
              maxValue={20}
              minValue={1}
              step={1}
              value={opacity}
              onChange={setOpacity}
            />
            <p>Current opacity: {opacity}%</p>
          </div>

          <div className="p-6 bg-white dark:bg-rich-black-400 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Pattern Size</h2>
            <Slider
              aria-label="Pattern Size"
              className="mb-4"
              maxValue={800}
              minValue={100}
              step={50}
              value={size}
              onChange={setSize}
            />
            <p>Current size: {size}px</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white dark:bg-rich-black-400 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Background Preview</h2>
          <p>
            This page is displaying the background pattern at {opacity}% opacity
            and {size}px size.
          </p>
          <div className="mt-4 h-40 border border-default-200 rounded-lg flex items-center justify-center">
            <p>Content area with background pattern</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
