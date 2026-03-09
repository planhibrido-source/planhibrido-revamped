import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, MessageCircle, ArrowLeft, Globe, Palette, Search, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { ExampleSites } from "@/components/ExampleSites";
import heroBg from "@/assets/example-caballero.png";
import meridaSkyline from "@/assets/merida-skyline.png";
import mapaMerida from "@/assets/mapa-merida.png";
import procesoPln from "@/assets/proceso-pln.png";
import parchmentBg from "@/assets/parchment-bg.png";
import parchmentScroll from "@/assets/parchment-scroll.png";
import parchmentScrollDesktop from "@/assets/parchment-scroll-desktop.png";
import waxSealCheck from "@/assets/wax-seal-check.png";
import parchmentPricing from "@/assets/parchment-pricing.png";
import parchmentCard from "@/assets/parchment-card.png";
import whatsappSeal from "@/assets/whatsapp-seal.png";
import sealGoogleMaps from "@/assets/seal-google-maps.png";
import sealCall from "@/assets/seal-call.png";
import wallBg from "@/assets/wall-bg.png";
import whatsappDoor from "@/assets/whatsapp-door.png";
import googleDoor from "@/assets/google-door.png";
import sealBlue from "@/assets/seal-blue.png";
import serviciosBasicos from "@/assets/servicios-basicos.png";
import serviciosAvanzados from "@/assets/servicios-avanzados.png";

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
    { step: "1", title: "Asesoría Gratis", desc: "Nos reunimos con usted sin compromiso para conocer su negocio, evaluar su presencia digital y diseñar una estrategia personalizada." },
    { step: "2", title: "Recolectamos sus Datos", desc: "Recopilamos toda la información de su negocio: horarios, ubicación, productos, servicios y datos de contacto para crear su perfil completo." },
    { step: "3", title: "Fotos Comerciales", desc: "Visitamos su negocio y tomamos fotografías profesionales de su local, productos y servicios para mostrar lo mejor de su empresa." },
    { step: "4", title: "Desarrollo Web", desc: "Diseñamos y programamos su página web personalizada, optimizada para móviles y preparada para posicionarse en Google." },
    { step: "5", title: "Su Negocio en Google", desc: "Publicamos su negocio en Google Maps y Google Search para que los clientes lo encuentren fácilmente desde cualquier dispositivo." },
    { step: "6", title: "Resultados Medibles", desc: "Le presentamos métricas reales de rendimiento: visitas, llamadas y solicitudes de dirección generadas desde su perfil digital." },
    { step: "7", title: "Hoja Informativa", desc: "Creamos y colocamos un material impreso con el código QR de su página web y perfil de Google en su negocio para atraer más visitas." },
    { step: "8", title: "Mayor Visibilidad", desc: "Sus clientes potenciales descubren su negocio tanto en línea como en persona gracias a la estrategia digital y física integrada." },
    { step: "9", title: "Nuevos Clientes", desc: "Su negocio comienza a recibir llamadas, visitas y ventas reales gracias a su presencia digital profesional y optimizada." },
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
            <div className="absolute inset-0" style={{ backgroundColor: '#D4C5A0', opacity: 0.7 }} />
          </div>
          <div className="container mx-auto max-w-5xl relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-[#3B2F1E]/80 hover:text-[#3B2F1E] mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Soluciones de Google Maps en Mérida
            </Link>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-pirata text-[#1C4378] leading-tight">
                Diseño de Página Web en Mérida, Venezuela
              </h1>
              <p className="text-2xl font-vt323 text-[#1a1a1a] leading-relaxed max-w-3xl">
                Creamos una página web profesional optimizada para su negocio local en Mérida, Venezuela. 
                Página web rápida, moderna, accesible, segura y optimizada para que sus clientes lo encuentren en Google.
              </p>
              <div className="flex flex-col items-end gap-6 pt-4 pb-16 sm:pb-20 md:pb-24 relative z-30">
                <Link to="/" className="flex items-center gap-4 hover:scale-105 transition-transform">
                  <span className="text-2xl sm:text-3xl font-pirata text-[#1C4378] drop-shadow-sm">Soluciones Google Maps</span>
                  <img src={sealGoogleMaps} alt="Soluciones Google Maps" className="w-30 h-30 sm:w-35 sm:h-35 object-contain" style={{ width: '8.75rem', height: '8.75rem' }} />
                </Link>
                <a href="tel:+584140770120" className="flex items-center gap-4 hover:scale-105 transition-transform">
                  <span className="text-2xl sm:text-3xl font-mono text-[#3B2F1E] drop-shadow-sm">Contacto al 0414-077.01.20</span>
                  <img src={sealCall} alt="Llamar +58 414-0770120" className="object-contain" style={{ width: '8.75rem', height: '8.75rem' }} />
                </a>
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
                  L30,80 L30,50 L40,50 L40,40 L45,40 L45,30 L50,30 L50,40 L55,40 L55,50 L65,50 L65,40 L70,40 L70,30 L75,30 L75,40 L80,40 L80,50 L90,50 L90,80

                  L120,80 L120,55 L125,55 L125,40 L130,40 L130,25 L135,15 L140,25 L145,15 L150,25 L150,40 L155,40 L155,55 L160,55 L160,80

                  L200,80 L200,60 L210,60 L210,45 L215,45 L215,30 L218,30 L218,12 L220,5 L222,12 L222,30 L225,30 L225,45 L230,45 L230,60 L240,60 L240,80

                  L280,80 L280,65 L285,65 L285,55 L290,55 L290,48 L295,42 L300,38 L305,42 L310,48 L310,55 L315,55 L315,65 L320,65 L320,80

                  L360,80 L360,50 L365,50 L365,40 L370,40 L370,30 L373,22 L375,12 L377,22 L380,30 L380,40 L385,40 L385,50 L390,50 L390,80

                  L430,80 L430,60 L435,60 L435,50 L440,50 L440,35 L445,25 L448,18 L450,10 L452,18 L455,25 L460,35 L460,50 L465,50 L465,60 L470,60 L470,80

                  L510,80 L510,55 L515,55 L515,45 L525,45 L525,30 L530,20 L535,30 L540,20 L545,30 L545,45 L555,45 L555,55 L560,55 L560,80

                  L600,80 L600,65 L605,65 L605,55 L610,55 L610,48 L615,42 L620,38 L625,42 L630,48 L630,55 L635,55 L635,65 L640,65 L640,80

                  L680,80 L680,50 L690,50 L690,40 L695,40 L695,25 L698,25 L698,10 L702,10 L702,25 L705,25 L705,40 L710,40 L710,50 L720,50 L720,80

                  L760,80 L760,55 L765,55 L765,40 L770,40 L770,28 L775,20 L778,14 L780,8 L782,14 L785,20 L790,28 L790,40 L795,40 L795,55 L800,55 L800,80

                  L840,80 L840,60 L845,60 L845,50 L850,50 L850,35 L853,35 L853,15 L855,8 L857,15 L857,35 L860,35 L860,50 L865,50 L865,60 L870,60 L870,80

                  L910,80 L910,65 L915,65 L915,55 L920,55 L920,48 L925,42 L930,38 L935,42 L940,48 L940,55 L945,55 L945,65 L950,65 L950,80

                  L990,80 L990,55 L995,55 L995,45 L1005,45 L1005,30 L1010,20 L1015,30 L1020,20 L1025,30 L1025,45 L1035,45 L1035,55 L1040,55 L1040,80

                  L1080,80 L1080,60 L1085,60 L1085,50 L1090,50 L1090,38 L1095,38 L1095,25 L1098,18 L1100,10 L1102,18 L1105,25 L1105,38 L1110,38 L1110,50 L1115,50 L1115,60 L1120,60 L1120,80

                  L1200,80 L1200,120 Z"
                className="fill-background"
              />
            </svg>
          </div>
        </section>

        {/* ¿Por qué una página web? */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Parchment background image */}
          <div className="absolute inset-0" style={{ backgroundImage: `url(${parchmentBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-12 space-y-4">
               <h2 className="text-3xl sm:text-4xl font-pirata text-[#1C4378]">
                ¿Por qué su negocio necesita una página web en Mérida?
               </h2>
              <p className="text-xl font-vt323 text-foreground max-w-3xl mx-auto">
                Una página web es su vitrina digital las 24 horas del día. Permite que clientes potenciales 
                conozcan sus productos y servicios, lo contacten fácilmente y confíen en su negocio antes de 
                visitarlo bien sea en el Centro, en Las Americas, en la Humboldt, en la Milagrosa, en la 
                Avenida Universidad, en la Avenida 16, en la Avenida Urdaneta, en las Tapias, en la Pedregosa, 
                en la Hechicera, en los Proceres, en los Chorros, en Santa Juana, en los Curos, en la Mata, en 
                Zumba, en la Avenida Andres Bello o en Belenzate quienes busquen información relacionada a su
                negocio lo encuentran con mayor facilidad en toda Mérida, Venezuela.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 backdrop-blur-sm" style={{ backgroundColor: "hsl(39 40% 93% / 0.7)", borderColor: "hsl(30 30% 70% / 0.4)" }}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <f.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-pirata text-2xl text-[#1C4378]">{f.title}</h3>
                    </div>
                    <p className="text-lg font-vt323 text-foreground">{f.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          {/* Mobile background */}
          <div 
            className="absolute inset-0 md:hidden" 
            style={{ 
              backgroundImage: `url(${parchmentScroll})`, 
              backgroundSize: "contain", 
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat" 
            }} 
          />
          {/* Desktop/tablet background */}
          <div 
            className="absolute inset-0 hidden md:block" 
            style={{ 
              backgroundImage: `url(${parchmentScrollDesktop})`, 
              backgroundSize: "contain", 
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat" 
            }} 
          />
          <div className="container mx-auto max-w-2xl px-2 sm:px-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-pirata text-[#1C4378] text-center mb-12">
              ¿Qué incluye nuestro<br />servicio de diseño web?
            </h2>
            <div className="flex flex-col gap-2 items-center">
              {[
                "Página web de inicio (Landing Page) profesional y editable",
                "Catálogo web con capacidad de hasta 3,000 productos/servicios",
                "Dominio de pago anual o mensual (.com o personalizado)",
                "Integración con Google Maps y perfil de Google",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-2">
                  <img src={waxSealCheck} alt="✓" className="w-12 h-12 flex-shrink-0" />
                  <span className="text-lg font-vt323 text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mapa de Mérida */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-pirata text-[#1C4378]">
              Atención presencial en Mérida, Venezuela
            </h2>
            <img
              src={mapaMerida}
              alt="Mapa de la Ciudad de Mérida, Venezuela"
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src={serviciosBasicos}
                alt="Servicios de Edición Básicos - Nombre, Dirección, Categoría, Vínculos a Redes, Fotos Comerciales"
                className="w-full rounded-lg shadow-xl"
              />
              <img
                src={serviciosAvanzados}
                alt="Servicios de Edición Avanzados - Verificación, Experiencias, Optimización SEO, Videos Comerciales"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-pirata text-[#1C4378] text-center mb-4 tracking-wider">
              Proceso de Inclusión en la Plataforma de Google
            </h2>
             <p className="text-center text-xl font-vt323 text-foreground mb-12 max-w-2xl mx-auto">
              Nuestro proceso paso a paso para llevar su negocio de la era de los caballeros a la era digital
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Imagen del proceso */}
              <div className="flex justify-center lg:sticky lg:top-8">
                <img
                  src={procesoPln}
                  alt="Proceso de inclusión en la plataforma de Google - 9 pasos ilustrados con temática medieval"
                  className="w-full max-w-sm rounded-lg shadow-2xl"
                />
              </div>

              {/* Pasos del proceso */}
              <div className="flex flex-col justify-between gap-2">
                {process.map((p, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: 'rgba(212, 197, 160, 0.7)' }}>
                    <div className="relative w-[4.2rem] h-[4.2rem] flex-shrink-0 flex items-center justify-center">
                      <img src={sealBlue} alt="" className="absolute inset-0 w-full h-full object-contain" />
                      <span className="relative font-pirata text-xl font-bold text-yellow-300 animate-[pulse_3s_ease-in-out_infinite]">{p.step}</span>
                    </div>
                    <div>
                      <h3 className="font-pirata text-[#1C4378] text-[30px] tracking-wide">{p.title}</h3>
                      <p className="text-[25px] font-vt323 text-foreground mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ExampleSites />

        {/* Precios */}
        <div className="bg-primary py-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-pirata text-white text-center max-w-5xl mx-auto">
            🔥Precios de Páginas Web para negocios en Mérida🔥
          </h2>
        </div>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <p className="text-center text-xl font-vt323 text-foreground mb-12 max-w-2xl mx-auto">
              Su Negocio Merece la Mejor Página Web en Mérida. No solo lo registramos en Google; 
              creamos una identidad digital que atrae clientes reales. De lo tangible a lo virtual y 
              viceversa con resultados medibles. Incluidos en nuestros planes de digitalización, su 
              página web estará integrada con su perfil de Google Maps.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Card 1 */}
              <div className="relative hover:scale-[1.02] transition-transform duration-300">
                <img src={parchmentCard} alt="" className="w-full h-auto block" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-12 space-y-3">
                  <h3 className="text-2xl font-pirata text-[#1C4378] text-center">Una Página Web</h3>
                  <div className="text-xl font-bold animate-pulse-red">$60 Anuales / $5 Mensuales</div>
                  <p className="text-lg font-vt323 text-[#3B2F1E] italic">Con Dominio Web incluido</p>
                  <div className="text-xl font-bold animate-pulse-green">$40 Pago Único sin Dominio</div>
                  <p className="text-lg font-vt323 text-[#3B2F1E] text-center">
                    Ideal para comercios con pocos productos, solo servicios o con solo una categoría.
                  </p>
                  <a href="https://wa.me/584140770120" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-1 hover:scale-105 transition-transform pt-2 whitespace-nowrap">
                    <span className="font-pirata text-base text-[#3B2F1E]">Comencemos por WhatsApp</span>
                    <img src={whatsappSeal} alt="Consultar por WhatsApp" className="w-[5rem] h-[5rem] object-contain" />
                  </a>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative hover:scale-[1.02] transition-transform duration-300">
                <img src={parchmentCard} alt="" className="w-full h-auto block" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-12 space-y-3">
                  <h3 className="text-2xl font-pirata text-[#1C4378] text-center">Hasta 10 Páginas Web Interelacionadas</h3>
                  <div className="text-xl font-bold animate-pulse-darkblue">$120 Anuales / $10 Mensuales</div>
                  <p className="text-lg font-vt323 text-[#3B2F1E] italic">Con Dominio Web incluido</p>
                  <div className="text-xl font-bold animate-pulse-green">$80 Pago Único sin Dominio</div>
                  <p className="text-lg font-vt323 text-[#3B2F1E] text-center">
                    Ideal para comercios con inventario extenso o con más de dos categorías. Incluye optimización SEO avanzada.
                  </p>
                  <a href="https://wa.me/584140770120" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-1 hover:scale-105 transition-transform pt-2 whitespace-nowrap">
                    <span className="font-pirata text-base text-[#3B2F1E]">Comencemos por WhatsApp</span>
                    <img src={whatsappSeal} alt="Consultar por WhatsApp" className="w-[5rem] h-[5rem] object-contain" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-96 lg:pt-[40rem] pb-0 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={wallBg} alt="" className="w-full h-full object-cover object-top" />
          </div>
          <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
             <h2 className="text-4xl sm:text-5xl font-pirata text-white leading-tight" style={{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 2px 2px 4px rgba(0,0,0,0.5)' }}>
               ¿Ya lo convencimos de tener al menos una Página Web con catálogo y con el nombre de su negocio en el dominio desde $5 al BCV cada mes?
             </h2>
              <div className="relative rounded-2xl px-6 py-5 max-w-2xl mx-auto overflow-hidden">
                <img src={tablasImg} alt="" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
                <p className="relative z-10 text-2xl font-vt323 text-white/90 drop-shadow-md">
                  Contáctenos hoy para resolver cualquier duda y así lo ayudamos a recibir más clientes con Google, 
                  una tecnología sostenible, limpia y rápida. Haga clic en la puerta para recibir una asesoría presencial<span className="font-bold animate-[twinkle-colors_8s_ease-in-out_infinite]"> ¡GRATIS!</span>
                </p>
              </div>
          </div>
          <div className="relative z-10 flex justify-center mt-8 mb-0">
            <a href="https://forms.gle/6d5WQyuHYGefB4qe6" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
              <img src={googleDoor} alt="Contactar por WhatsApp" className="w-full max-w-[96rem] object-contain" />
            </a>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default DisenoPaginaWeb;
