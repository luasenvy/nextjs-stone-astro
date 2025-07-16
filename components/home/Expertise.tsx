"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const features = [
  {
    id: "expertise-1",
    name: "Digital Experience Platforms",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    id: "expertise-2",
    name: "Web & Mobile Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    id: "expertise-3",
    name: "Serverless Computing Platforms",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    id: "expertise-4",
    name: "Build & Test Automation Tools",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    id: "expertise-5",
    name: "Artificial Intelligence",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    id: "expertise-6",
    name: "Full project support",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
];

export function Expertise() {
  const [selected, setSelected] = useState<number>();

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <h2 className="font-medium text-3xl tracking-tight sm:text-4xl">Expertise</h2>
          <div className="lg:col-span-2">
            <dl className="-mt-3">
              {features.map((feature, i) => {
                const isOpen = i === selected;
                const isNextOpen = i + 1 === selected;
                return (
                  <div
                    key={i}
                    className={cn("rounded-3xl px-4 transition", {
                      "bg-primary-500/10 dark:bg-primary-400/10": isOpen,
                    })}
                  >
                    <dt
                      className={cn("border-b text-lg transition", {
                        "border-transparent": isOpen || isNextOpen,
                        "border-primary-900/10 dark:border-primary-300/10": !isOpen && !isNextOpen,
                      })}
                    >
                      <button
                        type="button"
                        className="group block w-full py-6 text-left transition focus-visible:outline-none"
                        aria-controls={feature.id}
                        onClick={() => setSelected(i)}
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center justify-between rounded-3xl group-focus-visible:outline-2 group-focus-visible:outline-primary-950 group-focus-visible:outline-offset-2 dark:group-focus-visible:outline-primary-200">
                          <span className="font-medium">{feature.name}</span>
                          <span className="ml-6 flex h-7 items-center">
                            <svg
                              className={cn(
                                "h-6 w-6 rotate-0 transform text-primary-600 transition duration-200 ease-in-out dark:text-primary-400",
                                { "-rotate-180": isOpen, "rotate-0": !isOpen },
                              )}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" />
                            </svg>
                          </span>
                        </div>
                      </button>
                    </dt>
                    <dd className={cn("pr-6 pb-6", { hidden: !isOpen })} id={feature.id}>
                      <p className="text-base text-primary-950/70 dark:text-primary-200/70">
                        {feature.description}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
