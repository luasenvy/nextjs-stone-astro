import Link from "next/link";

import DfeaultLayout from "./(default)/layout";

export default function NotFoundError() {
  return (
    <DfeaultLayout>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col items-start gap-8 sm:gap-10">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                <div>404</div>
                <div>Page not found</div>
              </h1>
              <p className="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl">
                Please check the URL in the address bar and try again.
              </p>
            </div>

            <Link
              href="/"
              className="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Go back home
            </Link>
          </div>
        </div>
      </section>
    </DfeaultLayout>
  );
}
