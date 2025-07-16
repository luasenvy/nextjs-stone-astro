import Link from "next/link";

export function About() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <h2 className="font-medium text-3xl tracking-tight sm:text-4xl">About</h2>
          <div className="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
            <p className="text-base text-primary-950/70 sm:text-lg dark:text-primary-200/70">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
              suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor
              cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
              ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
              perferendis suscipit eaque, iste dolor cupiditate.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 font-medium text-base text-white transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 dark:bg-primary-400 dark:text-primary-950 dark:focus-visible:outline-primary-400 dark:hover:bg-primary-300"
            >
              Read about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
