import { Button } from "@/components/ui/button";
import { Phone, MapPin, TrendingUp, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-google-maps.jpg";
import { useState, useEffect } from "react";

const CountUp = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 8000; // 8 seconds - much slower
    const steps = 100;
    const increment = end / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}+</>;
};

export const Hero = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+584140770120";
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Google Maps para negocios locales" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/90" />
      </div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20 animate-fade-in">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Mérida, Venezuela</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Posicionamiento Local de Negocios en{" "}
            <span className="bg-gradient-to-r from-white to-secondary-foreground bg-clip-text text-transparent">
              Google Maps
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Generamos notoriedad de lo Tangible 🌍 a lo Virtual 💻📱🔄
          </p>

          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Somos la solución para registrar su negocio en los mapas de Google. 
            Incluimos negocios en el buscador #1 del mundo para que alcancen un mayor potencial comercial.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleCallClick}
              className="group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              0414-07.70.120
            </Button>
            
            <Button 
              asChild
              size="xl"
              className="bg-[#25D366] hover:bg-[#1da851] text-white border-0"
            >
              <Link to="/precios">
                <MessageCircle className="w-5 h-5" />
                Ver Precios
              </Link>
            </Button>

            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <TrendingUp className="w-5 h-5" />
              Ver Planes
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                <CountUp end={100} />
              </div>
              <div className="text-white/80 text-sm">Negocios Registrados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">⭐ 5.0</div>
              <div className="text-white/80 text-sm">Calificación Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2-8 sem</div>
              <div className="text-white/80 text-sm">Tiempo del Proceso</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
