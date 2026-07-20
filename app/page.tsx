import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Help } from "@/components/site/help";
import { Recommendations } from "@/components/site/recommendations";
import { Benefits } from "@/components/site/benefits";
import { Blog } from "@/components/site/blog";
import { Testimonials } from "@/components/site/testimonials";
import { Footer } from "@/components/site/footer";
import { ScrollTop } from "@/components/site/scroll-top";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Help />
        <Recommendations />
        <Benefits />
        <Blog />
        <Testimonials />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
