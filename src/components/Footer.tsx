import { MapPin, Phone, Mail } from "lucide-react";
import logoPlnImage from "@/assets/logo-pln.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">PLN Mérida</h3>
            <p className="text-background/80 text-sm">
              Posicionamiento Local de Negocios en Google Maps
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+584140770120" className="hover:text-secondary transition-colors">
                  +58 414-0770120
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <a 
                  href="https://www.google.com/maps/place/M%C3%A9rida/@8.5926885,-71.20883,13z/data=!4m6!3m5!1s0x8e648721ba42e8dd:0x5df63fea56d56c66!8m2!3d8.5698244!4d-71.1804988!16s%2Fm%2F02wzm2d?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Mérida, Venezuela
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Administración del Perfil de Google</li>
              <li>Verificación de Negocios</li>
              <li>Optimización de busquedas locales</li>
              <li>Desarrollo Web: Páginas, sitios y Apps</li>
              <li>Diseño Gráfico</li>
              <li>Fotografía Comercial:</li>
              <li>Fotografía de Interiores</li>
              <li>Fotografía de Exteriores</li>
              <li>Fotografía de Personal</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20">
          {/* Back to Top Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 px-6 py-3 bg-background text-foreground rounded-lg hover:bg-background/90 transition-all hover:scale-105 shadow-lg"
              aria-label="Volver arriba"
            >
              <img src={logoPlnImage} alt="PLN Logo" className="w-8 h-8" />
              <span className="font-semibold">Volver arriba</span>
              <span className="text-xl">⬆️</span>
            </button>
          </div>
          
          <div className="text-center text-sm text-background/60">
            <p>&copy;2023-{new Date().getFullYear()} PLN Mérida Venezuela. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
