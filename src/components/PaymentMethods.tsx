import { Card } from "@/components/ui/card";
import { DollarSign, CreditCard, Repeat } from "lucide-react";
import paymentCash from "@/assets/payment-cash.jpg";
import paymentInstallments from "@/assets/payment-installments.jpg";
import paymentExchange from "@/assets/payment-exchange.jpg";

export const PaymentMethods = () => {
  const methods = [
    {
      icon: DollarSign,
      title: "De Contado",
      description: "Divisas en efectivo, Zelle o Binance",
      color: "primary",
      image: paymentCash,
    },
    {
      icon: CreditCard,
      title: "Por Partes",
      options: [
        "PLaN Básico en 3 partes de $20 o en 6 partes de $10",
        "PLaN Especial en 12 partes de $10 o 6 partes de $20",
      ],
      color: "secondary",
      image: paymentInstallments,
    },
    {
      icon: Repeat,
      title: "Intercambio P2P",
      description: "Por productos y/o servicios equivalentes a $60 por el PLaN Básico y $120 por el PLaN Especial",
      color: "accent",
      image: paymentExchange,
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
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="flex flex-col space-y-4">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={method.image} 
                      alt={method.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
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
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
