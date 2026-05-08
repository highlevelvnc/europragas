import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Pests } from "@/components/sections/Pests";
import { Cases } from "@/components/sections/Cases";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Business } from "@/components/sections/Business";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Pests />
        <Cases />
        <Services />
        <WhyUs />
        <Process />
        <Business />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
