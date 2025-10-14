import { Card } from "@/components/ui/card";
import { MapPinned, Camera, Star, Globe, Link2, Image, Video, Search } from "lucide-react";

export const Services = () => {
  const basicServices = [
    { icon: MapPinned, title: "Nombre y Dirección", desc: "Configuración completa de ubicación" },
    { icon: Star, title: "Categoría", desc: "Clasificación óptima del negocio" },
    { icon: Link2, title: "Vínculos a Redes", desc: "Integración con redes sociales" },
    { icon: Image, title: "Fotos del Local", desc: "Exterior e interior profesional" },
  ];

  const advancedServices = [
    { icon: Search, title: "Verificación", desc: "Proceso completo de validación" },
    { icon: Camera, title: "Foto 360°", desc: "Tour virtual del ambiente" },
    { icon: Star, title: "Experiencias", desc: "Gestión de reseñas de clientes" },
    { icon: Globe, title: "Optimización SEO", desc: "Mejor posicionamiento en búsquedas" },
    { icon: Video, title: "Video Referencia", desc: "Contenido visual desde puntos clave" },
    { icon: MapPinned, title: "Ubicación Exacta", desc: "Precisión en el mapa de Google" },
  ];

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prestamos servicios a locales comerciales para gestionar y optimizar su presencia en Google
          </p>
        </div>

        {/* Basic Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Servicios de Edición Básicos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {basicServices.map((service, idx) => (
              <Card 
                key={idx}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Services */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Servicios de Edición Avanzados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedServices.map((service, idx) => (
              <Card 
                key={idx}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Otros Servicios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="font-medium text-foreground">Desarrollo de Página Web</p>
            </div>
            <div className="p-4">
              <p className="font-medium text-foreground">Desarrollo de Sitio Web</p>
            </div>
            <div className="p-4">
              <p className="font-medium text-foreground">Desarrollo de App Web</p>
            </div>
            <div className="p-4">
              <p className="font-medium text-foreground">Catálogo en Mercadolibre</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
