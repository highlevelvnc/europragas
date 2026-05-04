import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Pests } from "@/components/sections/Pests";
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
        <Pests />
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
