// src/components/portfolio/TechnicalImplementation.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardBody } from "@heroui/card";

import { GlassCard } from "@/components/GlassCard";

export const TechnicalImplementation = () => {
  // State for tracking which code examples are expanded
  const [expandedCode, setExpandedCode] = useState<{ [key: string]: boolean }>({
    component: false,
    hooks: false,
    testing: false,
  });

  // Toggle function for expanding/collapsing code examples
  const toggleCodeExpand = (codeId: string) => {
    setExpandedCode((prev) => ({
      ...prev,
      [codeId]: !prev[codeId],
    }));
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-4">
        Technical Implementation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard intensity="heavy">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Glass Card Component
            </h3>
            <p className="text-default-700">
              A reusable component that creates a frosted glass effect with
              configurable intensity levels.
            </p>

            {/* Collapsible Code Example */}
            <div className="mt-4">
              <button
                className="flex items-center justify-between w-full bg-default-200 dark:bg-rich-black-500 p-2 rounded-t-md hover:bg-default-300 dark:hover:bg-rich-black-400 transition-colors"
                onClick={() => toggleCodeExpand("component")}
              >
                <span className="font-medium text-sm">Code Example</span>
                <span
                  className="transform transition-transform duration-200"
                  style={{
                    transform: expandedCode.component
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {expandedCode.component && (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-default-100 dark:bg-rich-black-600 p-4 border border-default-200 dark:border-rich-black-400 border-t-0 rounded-b-md overflow-auto text-sm font-mono">
                      <pre className="whitespace-pre-wrap">
                        <code className="language-typescript text-xs">
                          <span className="text-green-600 dark:text-green-400">
                          </span>
                          <br />
                          <span className="text-blue-600 dark:text-blue-400">
                            import
                          </span>{" "}
                          {"{ Card, CardProps }"}{" "}
                          <span className="text-blue-600 dark:text-blue-400">
                            from
                          </span>{" "}
                          <span className="text-orange-600 dark:text-orange-400">
                            &quot;@heroui/card&quot;
                          </span>
                          ;<br />
                          <span className="text-blue-600 dark:text-blue-400">
                            import
                          </span>{" "}
                          clsx{" "}
                          <span className="text-blue-600 dark:text-blue-400">
                            from
                          </span>{" "}
                          <span className="text-orange-600 dark:text-orange-400">
                            &quot;clsx&quot;
                          </span>
                          ;<br />
                          <br />
                          <span className="text-blue-600 dark:text-blue-400">
                            interface
                          </span>{" "}
                          <span className="text-green-600 dark:text-green-400">
                            GlassCardProps
                          </span>{" "}
                          <span className="text-blue-600 dark:text-blue-400">
                            extends
                          </span>{" "}
                          CardProps {"{"}
                          <br />
                          <span className="pl-2">
                            intensity?:{" "}
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;light&quot;
                            </span>{" "}
                            |{" "}
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;medium&quot;
                            </span>{" "}
                            |{" "}
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;heavy&quot;
                            </span>
                            ;
                          </span>
                          <br />
                          {"}"}
                          <br />
                          <br />
                          <span className="text-blue-600 dark:text-blue-400">
                            export const
                          </span>{" "}
                          <span className="text-purple-600 dark:text-purple-400">
                            GlassCard
                          </span>
                          : React.FC&lt;GlassCardProps&gt; = ({"{"}
                          <br />
                          <span className="pl-2">children,</span>
                          <br />
                          <span className="pl-2">className,</span>
                          <br />
                          <span className="pl-2">
                            intensity ={" "}
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;medium&quot;
                            </span>
                            ,
                          </span>
                          <br />
                          <span className="pl-2">...props</span>
                          <br />
                          {"}"}) =&gt; {"{"}
                          <br />
                          <span className="pl-2">
                            <span className="text-blue-600 dark:text-blue-400">
                              const
                            </span>{" "}
                            glassEffect = {"{"}
                          </span>
                          <br />
                          <span className="pl-4">
                            light:{" "}
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;bg-white/10 dark:bg-rich-black-500/10
                              backdrop-blur-sm border border-white/10
                              dark:border-rich-black-300/10&quot;
                            </span>
                            ,
                          </span>
                          <br />
                          <span className="pl-4">
                            medium:{" "}
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;bg-white/20 dark:bg-rich-black-500/20
                              backdrop-blur-md border border-white/20
                              dark:border-rich-black-300/20&quot;
                            </span>
                            ,
                          </span>
                          <br />
                          <span className="pl-4">
                            heavy:{" "}
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;bg-white/30 dark:bg-rich-black-500/30
                              backdrop-blur-md border border-white/30
                              dark:border-rich-black-300/30&quot;
                            </span>
                            ,
                          </span>
                          <br />
                          <span className="pl-2">{"}"}[intensity];</span>
                          <br />
                          <br />
                          <span className="pl-2">
                            <span className="text-blue-600 dark:text-blue-400">
                              return
                            </span>{" "}
                            (
                          </span>
                          <br />
                          <span className="pl-4">&lt;Card</span>
                          <br />
                          <span className="pl-6">className={"{"}clsx(</span>
                          <br />
                          <span className="pl-8">glassEffect,</span>
                          <br />
                          <span className="pl-8">
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;shadow-lg hover:shadow-xl transition-all
                              duration-300&quot;
                            </span>
                            ,
                          </span>
                          <br />
                          <span className="pl-8">className,</span>
                          <br />
                          <span className="pl-6">){"}"}</span>
                          <br />
                          <span className="pl-6">
                            {"{"}...props{"}"}
                          </span>
                          <br />
                          <span className="pl-4">&gt;</span>
                          <br />
                          <span className="pl-6">
                            {"{"}children{"}"}
                          </span>
                          <br />
                          <span className="pl-4">&lt;/Card&gt;</span>
                          <br />
                          <span className="pl-2">);</span>
                          <br />
                          {"}"};
                        </code>
                      </pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CardBody>
        </GlassCard>

        <GlassCard intensity="heavy">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Image Carousel Hook
            </h3>
            <p className="text-default-700">
              A reusable hook that manages image carousels with keyboard
              navigation and accessibility features.
            </p>

            {/* Collapsible Code Example */}
            <div className="mt-4">
              <button
                className="flex items-center justify-between w-full bg-default-200 dark:bg-rich-black-500 p-2 rounded-t-md hover:bg-default-300 dark:hover:bg-rich-black-400 transition-colors"
                onClick={() => toggleCodeExpand("hooks")}
              >
                <span className="font-medium text-sm">Code Example</span>
                <span
                  className="transform transition-transform duration-200"
                  style={{
                    transform: expandedCode.hooks
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {expandedCode.hooks && (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-default-100 dark:bg-rich-black-600 p-4 border border-default-200 dark:border-rich-black-400 border-t-0 rounded-b-md overflow-auto text-sm font-mono">
                      <pre className="whitespace-pre-wrap">
                        <code className="language-typescript text-xs">
                          <span className="text-green-600 dark:text-green-400" />
                          <br />
                          <span className="text-blue-600 dark:text-blue-400">
                            import
                          </span>{" "}
                          {"{ useState, useCallback }"}{" "}
                          <span className="text-blue-600 dark:text-blue-400">
                            from
                          </span>{" "}
                          <span className="text-orange-600 dark:text-orange-400">
                            &quot;react&quot;
                          </span>
                          ;<br />
                          <br />
                          <span className="text-blue-600 dark:text-blue-400">
                            export function
                          </span>{" "}
                          <span className="text-purple-600 dark:text-purple-400">
                            useImageCarousel
                          </span>
                          (images) {"{"}
                          <br />
                          <span className="pl-2">
                            <span className="text-blue-600 dark:text-blue-400">
                              const
                            </span>{" "}
                            [currentIndex, setCurrentIndex] ={" "}
                            <span className="text-purple-600 dark:text-purple-400">
                              useState
                            </span>
                            (0);
                          </span>
                          <br />
                          <br />
                          <span className="pl-2">
                            <span className="text-blue-600 dark:text-blue-400">
                              const
                            </span>{" "}
                            goToNext ={" "}
                            <span className="text-purple-600 dark:text-purple-400">
                              useCallback
                            </span>
                            (() =&gt; {"{"}
                          </span>
                          <br />
                          <span className="pl-4">
                            setCurrentIndex((prev) =&gt; (prev + 1) %
                            images.length);
                          </span>
                          <br />
                          <span className="pl-2">{"}"}, [images.length]);</span>
                          <br />
                          <br />
                          <span className="pl-2">
                            <span className="text-blue-600 dark:text-blue-400">
                              const
                            </span>{" "}
                            goToPrev ={" "}
                            <span className="text-purple-600 dark:text-purple-400">
                              useCallback
                            </span>
                            (() =&gt; {"{"}
                          </span>
                          <br />
                          <span className="pl-4">
                            setCurrentIndex((prev) =&gt; prev === 0 ?
                            images.length - 1 : prev - 1);
                          </span>
                          <br />
                          <span className="pl-2">{"}"}, [images.length]);</span>
                          <br />
                          <br />
                          <span className="pl-2">
                            <span className="text-blue-600 dark:text-blue-400">
                              return
                            </span>{" "}
                            {"{"}
                          </span>
                          <br />
                          <span className="pl-4">
                            currentImage: images[currentIndex],
                          </span>
                          <br />
                          <span className="pl-4">currentIndex,</span>
                          <br />
                          <span className="pl-4">goToNext,</span>
                          <br />
                          <span className="pl-4">goToPrev,</span>
                          <br />
                          <span className="pl-4">
                            isFirst: currentIndex === 0,
                          </span>
                          <br />
                          <span className="pl-4">
                            isLast: currentIndex === images.length - 1,
                          </span>
                          <br />
                          <span className="pl-2">{"}"};</span>
                          <br />
                          {"}"}
                        </code>
                      </pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CardBody>
        </GlassCard>

        <GlassCard intensity="heavy">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Component Testing
            </h3>
            <p className="text-default-700">
              Unit tests to verify component behavior and ensure reliability
              during development.
            </p>

            {/* Collapsible Code Example */}
            <div className="mt-4">
              <button
                className="flex items-center justify-between w-full bg-default-200 dark:bg-rich-black-500 p-2 rounded-t-md hover:bg-default-300 dark:hover:bg-rich-black-400 transition-colors"
                onClick={() => toggleCodeExpand("testing")}
              >
                <span className="font-medium text-sm">Code Example</span>
                <span
                  className="transform transition-transform duration-200"
                  style={{
                    transform: expandedCode.testing
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {expandedCode.testing && (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-default-100 dark:bg-rich-black-600 p-4 border border-default-200 dark:border-rich-black-400 border-t-0 rounded-b-md overflow-auto text-sm font-mono">
                      <pre className="whitespace-pre-wrap">
                        <code className="language-typescript text-xs">
                          <span className="text-green-600 dark:text-green-400" />
                          <br />
                          <span className="text-blue-600 dark:text-blue-400">
                            import
                          </span>{" "}
                          {"{ describe, it, expect }"}{" "}
                          <span className="text-blue-600 dark:text-blue-400">
                            from
                          </span>{" "}
                          <span className="text-orange-600 dark:text-orange-400">
                            &quot;vitest&quot;
                          </span>
                          ;<br />
                          <span className="text-blue-600 dark:text-blue-400">
                            import
                          </span>{" "}
                          {"{ render, screen }"}{" "}
                          <span className="text-blue-600 dark:text-blue-400">
                            from
                          </span>{" "}
                          <span className="text-orange-600 dark:text-orange-400">
                            &quot;@testing-library/react&quot;
                          </span>
                          ;<br />
                          <span className="text-blue-600 dark:text-blue-400">
                            import
                          </span>{" "}
                          {"{ ProjectCard }"}{" "}
                          <span className="text-blue-600 dark:text-blue-400">
                            from
                          </span>{" "}
                          <span className="text-orange-600 dark:text-orange-400">
                            &quot;./ProjectCard&quot;
                          </span>
                          ;<br />
                          <br />
                          <span className="text-purple-600 dark:text-purple-400">
                            describe
                          </span>
                          (
                          <span className="text-orange-600 dark:text-orange-400">
                            &quot;ProjectCard&quot;
                          </span>
                          , () =&gt; {"{"}
                          <br />
                          <span className="pl-2">
                            <span className="text-purple-600 dark:text-purple-400">
                              it
                            </span>
                            (
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;renders correctly&quot;
                            </span>
                            , () =&gt; {"{"}
                          </span>
                          <br />
                          <span className="pl-4">
                            <span className="text-purple-600 dark:text-purple-400">
                              render
                            </span>
                            (&lt;ProjectCard
                          </span>
                          <br />
                          <span className="pl-6">
                            title=
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;Test Project&quot;
                            </span>
                          </span>
                          <br />
                          <span className="pl-6">
                            description=
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;A test description&quot;
                            </span>
                          </span>
                          <br />
                          <span className="pl-6">
                            tags={"{"}[
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;React&quot;
                            </span>
                            ,{" "}
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;TypeScript&quot;
                            </span>
                            ]{"}"}
                          </span>
                          <br />
                          <span className="pl-6">
                            projectUrl=
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;/projects/test&quot;
                            </span>
                          </span>
                          <br />
                          <span className="pl-4">/&gt;);</span>
                          <br />
                          <br />
                          <span className="pl-4">
                            <span className="text-purple-600 dark:text-purple-400">
                              expect
                            </span>
                            (screen.getByText(
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;Test Project&quot;
                            </span>
                            )).toBeInTheDocument();
                          </span>
                          <br />
                          <span className="pl-4">
                            <span className="text-purple-600 dark:text-purple-400">
                              expect
                            </span>
                            (screen.getByText(
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;A test description&quot;
                            </span>
                            )).toBeInTheDocument();
                          </span>
                          <br />
                          <span className="pl-4">
                            <span className="text-purple-600 dark:text-purple-400">
                              expect
                            </span>
                            (screen.getByText(
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;React&quot;
                            </span>
                            )).toBeInTheDocument();
                          </span>
                          <br />
                          <span className="pl-4">
                            <span className="text-purple-600 dark:text-purple-400">
                              expect
                            </span>
                            (screen.getByText(
                            <span className="text-orange-600 dark:text-orange-400">
                              &quot;TypeScript&quot;
                            </span>
                            )).toBeInTheDocument();
                          </span>
                          <br />
                          <span className="pl-2">{"}"});</span>
                          <br />
                          {"}"});
                        </code>
                      </pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CardBody>
        </GlassCard>
      </div>
    </div>
  );
};
