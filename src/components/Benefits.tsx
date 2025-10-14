import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users, Shield } from "lucide-react";
import growthImg from "@/assets/benefit-growth.jpg";
import visibilityImg from "@/assets/benefit-visibility.jpg";

export const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Mayor Visibilidad Local",
      description: "Aparece en las búsquedas de Google Maps cuando los clientes buscan servicios como el tuyo en tu área.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Sostenible",
      description: "Posicionamiento escalable en el tiempo con presencia permanente en el buscador #1 del mundo.",
    },
    {
      icon: Users,
      title: "Conexión con Clientes",
      description: "Facilita que clientes interesados encuentren tu negocio con precisión y accedan a información útil.",
    },
    {
      icon: Shield,
      title: "Seguridad Digital",
      description: "Transformación digital segura y adaptada a las necesidades de tu negocio con soporte especializado.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos especialistas en tecnologías digitales enfocados en aportar soluciones efectivas
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => (
            <Card 
              key={idx}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Visual Impact Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={visibilityImg} 
              alt="Mayor visibilidad local" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Más Clientes Te Encuentran</h3>
                <p className="text-white/90">Aumenta tu visibilidad en Google Maps</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={growthImg} 
              alt="Crecimiento sostenible" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Crece Tu Negocio</h3>
                <p className="text-white/90">Posicionamiento escalable y medible</p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center max-w-4xl mx-auto space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            Juntos nos concentramos en generar más notoriedad al negocio de acuerdo a sus necesidades y a las de sus clientes.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Ayudamos a Google a organizar la información disponible para hacerla accesible y útil para aquellos que muestren interés en los productos y/o servicios que el negocio tiene para ofrecer en la localidad con visualización global.
          </p>
        </div>
      </div>
    </section>
  );
};
