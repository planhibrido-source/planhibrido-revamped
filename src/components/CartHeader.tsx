import { ShoppingCart, Trash2, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoPln from "@/assets/logo-pln.png";

export const CartHeader = () => {
  const { items, removeItem, clear } = useCart();
  const [open, setOpen] = useState(false);

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;
    const lines = items
      .map(
        (it, idx) =>
          `${idx + 1}. ${it.name} — ${it.modality}: ${it.priceLabel}`
      )
      .join("%0A");
    const message = `Hola,%20me%20interesa%20realizar%20el%20siguiente%20pedido:%0A%0A${lines}%0A%0A¿Podrían%20darme%20más%20información?`;
    window.open(`https://wa.me/584247228020?text=${message}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1C4378] border-b-4 border-yellow-600 shadow-lg">
      <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <img src={logoPln} alt="PLN Mérida" className="h-10 w-auto" />
          <span className="font-pirata text-xl sm:text-2xl text-yellow-300">
            PLN Mérida
          </span>
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="relative flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#1C4378] font-pirata text-lg px-4 py-2 rounded-lg transition shadow-md">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Carrito</span>
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="font-pirata text-2xl text-[#1C4378]">
                Su Pedido
              </SheetTitle>
            </SheetHeader>

            <div className="mt-6 space-y-3">
              {items.length === 0 && (
                <p className="text-muted-foreground font-vt323 text-lg">
                  Su carrito está vacío. Agregue servicios desde la lista.
                </p>
              )}
              {items.map((it, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg p-3 flex items-start justify-between gap-2 bg-amber-50"
                >
                  <div>
                    <h4 className="font-pirata text-[#1C4378] text-lg leading-tight">
                      {it.name}
                    </h4>
                    <p className="text-sm font-vt323 text-foreground">
                      {it.modality}
                    </p>
                    <p className="text-sm font-bold text-green-700">
                      {it.priceLabel}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(idx)}
                    className="text-red-600 hover:text-red-800 p-1"
                    aria-label="Eliminar"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className="mt-6 space-y-2">
                <Button
                  onClick={handleSendWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-pirata text-lg py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Pedido por WhatsApp
                </Button>
                <Button
                  onClick={clear}
                  variant="outline"
                  className="w-full"
                >
                  Vaciar Carrito
                </Button>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
