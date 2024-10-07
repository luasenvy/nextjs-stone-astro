import classnames from "classnames";

import Link from "@/components/ViewTransitionLink";

const pricing = [
  {
    name: "Basic",
    description: "For development, staging, and small production projects.",
    periodicity: "/month",
    price: "$10",
    action: "Buy Now",
    features: ["5 Seats", "1,000 Projects", "Lifetime access", "Community Support"],
  },
  {
    name: "Pro",
    description: "For high-scale and mission critical projects.",
    isFlagged: true,
    periodicity: "/month",
    price: "$25",
    action: "Buy Now",
    features: ["10 Seats", "10,000 Projects", "Lifetime access", "Email Support", "Free updates"],
  },
  {
    name: "Team",
    description: "For teams with more security, support, and performance needs.",
    periodicity: "",
    price: "Custom",
    action: "Buy Now",
    features: [
      "Unlimited Seats",
      "Unlimited Projects",
      "Lifetime access",
      "Email and Chat Support",
      "High-Performance",
      "Free updates",
    ],
  },
];

export default function PciringTable() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="-mt-8 grid gap-8 lg:mt-0 lg:grid-cols-3">
          {pricing.map((item, i) => (
            <div
              key={`pricing-${i}`}
              className={classnames("relative flex flex-col gap-8 rounded-3xl p-8", {
                "bg-primary-500/10 dark:bg-primary-400/10": item.isFlagged,
              })}
            >
              <div className="flex-1">
                <h2 className="text-xl font-medium">{item.name}</h2>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-medium tracking-tight">{item.price}</span>
                  <span className="text-primary-950/70 dark:text-primary-200/70 ml-1 text-sm font-medium">
                    {item.periodicity}
                  </span>
                </p>
                <p className="text-primary-950/70 dark:text-primary-200/70 mt-6">
                  {item.description}
                </p>

                <ul role="list" className="mt-6 space-y-6">
                  {item.features.map((feature, i) => (
                    <li key={`feature-${i}`} className="flex gap-3">
                      <svg
                        className="text-primary-600 dark:text-primary-400 h-6 w-6 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#"
                className="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex w-full items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Buy now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
