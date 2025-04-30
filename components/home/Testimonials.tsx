import Image from "next/image";

import Testimonial1Image from "@/public/assets/testimonial-1.webp";
import Testimonial2Image from "@/public/assets/testimonial-2.webp";
import Testimonial3Image from "@/public/assets/testimonial-3.webp";

const testimonials = [
  {
    name: "Rebecca Hayes",
    description: "Designer",
    image: Testimonial1Image,
    message:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
  },
  {
    name: "Rosa Spencer",
    description: "Team Leader",
    image: Testimonial2Image,
    message:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
  },
  {
    name: "Christina Upton",
    description: "Manager",
    image: Testimonial3Image,
    message:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <div className="v mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:gap-20">
          <h2 className="mx-auto max-w-xl text-center text-3xl font-medium tracking-tight sm:text-4xl">
            Trusted by the largest companies in the world
          </h2>
          <div className="divide-primary-900/10 dark:divide-primary-300/10 grid divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {testimonials.map((testimonial, i) => (
              <figure
                key={`testimonial-${i}`}
                className="mx-auto flex max-w-lg flex-col items-center gap-6 py-8 lg:px-8 lg:py-0"
              >
                <div className="flex flex-row gap-2">
                  {[...Array(3)].map((_, i) => (
                    <svg
                      key={`icon-${i}`}
                      className="text-primary-600 dark:text-primary-400 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-primary-950/70 dark:text-primary-200/70 text-center text-lg leading-loose italic">
                  <p>{testimonial.message}</p>
                </blockquote>
                <figcaption className="flex flex-col gap-4">
                  <Image className="mx-auto h-8 w-8 rounded-full" src={testimonial.image} alt="" />
                  <div className="text-center">
                    <div className="text-base font-medium">{testimonial.name}</div>
                    <div className="text-primary-950/70 dark:text-primary-200/70 text-sm">
                      {testimonial.description}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
