import Image from "next/image";

import Link from "next/link";

import HeroImage from "@/public/assets/hero.webp";

export function Hero() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-start gap-8 sm:gap-10">
            <div className="flex max-w-xl flex-col items-start gap-4 sm:gap-6">
              <h1 className="font-medium text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                We design and build your next digital experience
              </h1>
              <p className="text-lg text-primary-950/70 sm:text-xl dark:text-primary-200/70">
                Anim aute id magna aliqua ad ad non deserunt sunt.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 font-medium text-base text-white transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 dark:bg-primary-400 dark:text-primary-950 dark:focus-visible:outline-primary-400 dark:hover:bg-primary-300"
            >
              Get started
            </Link>
          </div>
          <Image
            className="h-auto w-full rounded-3xl"
            width="1280"
            height="640"
            src={HeroImage}
            alt="Hero picture"
          />
        </div>
      </div>
    </section>
  );
}
