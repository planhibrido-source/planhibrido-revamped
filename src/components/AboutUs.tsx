import { Target, Lightbulb, MapPin, Search, Palette, Rocket } from "lucide-react";

const objectives = [
  {
    icon: Rocket,
    title: "Digitalización Integral",
    description: "Facilitar la transición de las tiendas físicas hacia plataformas digitales modernas y funcionales.",
  },
  {
    icon: Palette,
    title: "Identidad con Propósito",
    description: "Desarrollar marcas con una narrativa visual sólida que resalte los valores y la historia de los negocios merideños.",
  },
  {
    icon: Search,
    title: "Posicionamiento Local",
    description: "Implementar estrategias de SEO y marketing geolocalizado para asegurar que los clientes encuentren lo que buscan justo donde se encuentran.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Utilizar herramientas de vanguardia para ofrecer soluciones de diseño y desarrollo web de alto impacto.",
  },
];

export const AboutUs = () => {
  return (
    <section id="nosotros" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto max-w-5xl">
        {/* Quiénes Somos */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            ¿Quiénes Somos?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Somos una iniciativa innovadora nacida en el corazón de los Andes venezolanos, dedicada a cerrar la brecha entre el comercio tradicional y la era digital. En PLN Mérida, nos especializamos en la digitalización de negocios físicos, fusionando la calidez del trato presencial con el alcance y la eficiencia tecnológica de la web. Como arquitectos digitales y especialistas en marketing, ayudamos a los empresarios de Mérida a proyectar su identidad local hacia un entorno global.
          </p>
        </div>

        {/* Misión */}
        <div className="bg-card rounded-2xl shadow-lg p-8 mb-12 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Nuestra Misión</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Transformar el ecosistema comercial de Mérida a través de un modelo híbrido que potencie la visibilidad, la confianza y la competitividad de las empresas locales. Creemos que la tradición no está reñida con la innovación, sino que ambas pueden coexistir para generar un crecimiento sostenible.
          </p>
        </div>

        {/* Objetivos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Objetivos Estratégicos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {objectives.map((obj) => (
              <div
                key={obj.title}
                className="bg-card rounded-xl shadow-md p-6 border border-border flex gap-4"
              >
                <obj.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">{obj.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ubicación */}
        <div className="bg-card rounded-2xl shadow-lg p-8 border border-border text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">¿Dónde Estamos?</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Estamos orgullosamente ubicados en el Centro de la ciudad de Mérida, Venezuela. Desde este punto estratégico, trabajamos mano a mano con los comerciantes y emprendedores que dan vida a nuestra región, con el firme compromiso de impulsar la economía local mediante la tecnología.
          </p>
        </div>
      </div>
    </section>
  );
};
