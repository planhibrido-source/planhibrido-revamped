import { Card } from "@/components/ui/card";
import { Globe, Link2 } from "lucide-react";
import plnMerida from "@/assets/pln-merida.png";
import exampleCaballero from "@/assets/torre-caballero.png";

export const ExampleSites = () => {
  const sitesWithDomain = [
    {
      name: "Mediclinic C.A.",
      url: "https://www.mediclinicme.com/",
      description: "Centro médico de diagnóstico por imágenes en Mérida"
    },
    {
      name: "Industria Du Prince",
      url: "https://www.industriaduprince.com/",
      description: "Fabricantes de Lencería Hotelera"
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
    <section className="relative">
      {/* Parallax Header */}
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden flex items-center justify-center">
        
        {/* Imagen para MÓVIL - visible solo en pantallas pequeñas */}
        <img 
          src={exampleCaballero} 
          alt="Caballero medieval" 
          className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
        />
        
        {/* Background con parallax para DESKTOP - oculto en móvil */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed hidden md:block"
          style={{ backgroundImage: `url('${exampleCaballero}')` }}
        />
        
        {/* Gradient overlay - siempre visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-6">
          <div className="max-w-3xl text-left">
            <h2 className="text-xl lg:text-3xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Pirata One', cursive" }}>
              De la Era de los Caballeros a la <span className="font-bold animate-google-colors">Era Digital</span>.
            </h2>
            
            <div className="w-20 h-1 bg-primary mb-6"></div>
            
            <p className="text-lg lg:text-2xl text-gray-200 leading-relaxed drop-shadow-md" style={{ fontFamily: "'VT323', monospace" }}>
              Encuentre algunos ejemplos de páginas web recientes que hemos creado para nuestros clientes en{" "}
              <span className="font-semibold text-white underline decoration-primary/50">Mérida, Venezuela</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Sites Content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          {/* With Domain */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Pirata One', cursive" }}>
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
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" style={{ fontFamily: "'Pirata One', cursive" }}>
                          {site.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2" style={{ fontFamily: "'VT323', monospace" }}>{site.description}</p>
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
              <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Pirata One', cursive" }}>
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
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors" style={{ fontFamily: "'Pirata One', cursive" }}>
                          {site.name}
                        </h4>
                        <p className="text-sm text-muted-foreground" style={{ fontFamily: "'VT323', monospace" }}>{site.description}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Info Note */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-border text-center">
            <p className="text-muted-foreground" style={{ fontFamily: "'VT323', monospace" }}>
              <span className="font-semibold text-foreground">💡 Nota:</span> Los sitios sin dominio son 
              una opción ideal para negocios que buscan presencia web económica, sin gasto anual, rápidos 
              de gestionar y al acceder pero presentan limitaciones de busqueda y visualización de estadisticas, 
              la página web puede estar visible desde el día uno en la internet (como esta página) más no en Google, 
              ya que es un proceso que puede tardar semanas dependiendo de multiples factores que van desde herramientas 
              pagas hasta el tipo de códificación y el proposito. Es por eso que hemos perfeccionado el proceso para 
              obtener resultados más "rápidos" <span className="font-bold animate-pulse-blue">al adquirir un dominio web</span>, que genera un retorno sobre la inversión n
              veces  mayor cada año en condiciones normales a un precio justo con gestión e incorporación de certificados 
              de seguridad y demás configuraciones relacionadas. Invierta más en su negocio y goce de los beneficios desde
              hoy en adelante, gracias por su tiempo.
            </p>
          </div>
        </div>
      </div>

      {/* Second Parallax Section - Mobile fallback */}
      <div className="relative w-full h-[30vh] min-h-[250px] overflow-hidden flex items-center justify-center">
        {/* Background para desktop */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-fixed bg-scroll hidden md:block"
          style={{ backgroundImage: `url('${plnMerida}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        {/* Imagen para móvil */}
        <img 
          src={exampleAngel} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent md:hidden"></div>
        
        <div className="relative z-20 container mx-auto px-6 text-center">
          <p className="text-xl lg:text-2xl text-white font-medium drop-shadow-lg" style={{ fontFamily: "'VT323', monospace" }}>
            ⛔💵 Vamos hasta su negocio ¡Sin Costo! Si leyó bien, ¡Gratis! Estamos para servirle a los que no conocemos aún y nos necesitan 😎
          </p>
        </div>
      </div>
    </section>
  );
};
