import Image from "next/image";

import Team1Image from "@/public/assets/team-1.webp";
import Team2Image from "@/public/assets/team-2.webp";
import Team3Image from "@/public/assets/team-3.webp";

const team = [
  {
    name: "Floyd Lowe",
    image: Team1Image,
    job: "Senior Designer",
  },
  {
    name: "Emma Dorsey",
    image: Team2Image,
    job: "Principal Designer",
  },
  {
    name: "Emily Mitchell",
    image: Team3Image,
    job: "Senior Developer",
  },
];

export function Team() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:space-8 space-y-12">
          <h2 className="font-medium text-3xl tracking-tight sm:text-4xl">Meet our team</h2>
          <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((item, i) => (
              <li
                key={`team-${i}`}
                className="rounded-3xl border border-primary-900/10 px-6 py-8 dark:border-primary-300/10"
              >
                <div className="space-y-6">
                  <Image
                    className="mx-auto h-auto w-16 rounded-full"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="text-center">
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-base text-primary-950/70 dark:text-primary-200/70">
                      {item.job}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
