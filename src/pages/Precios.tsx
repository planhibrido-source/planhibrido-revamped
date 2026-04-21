import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartHeader } from "@/components/CartHeader";
import { MatrixMedievalBg } from "@/components/MatrixMedievalBg";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useCart } from "@/contexts/CartContext";
import parchmentCard from "@/assets/blank-scroll.jpg";

type Service = {
  servicio: string;
  descripcion: string;
  precioUnico: string;
  precioAnual: string;
  precioMensual: string;
  precioSemanal: string;
  solicitarVisita: string;
};

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnW9u9aB4ZxlcURqrX56r1yrTQWds2vKxlOG-chH2YhfnI2gZfw00JPm-es39JJgdWFxXY9Z0hORok/pub?output=csv";

// Simple CSV parser supporting quoted fields with commas
const parseCSV = (text: string): string[][] => {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cell += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ",") {
        row.push(cell);
        cell = "";
      } else if (c === "\n") {
        row.push(cell);
        rows.push(row);
        row = [];
        cell = "";
      } else if (c === "\r") {
        // ignore
      } else {
        cell += c;
      }
    }
  }
  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
};

const formatPrice = (val: string) => {
  if (!val) return "—";
  const trimmed = val.trim();
  if (/^incluido/i.test(trimmed)) return trimmed;
  if (/^consultar/i.test(trimmed)) return "Consultar";
  if (trimmed.startsWith("$")) return trimmed;
  return `$${trimmed}`;
};

const Precios = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    fetch(SHEET_URL)
      .then((r) => r.text())
      .then((text) => {
        const rows = parseCSV(text).filter((r) => r.some((c) => c.trim()));
        const data = rows.slice(1).map((r) => ({
          servicio: r[0] || "",
          descripcion: r[1] || "",
          precioUnico: r[2] || "",
          precioAnual: r[3] || "",
          precioMensual: r[4] || "",
          precioSemanal: r[5] || "",
          solicitarVisita: r[6] || "",
        }));
        setServices(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  const modalities: { key: keyof Service; label: string }[] = [
    { key: "precioUnico", label: "Pago Único (Sin Dominio)" },
    { key: "precioAnual", label: "Anual (Con Dominio)" },
    { key: "precioMensual", label: "Mensual (Con Dominio)" },
    { key: "precioSemanal", label: "Semanal (Con Dominio)" },
  ];

  const handleAdd = (s: Service, modKey: keyof Service, modLabel: string) => {
    const raw = s[modKey] as string;
    addItem({
      id: `${s.servicio}-${modKey}`,
      name: s.servicio,
      modality: modLabel,
      priceLabel: formatPrice(raw),
    });
  };

  return (
    <>
      <CartHeader />
      <div className="min-h-screen bg-background">
        {/* Hero con Matrix medieval azul */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <MatrixMedievalBg />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto max-w-5xl relative z-10 text-center space-y-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-100 transition mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-pirata text-sky-400 leading-tight"
              style={{
                textShadow:
                  "0 0 12px rgba(0,191,255,0.7), 0 0 24px rgba(30,144,255,0.5)",
              }}
            >
              Precios de Nuestros Servicios
            </h1>
            <p className="text-2xl font-vt323 text-sky-200 max-w-3xl mx-auto leading-relaxed">
              Seleccione los servicios que necesita y envíenos su pedido
              directamente por WhatsApp.
            </p>
          </div>
        </section>

        {/* Lista de servicios */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            {loading && (
              <p className="text-center font-vt323 text-xl">
                Cargando servicios...
              </p>
            )}
            {error && (
              <p className="text-center text-red-600 font-vt323 text-xl">
                Error al cargar: {error}
              </p>
            )}

            <div className="columns-1 md:columns-2 gap-8 [column-fill:_balance]">
              {services.map((s, idx) => (
                <article
                  key={idx}
                  className="relative rounded-xl overflow-hidden shadow-xl mb-8 break-inside-avoid"
                  style={{
                    backgroundImage: `url(${parchmentCard})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="p-6 sm:p-8 backdrop-blur-[1px]">
                    <h2 className="font-pirata text-3xl sm:text-4xl text-[#1C4378] mb-4 leading-tight">
                      {s.servicio}
                    </h2>
                    <p className="font-vt323 text-[1.0625rem] text-foreground leading-relaxed mb-6">
                      {s.descripcion}
                    </p>

                    {(() => {
                      const desc = (s.descripcion || "").trim();
                      // "Sólo precios" = la descripción está vacía o consiste mayormente en cifras/símbolos monetarios
                      const onlyPrices =
                        !desc ||
                        /^[\s\d$.,\-/$€¥£%]+$/.test(desc) ||
                        (desc.replace(/[\d$.,\-/$€¥£%\s]/g, "").length < 10);
                      if (!onlyPrices) return null;
                      return (
                        <a
                          href="https://wa.me/584124373887?text=Hola%2C%20deseo%20solicitar%20una%20visita%20o%20asesor%C3%ADa%20gratis%20sobre%20el%20servicio%3A%20"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#1da851] text-white font-pirata transition"
                        >
                          <CalendarCheck className="w-4 h-4" />
                          Solicitar Visita o Asesoría Gratis
                        </a>
                      );
                    })()}

                    <div className="space-y-2">
                      {modalities.map((m) => {
                        const val = s[m.key] as string;
                        if (!val || !val.trim()) return null;
                        const isIncluded = /^incluido/i.test(val.trim());
                        return (
                          <div
                            key={m.key}
                            className="flex items-center justify-between gap-3 bg-amber-50/70 rounded-lg p-3 border border-amber-200"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="font-pirata text-sm text-[#1C4378]">
                                {m.label}
                              </p>
                              <p className="font-vt323 text-xl font-bold text-[#C00000]">
                                {formatPrice(val)}
                              </p>
                            </div>
                            <Button
                              onClick={() => handleAdd(s, m.key, m.label)}
                              disabled={isIncluded}
                              className="bg-green-600 hover:bg-green-700 text-white font-pirata"
                              size="sm"
                            >
                              <Plus className="w-4 h-4 mr-1" />
                              Agregar
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FloatingWhatsApp />
        <Footer />
      </div>
    </>
  );
};

export default Precios;
