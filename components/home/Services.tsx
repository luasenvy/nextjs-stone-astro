const services = [
  {
    step: "01",
    name: "Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    step: "02",
    name: "Develop",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    step: "03",
    name: "Maintain",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Services</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col gap-12 rounded-3xl px-6 py-8"
              >
                <p className="text-sm">{service.step}</p>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-medium">{service.name}</h3>
                  <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
