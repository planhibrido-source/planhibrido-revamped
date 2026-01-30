import logoBcv from "@/assets/logo-bcv.jpg";

export const BcvBanner = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="relative flex items-center justify-center">
          {/* BCV Logo Image */}
          <div className="relative">
            <img 
              src={logoBcv} 
              alt="Logo BCV" 
              className="w-48 h-48 sm:w-64 sm:h-64 object-contain rounded-full shadow-lg"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl sm:text-8xl font-black animate-twinkle-yellow drop-shadow-lg">
                30%+
              </span>
            </div>
          </div>
        </div>
        <p className="text-center text-muted-foreground mt-6 text-lg">
          Pago en bolívares a tasa BCV + 30% o más
        </p>
      </div>
    </section>
  );
};
