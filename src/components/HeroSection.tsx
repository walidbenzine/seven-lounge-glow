
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-24 h-24 rounded-full bg-restaurant-200/30 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-restaurant-300/20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-restaurant-400/20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className={`max-w-2xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-serif">
              Bienvenue chez<br />
              <span className="font-cursive text-5xl md:text-6xl lg:text-7xl text-white">7SEVEN LOUNGE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Une ambiance unique, des plats savoureux et un moment de détente assuré dans notre restaurant et salon de thé à Reims. Chicha et restauration sur place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0749500638" className="button-primary">
                📞 Réserver au 07 49 50 06 38
              </a>
              <a href="#menu" className="button-outlined text-white border-white hover:bg-white hover:text-restaurant-600">
                Découvrir le menu
              </a>
            </div>
          </div>
          
          <div className={`mt-10 lg:mt-0 max-w-md transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-xl blur-md -z-10"></div>
              <img 
                src="/lovable-uploads/05058f9f-079a-439e-a1d4-b78ad989571e.png" 
                alt="Plat signature 7SEVEN LOUNGE" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
