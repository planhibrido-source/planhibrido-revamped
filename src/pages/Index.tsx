import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Plans } from "@/components/Plans";
import { BcvBanner } from "@/components/BcvBanner";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Benefits } from "@/components/Benefits";
import { ExampleSites } from "@/components/ExampleSites";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Plans />
      <PaymentMethods />
      <BcvBanner />
      <Benefits />
      <ExampleSites />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
