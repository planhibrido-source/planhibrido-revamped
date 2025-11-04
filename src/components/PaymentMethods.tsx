import { Card } from "@/components/ui/card";
import { DollarSign, CreditCard, Repeat } from "lucide-react";

export const PaymentMethods = () => {
  const methods = [
    {
      icon: DollarSign,
      title: "De Contado",
      description: "Divisas en efectivo, Zelle o Binance",
      color: "primary",
    },
    {
      icon: CreditCard,
      title: "Por Partes",
      options: [
        "3 partes de $20 c/u o 6 partes de $20 c/u",
        "6 partes de $10 c/u o 12 partes de $10 c/u",
      ],
      color: "secondary",
    },
    {
      icon: Repeat,
      title: "Intercambio",
      description: "Productos y/o servicios equivalentes a $60 o $120 según el plan",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Formas de Pago
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos múltiples opciones de pago para facilitar tu digitalización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {methods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <Card
                key={idx}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    method.color === 'primary' ? 'bg-primary/10' :
                    method.color === 'secondary' ? 'bg-secondary/10' :
                    'bg-accent/10'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      method.color === 'primary' ? 'text-primary' :
                      method.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground">
                    {method.title}
                  </h3>
                  
                  {method.description && (
                    <p className="text-muted-foreground">
                      {method.description}
                    </p>
                  )}
                  
                  {method.options && (
                    <div className="space-y-2 w-full">
                      {method.options.map((option, oIdx) => (
                        <div
                          key={oIdx}
                          className="p-3 bg-muted/50 rounded-lg text-sm text-foreground"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
