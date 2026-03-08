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
import exampleAngel from "@/assets/example-angel.jpg";

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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <img src={exampleAngel} alt="Ejemplo de trabajo PLN Mérida" className="w-full rounded-lg shadow-2xl" />
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
