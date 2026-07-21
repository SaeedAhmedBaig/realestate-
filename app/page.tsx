import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Help } from "@/components/site/help";
import { Recommendations } from "@/components/site/recommendations";
import { Benefits } from "@/components/site/benefits";
import { Blog } from "@/components/site/blog";
import { Testimonials } from "@/components/site/testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Help />
      <Recommendations />
      <Benefits />
      <Blog />
      <Testimonials />
    </main>
  );
}
