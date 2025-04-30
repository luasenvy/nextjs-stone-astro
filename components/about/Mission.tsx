import Image from "next/image";

import AboutImage from "@/public/assets/about.webp";

const stats = [
  {
    name: "Years",
    value: "9",
  },
  {
    name: "Experts",
    value: "15",
  },
  {
    name: "Projects",
    value: "122",
  },
  {
    name: "Awards",
    value: "9",
  },
];

export function Mission() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Image
            className="mx-auto h-auto w-full max-w-xl rounded-3xl"
            width="576"
            height="864"
            src={AboutImage}
            alt="Our experts working together"
          />
          <div className="flex flex-col gap-10">
            <div className="space-y-8 sm:space-y-12">
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Our mission</h2>
              <div className="space-y-6">
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
                  consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu
                  morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae
                  fames senectus vitae.
                </p>
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem
                  nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet
                  quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis
                  elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut
                  volutpat donec laoreet quam urna.
                </p>
                <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies.
                  Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum
                  consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
                  fermentum lacus in. Viverra.
                </p>
              </div>
            </div>

            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {stats.map((stat, i) => (
                <div
                  key={`stat-${i}`}
                  className="border-primary-900/10 dark:border-primary-300/10 rounded-3xl border p-6"
                >
                  <dt className="text-base">{stat.name}</dt>
                  <dd className="text-3xl font-medium tracking-tight">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
