import Link from "next/link";

export function Cta() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center gap-8 rounded-3xl bg-primary-500/10 px-5 py-16 sm:gap-10 dark:bg-primary-400/10">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="font-medium text-3xl tracking-tight sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-950/70 dark:text-primary-200/70">
              Please describe your case to receive the most accurate advice.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 font-medium text-base text-white transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 dark:bg-primary-400 dark:text-primary-950 dark:focus-visible:outline-primary-400 dark:hover:bg-primary-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
