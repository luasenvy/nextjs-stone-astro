export function ContactForm() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="font-medium text-3xl tracking-tight sm:text-4xl">Let's work together</h2>
            <p className="max-w-lg text-lg text-primary-950/70 sm:text-xl dark:text-primary-200/70">
              We'd love to learn more about you and what we can build together.
            </p>
          </div>
          <form action="#" method="POST" className="mt-3 flex flex-col gap-y-6">
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="name"
                className="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-4 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:focus:ring-primary-400 dark:hover:ring-primary-400 dark:placeholder:text-primary-200/60"
                placeholder="Full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-4 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:focus:ring-primary-400 dark:hover:ring-primary-400 dark:placeholder:text-primary-200/60"
                placeholder="Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={3}
                className="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-4 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:focus:ring-primary-400 dark:hover:ring-primary-400 dark:placeholder:text-primary-200/60"
                placeholder="Message"
              ></textarea>
            </div>

            <div>
              <button
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 font-medium text-base text-white transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 dark:bg-primary-400 dark:text-primary-950 dark:focus-visible:outline-primary-400 dark:hover:bg-primary-300"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
