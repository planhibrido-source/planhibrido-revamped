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
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="absolute bottom-4 left-0 right-0 z-10 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm px-2">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-white">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Respuesta Rápida</span>
            </div>
            <a 
              href="https://forms.gle/F9ZdA4YqWj1c9NnA6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-white hover:scale-105 transition-transform animate-[twinkle-colors_8s_ease-in-out_infinite]"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'currentColor' }} />
              <span className="font-bold uppercase">Obtener Asesoría Gratuita</span>
            </a>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-white">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Especialistas Certificados</span>
            </div>
          </div>
          <img src={exampleAngel} alt="Ejemplo de trabajo PLN Mérida" className="w-full rounded-lg shadow-2xl" />
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
