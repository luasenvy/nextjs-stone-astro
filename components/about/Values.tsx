import { cn } from "@/lib/utils";

const values = [
  [
    {
      ref: "01",
      name: "Excellence",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      ref: "02",
      name: "Innovation",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
  ],
  [
    {
      ref: "03",
      name: "Teamwork",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      ref: "04",
      name: "Respect",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
  ],
];

export function Values() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-8 lg:gap-12">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Our Values</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {values.map((column, i) => (
              <div key={`column-${i}`} className={cn("space-y-8", { "lg:mt-16": i === 1 })}>
                {column.map((value, i) => (
                  <div
                    key={`column-value-${i}`}
                    className="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col gap-12 rounded-3xl px-6 py-8"
                  >
                    <p className="text-sm">{value.ref}</p>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-medium">{value.name}</h3>
                      <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
