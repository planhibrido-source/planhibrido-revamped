import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ClipboardList } from "lucide-react";
import { useEffect, useRef } from "react";

const MatrixTitle = ({ text, color = "blue" }: { text: string; color?: "blue" | "green" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const blueShades = ["#00bfff", "#1e90ff", "#4169e1", "#00cfff", "#87cefa"];
    const greenShades = ["#00ff41", "#39ff14", "#32cd32", "#00e676", "#76ff03"];

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const shades = color === "green" ? greenShades : blueShades;
      ctx.fillStyle = shades[Math.floor(Math.random() * shades.length)];
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, [color]);

  const textClass = color === "green"
    ? "text-green-400 drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
    : "text-sky-400 drop-shadow-[0_0_10px_rgba(0,191,255,0.5)]";

  return (
    <div ref={containerRef} className="relative inline-block px-6 py-4 rounded-xl overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full rounded-xl" />
      <h2 className={`relative z-10 text-4xl sm:text-5xl font-bold ${textClass}`}>
        {text}
      </h2>
    </div>
  );
};

const MatrixPlanName = ({ text, theme = "green" }: { text: string; theme?: "green" | "orange" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const shades = theme === "orange"
      ? ["#ff8c00", "#ff6600", "#ffa500", "#ff4500", "#ffae42"]
      : ["#00ff41", "#39ff14", "#32cd32", "#00e676", "#76ff03"];

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = shades[Math.floor(Math.random() * shades.length)];
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  const textClass = theme === "orange"
    ? "text-orange-400 drop-shadow-[0_0_8px_rgba(255,140,0,0.5)]"
    : "text-green-400 drop-shadow-[0_0_8px_rgba(0,255,0,0.5)]";

  return (
    <div ref={containerRef} className="relative inline-block px-4 py-2 rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full rounded-lg" />
      <h3 className={`relative z-10 text-2xl font-bold ${textClass}`}>
        {text}
      </h3>
    </div>
  );
};

export const Plans = () => {
  const handleFormClick = () => {
    window.open("https://forms.gle/9q8EfPCUETcT8chH6", "_blank");
  };

  const plans = [
    {
      name: "Plan Básico: Una Página Web + Cátalogo",
      price: "$60 Anuales/$5 Mensuales: Con Dominio Web",
      discountPrice: "$40 de Pago Único: Sin Dominio Web",
      ideal: "Ideal para comercios con con pocos productos, solo servicios o con menos de 3 categorías",
      features: [
        "Edición básica del Perfil de negocios de Google",
        "Fotos del interior y exterior del local comercial",
        "Video desde punto de referencia",
        "Catálogo web con capacidad de hasta 3,000 productos/servicios",
        "Página informativa del negocio, imprimible, en tamaño carta y en formato .PDF",
        "Integración con redes: WhatsApp, Instagram, FaceBook, TikTok, Youtube y otras",
        "Creación de 100 Productos y/o Servicios en el perfil de negocios o en la página",
        "Dominio Web por 1 año con certificado SSL y alojamiento",
        "Página web de Inicio o Landing Page editable, con toda la información del local y optimizada para búsquedas relacionadas a sus productos y/o servicios",
      ],
      examples: "Panaderías, Gimnasios, líneas de taxi, profesionales, abastos, fruterías, hoteles y comercios en general",
      color: "primary",
    },
    {
      name: "Plan Especial: Hasta 10 Páginas Web + Cátalogo",
      price: "$120 Anuales/$10 Mensuales: Con Dominio Web",
      discountPrice: "$80 de Pago Único: Sin Dominio Web",
      ideal: "Ideal para comercios con inventario extenso o con más de 2 categorías",
      features: [
        "Todo lo incluido en el Plan Básico",
        "Edición completa del perfil de negocios de Google",
        "2 Videos desde puntos de referencia",
        "Redirección al WhatsApp",
        "Creación de actualizaciones, promociones, ofertas y eventos",
        "Respaldo en la nube",
        "Optimización del motor de búsquedas de Google",
        "100 productos adicionales para el perfil y la página",
      ],
      examples: "Tiendas de repuestos, clínicas, zapaterias, comercios de alimentos, centros comerciales, tiendas por departamento y más",
      color: "secondary",
      featured: true,
    },
  ];

  return (
    <section id="planes" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <MatrixTitle text="Planes de Digitalización" />
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
                  <MatrixPlanName text={plan.name} />
                  <div className="text-2xl font-bold animate-pulse-blue my-3">{plan.price}</div>
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
                Crear Página Web</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent mb-2">3 <br></br>semanas</div>
              <p className="text-sm text-muted-foreground">Administración del perfil. Aparecer en Google</p>
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
