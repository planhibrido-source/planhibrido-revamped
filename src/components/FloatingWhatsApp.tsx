import selloWa from "@/assets/sello-flotante-wa.png";

export const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/584240770120", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 z-50 w-20 h-20 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none"
      aria-label="Contactar por WhatsApp"
    >
      <img src={selloWa} alt="WhatsApp" className="w-full h-full object-contain drop-shadow-2xl" />
    </button>
  );
};
