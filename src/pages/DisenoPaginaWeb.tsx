import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Phone, MapPin, MessageCircle, ArrowLeft, Globe, Palette, Search, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/example-caballero.png";
import meridaSkyline from "@/assets/merida-skyline.png";

const DisenoPaginaWeb = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/584140770120?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20diseño%20de%20página%20web", "_blank");
  };

  const features = [
    { icon: Smartphone, title: "Diseño Responsivo", desc: "Su página se verá perfecta en celulares, tablets y computadoras." },
    { icon: Search, title: "Optimización SEO", desc: "Configuramos su página para aparecer en las búsquedas de Google relacionadas a su negocio en Mérida." },
    { icon: Zap, title: "Carga Rápida", desc: "Páginas ligeras y optimizadas para una experiencia fluida, incluso con conexiones lentas." },
    { icon: ShieldCheck, title: "Certificado SSL", desc: "Su página estará protegida con HTTPS, generando confianza en sus visitantes." },
    { icon: Globe, title: "Dominio Propio", desc: "Obtenga su dominio personalizado (.com, .ve) para una presencia profesional." },
    { icon: Palette, title: "Diseño Personalizado", desc: "Cada página es única, adaptada a la identidad visual de su negocio." },
  ];

  const process = [
    { step: "1", title: "Consulta Inicial", desc: "Analizamos su negocio, sus necesidades y definimos los objetivos de su página web." },
    { step: "2", title: "Diseño y Contenido", desc: "Creamos el diseño visual, organizamos los productos/servicios y redactamos el contenido optimizado." },
    { step: "3", title: "Desarrollo", desc: "Construimos su página web con tecnología moderna, responsiva y optimizada para buscadores." },
    { step: "4", title: "Publicación", desc: "Configuramos el dominio, el certificado SSL y publicamos su página lista para recibir clientes." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Diseño de Página Web en Mérida",
    "description": "Servicio profesional de diseño y desarrollo de páginas web para negocios locales en Mérida, Venezuela. Páginas optimizadas para Google con dominio propio y certificado SSL.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "PLN Mérida",
      "telephone": "+584140770120",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mérida",
        "addressCountry": "VE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Mérida"
    },
    "serviceType": "Diseño Web"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBg} alt="Diseño de Página Web en Mérida" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="container mx-auto max-w-5xl relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Soluciones de Google Maps en Mérida
            </Link>
            <div className="space-y-6 max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Diseño de Página Web en Mérida
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Creamos páginas web profesionales para negocios locales en Mérida, Venezuela. 
                Páginas rápidas, responsivas y optimizadas para que sus clientes lo encuentren en Google.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/">
                  <Button
                    variant="hero"
                    size="xl"
                    className="bg-white text-primary hover:bg-white/90 shadow-2xl group"
                  >
                    <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Soluciones en el Mapa Google
                  </Button>
                </Link>
                <Button
                  variant="hero"
                  size="xl"
                  className="group"
                  onClick={() => window.location.href = "tel:+584140770120"}
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  +58 414-0770120
                </Button>
              </div>
            </div>
          </div>
          {/* Bottom Medieval Skyline Cutout */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-[80px] sm:h-[100px] md:h-[120px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,120 L0,80
                  L40,80 L40,50 L50,50 L50,40 L55,40 L55,30 L60,30 L60,40 L65,40 L65,50 L75,50 L75,40 L80,40 L80,30 L85,30 L85,40 L90,40 L90,50 L100,50 L100,80
                  L130,80 L130,55 L135,55 L135,45 L140,45 L140,35 L143,35 L143,20 L147,20 L147,35 L150,35 L150,45 L155,45 L155,55 L160,55 L160,80
                  L200,80 L200,60 L210,60 L210,50 L215,50 L215,35 L220,25 L225,35 L230,25 L235,35 L240,25 L245,35 L245,50 L250,50 L250,60 L260,60 L260,80
                  L310,80 L310,55 L320,55 L320,40 L325,40 L325,25 L330,25 L330,15 L332,8 L334,15 L334,25 L339,25 L339,40 L344,40 L344,55 L354,55 L354,80
                  L400,80 L400,60 L410,60 L410,50 L415,50 L415,35 L420,25 L425,35 L430,25 L435,35 L440,25 L445,35 L445,50 L450,50 L450,60 L460,60 L460,80
                  L510,80 L510,65 L515,65 L515,55 L525,55 L525,45 L520,45 L520,35 L530,35 L530,45 L535,45 L535,55 L545,55 L545,65 L550,65 L550,80
                  L590,80 L590,50 L600,50 L600,40 L605,40 L605,25 L608,25 L608,10 L612,10 L612,25 L615,25 L615,40 L620,40 L620,50 L630,50 L630,80
                  L670,80 L670,55 L680,55 L680,45 L685,45 L685,30 L690,20 L695,10 L700,20 L705,30 L705,45 L710,45 L710,55 L720,55 L720,80
                  L760,80 L760,60 L770,60 L770,45 L775,45 L775,30 L780,20 L785,30 L790,20 L795,30 L800,20 L805,30 L805,45 L810,45 L810,60 L820,60 L820,80
                  L860,80 L860,65 L865,65 L865,55 L875,55 L875,45 L870,45 L870,35 L880,35 L880,45 L885,45 L885,55 L895,55 L895,65 L900,65 L900,80
                  L940,80 L940,55 L950,55 L950,40 L955,40 L955,25 L960,25 L960,15 L962,8 L964,15 L964,25 L969,25 L969,40 L974,40 L974,55 L984,55 L984,80
                  L1020,80 L1020,50 L1025,50 L1025,40 L1030,40 L1030,30 L1033,30 L1033,18 L1037,18 L1037,30 L1040,30 L1040,40 L1045,40 L1045,50 L1050,50 L1050,80
                  L1090,80 L1090,55 L1095,55 L1095,45 L1100,45 L1100,35 L1105,35 L1105,20 L1110,15 L1115,10 L1120,15 L1125,20 L1125,35 L1130,35 L1130,45 L1135,45 L1135,55 L1140,55 L1140,80
                  L1200,80 L1200,120 Z"
                className="fill-background"
              />
            </svg>
          </div>
        </section>

        {/* ¿Por qué una página web? */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                ¿Por qué su negocio en Mérida necesita una página web?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Una página web es su vitrina digital las 24 horas del día. Permite que clientes potenciales 
                conozcan sus productos y servicios, lo contacten fácilmente y confíen en su negocio antes de 
                visitarlo bien sea en el Centro, en Las Americas, en la Humboldt, en la Milagrosa, en la 
                Avenida Universidad, en la 16, en la Urdaneta, en las Tapias, en la Pedregosa, 
                en la Hechicera, en los Proceres, en los Chorros, en Santa Juana, en los Curos, en la Mata 
                o en Belenzate servimos en toda Mérida Venezuela.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              ¿Qué incluye nuestro servicio de diseño web?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                "Página web de inicio (Landing Page) profesional y editable",
                "Catálogo web con capacidad de hasta 3,000 productos/servicios",
                "Dominio propio por 1 año (.com o personalizado)",
                "Certificado SSL (HTTPS) y alojamiento web incluido",
                "Integración con WhatsApp, Instagram, Facebook y más redes",
                "Optimización SEO para búsquedas locales en Mérida",
                "Diseño adaptado a celulares y tablets (responsivo)",
                "Página informativa imprimible en formato PDF",
                "Integración con Google Maps y perfil de Google",
                "Soporte local en Mérida, Venezuela",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              Nuestro Proceso
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, idx) => (
                <div key={idx} className="text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                    {p.step}
                  </div>
                  <h3 className="font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
              Creamos Páginas Web para negocios en Mérida
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Su Negocio Merece la Mejor Página Web en Mérida. No solo lo registramos en Google; 
              creamos una identidad digital que atrae clientes reales. De lo tangible a lo virtual y 
              viceversa con resultados medibles. Incluidos en nuestros planes de digitalización, su 
              página web estará integrada con su perfil de Google Maps.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Una Página Web</h3>
                  <div className="text-3xl font-bold text-primary">$60 Anuales / $5 Mensuales</div>
                  <p className="text-sm text-muted-foreground italic">Con Dominio Web incluido</p>
                  <div className="text-xl font-bold animate-pulse-green">$40 Pago Único sin Dominio</div>
                  <p className="text-sm text-muted-foreground">
                    Ideal para comercios con pocos productos, solo servicios o con solo una categoría.
                  </p>
                  <Button variant="default" size="lg" className="w-full" onClick={handleWhatsAppClick}>
                    <MessageCircle className="w-4 h-4" />
                    Consultar por WhatsApp
                  </Button>
                </div>
              </Card>
              <Card className="p-8 border-2 border-secondary shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-semibold">
                  Recomendado
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Varias Páginas Web Interelacionadas</h3>
                  <div className="text-3xl font-bold text-primary">$120 Anuales / $10 Mensuales</div>
                  <p className="text-sm text-muted-foreground italic">Con Dominio Web incluido</p>
                  <div className="text-xl font-bold animate-pulse-green">$80 Pago Único sin Dominio</div>
                  <p className="text-sm text-muted-foreground">
                    Ideal para comercios con inventario extenso o con más de dos categorías. Incluye optimización SEO avanzada.
                  </p>
                  <Button variant="secondary" size="lg" className="w-full" onClick={handleWhatsAppClick}>
                    <MessageCircle className="w-4 h-4" />
                    Consultar por WhatsApp
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              ¿Listo para tener su página web profesional?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Contáctenos hoy y comience a recibir clientes desde Internet. Atención local en Mérida, Venezuela.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={handleWhatsAppClick}
                className="bg-white text-primary hover:bg-white/90 shadow-2xl group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                WhatsApp: +58 414-0770120
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default DisenoPaginaWeb;
