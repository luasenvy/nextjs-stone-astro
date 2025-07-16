"use client";

import Image from "next/image";

import Link from "next/link";
import { useEffect, useState } from "react";

import getTheme from "@/lib/getTheme";
import LogoImage from "@/public/assets/logo.svg";
import LogoInvertedImage from "@/public/assets/logo-inverted.svg";

const bottomLinks = [
  {
    header: "Social",
    links: [
      {
        name: "Github",
        href: "https://github.com/",
        isExternal: true,
      },
      {
        name: "Twitter",
        href: "https://twitter.com/",
        isExternal: true,
      },
      {
        name: "Instagram",
        href: "https://instagram.com/",
        isExternal: true,
      },
      {
        name: "Facebook",
        href: "https://facebook.com/",
        isExternal: true,
      },
    ],
  },
  {
    header: "Company",
    links: [
      {
        name: "Home",
        href: "/",
        isExternal: false,
      },
      {
        name: "About",
        href: "/about",
        isExternal: false,
      },
      {
        name: "Pricing",
        href: "/pricing",
        isExternal: false,
      },
      {
        name: "Contact",
        href: "/contact",
        isExternal: false,
      },
    ],
  },
  {
    header: "Legal",
    links: [
      {
        name: "Privacy",
        href: "/privacy",
        isExternal: false,
      },
      {
        name: "404",
        href: "/404",
        isExternal: false,
      },
      {
        name: "Styleguide",
        href: "/styleguide",
        isExternal: false,
      },
    ],
  },
];

export function Footer() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark("dark" === getTheme());
  }, []);

  return (
    <footer
      className="mt-16 bg-primary-500/10 py-16 lg:mt-20 lg:py-20 dark:bg-primary-400/10"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col justify-between gap-12 sm:gap-16 lg:flex-row">
          <div className="flex max-w-sm flex-col items-start gap-6 sm:gap-8">
            <Image
              className="h-8 w-auto"
              width="65"
              height="40"
              src={isDark ? LogoInvertedImage : LogoImage}
              alt="Stone"
            />
            <p className="text-base text-primary-950/70 dark:text-primary-200/70">
              Stone is a premium Astro theme specially designed for Business, Marketing, SaaS and
              Startup websites.
            </p>
            <p className="text-primary-950/70 text-sm dark:text-primary-200/70">
              &copy; 2023 Stone
            </p>

            <p className="text-primary-950/70 text-xs dark:text-primary-200/70">
              Created by{" "}
              <Link
                href="https://github.com/m6v3l9/astro-theme-stone"
                rel="nofollow noopner"
                target="_blank"
                className="font-semibold hover:underline"
              >
                m6v3l9
              </Link>{" "}
              &amp; writed nextjs by{" "}
              <Link
                className="font-semibold hover:underline"
                target="_blank"
                rel="nofollow noopner"
                href="https://www.luas.kr"
              >
                luasenvy
              </Link>
            </p>
          </div>

          <div className="grid max-w-xl flex-1 grid-cols-1 gap-8 sm:grid-cols-3">
            {bottomLinks.map((group, i) => (
              <div key={`buttom-link-${i}`} className="flex flex-col gap-4">
                <p className="font-medium text-base">{group.header}</p>
                <ul role="list" className="flex flex-col gap-3">
                  {group.links.map((link, i) => (
                    <li key={`group-link-${i}`}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1 rounded-md text-base hover:underline focus-visible:outline-2 focus-visible:outline-primary-950 dark:focus-visible:outline-primary-200"
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener" : undefined}
                      >
                        {link.name}
                        {link.isExternal && (
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z" />
                          </svg>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
