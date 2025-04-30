import { About } from "@/components/home/About";
import { Cta } from "@/components/home/Cta";
import { Expertise } from "@/components/home/Expertise";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Expertise />
      <About />
      <Testimonials />
      <Cta />
    </>
  );
}
