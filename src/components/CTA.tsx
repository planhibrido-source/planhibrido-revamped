import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, FileText } from "lucide-react";

export const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/584140770120", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+584140770120";
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            ¿Listo para Aparecer en Google Maps?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Contáctenos hoy y comience a generar más visibilidad para su negocio local
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open("https://forms.gle/CkPyrohy1GQuYQp96", "_blank")}
              className="bg-white text-primary hover:bg-white/90 shadow-2xl group h-auto py-3 sm:py-4 px-4 sm:px-6 max-w-[90vw] sm:max-w-none"
            >
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="flex flex-col text-left leading-tight text-sm sm:text-base">
                <span>Quiero que mi negocio esté</span>
                <span>en Google desde ¡HOY!</span>
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              onClick={handleWhatsAppClick}
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: +58 414-0770120
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              onClick={handlePhoneClick}
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
