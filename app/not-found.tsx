import Link from "next/link";

import DefaultLayout from "./(default)/layout";

export default function NotFoundError() {
  return (
    <DefaultLayout>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col items-start gap-8 sm:gap-10">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h1 className="font-medium text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                <div>404</div>
                <div>Page not found</div>
              </h1>
              <p className="text-lg text-primary-950/70 sm:text-xl dark:text-primary-200/70">
                Please check the URL in the address bar and try again.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 font-medium text-base text-white transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 dark:bg-primary-400 dark:text-primary-950 dark:focus-visible:outline-primary-400 dark:hover:bg-primary-300"
            >
              Go back home
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
