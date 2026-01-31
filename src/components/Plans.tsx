import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ClipboardList } from "lucide-react";

export const Plans = () => {
  const handleFormClick = () => {
    window.open("https://forms.gle/9q8EfPCUETcT8chH6", "_blank");
  };

  const plans = [
    {
      name: "Plan Básico",
      price: "$60(Efectivo, Zelle, Binance)",
      discountPrice: "$40 Sin dominio web",
      ideal: "Ideal para comercios con con pocos productos o solo servicios",
      features: [
        "Edición básica del Perfil de negocios de Google",
        "Precio de pago único",
        "Fotos del interior y exterior del local comercial",
        "Video desde punto de referencia",
        "Catálogo web con capacidad de hasta 3,000 productos/servicios",
        "Página informativa del negocio, imprimible, en tamaño carta y en formato .PDF",
        "Integración con redes: WhatsApp, Instagram, FaceBook, TikTok, Youtube y otras",
        "Creación de 100 Productos y/o Servicios en el perfil de negocios o en la página",
        "Dominio Web por 1 año con cerficiado SSL y alojamiento",
        "Página web de Inicio o Landing Page editable, con toda la información del local y optimizada para busquedas relacionadas a los productos y/o servicios ofrecidos",
      ],
      examples: "Panaderías, profesionales, abastos, fruterías, clinicas, hoteles y comercios en general",
      color: "primary",
    },
    {
      name: "Plan Especial",
      price: "$100(Efectivo, Zelle, Binance)",
      discountPrice: "$80 Sin dominio web",
      ideal: "Ideal para comercios complejos con inventario extenso",
      features: [
        "Todo lo incluido en el Plan Básico",
        "Edición completa del perfil de negocios de Google",
        "2 Videos desde puntos de referencia",
        "Carrito de compras al WhatsApp",
        "Creación de actualizaciones, promociones, ofertas y eventos",
        "Respaldo en la nube",
        "Inventario de hasta 18,000 items",
        "Optimización del motor de búsquedas de Google",
        "100 productos/servicios adicionales para el perfil y la página",
      ],
      examples: "Tiendas de repuestos, mercerías, zapaterias, comercios de alimentos, centros comerciales, tiendas por departamento y más",
      color: "secondary",
      featured: true,
    },
  ];

  return (
    <section id="planes" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Planes de Digitalización
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diseñados para ajustarse a locales comerciales que no aparecen en Google Maps, tanto como para los que ya aparecen pero quieren aumentar su visibilidad
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <Card 
              key={idx}
              className={`p-8 relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.featured ? 'border-2 border-secondary shadow-lg scale-105' : 'hover:-translate-y-2'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-semibold">
                  Recomendado
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary my-3">{plan.price}</div>
                  {plan.discountPrice && (
                    <div className="text-2xl font-bold animate-pulse-green my-2">{plan.discountPrice}</div>
                  )}
                  <p className="text-muted-foreground italic">{plan.ideal}</p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.color === 'primary' ? 'text-primary' : 'text-secondary'
                        }`} />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Examples */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium text-foreground mb-2">Ideal para:</p>
                  <p className="text-sm text-muted-foreground">{plan.examples}</p>
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.featured ? "secondary" : "default"}
                  size="lg"
                  className="w-full"
                  onClick={handleFormClick}
                >
                  <ClipboardList className="w-4 h-4" />
                  Contratar Plan
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-20 p-8 bg-muted/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            ¿Cuánto tiempo tarda el proceso?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">3-6 <br></br>semanas</div>
              <p className="text-sm text-muted-foreground">Verificación del negocio</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-secondary mb-2">1-3 <br></br>días</div>
              <p className="text-sm text-muted-foreground">Edición del perfil verificado.
                Página web creada</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent mb-2">3 <br></br>semanas</div>
              <p className="text-sm text-muted-foreground">Administración del perfil</p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            *El proceso completo puede tomar de 4 a 8 semanas o más dependiendo de la validación de Google
          </p>
        </div>
      </div>
    </section>
  );
};
