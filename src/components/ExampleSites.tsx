import { Card } from "@/components/ui/card";
import { Globe, Link2 } from "lucide-react";

export const ExampleSites = () => {
  const sitesWithDomain = [
    {
      name: "MediClinic ME",
      url: "https://www.mediclinicme.com/",
      description: "Clínica médica profesional"
    },
    {
      name: "Industria Duprince",
      url: "https://www.industriaduprince.com/",
      description: "Empresa industrial"
    }
  ];

  const sitesWithoutDomain = [
    {
      name: "Toallas Deportivas Mérida",
      url: "https://sites.google.com/view/toallasdeportivasmerida/toallas",
      description: "Tienda Online de toallas"
    },
    {
      name: "Trolemoto La 16",
      url: "https://sites.google.com/view/trolemoto-la-16-ca/repuestos-motos-merida",
      description: "Repuestos para motos"
    },
    {
      name: "Rapifrenos La 16",
      url: "https://sites.google.com/view/rapifrenosla16",
      description: "Servicio de frenos automotriz"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Ejemplos de Sitios Web
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mira algunos ejemplos de páginas web que hemos creado para nuestros clientes
          </p>
        </div>

        {/* With Domain */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">
              Con Dominio Propio
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sitesWithDomain.map((site, idx) => (
              <a
                key={idx}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {site.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">{site.description}</p>
                      <p className="text-xs text-primary truncate">{site.url}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Without Domain */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Link2 className="w-8 h-8 text-secondary" />
            <h3 className="text-2xl font-bold text-foreground">
              Sin Dominio <span className="animate-pulse-green">(Más Económico)</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sitesWithoutDomain.map((site, idx) => (
              <a
                key={idx}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border group">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Link2 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                        {site.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{site.description}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Info Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-border text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">💡 Nota:</span> Los sitios sin dominio son 
            una opción ideal para negocios que buscan presencia web económica.
          </p>
        </div>
      </div>
    </section>
  );
};
