
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="relative z-10">
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mx-auto">Bienvenue au 7SEVEN LOUNGE</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mt-4 mb-8">
            Découvrez notre restaurant et salon de thé au cœur de Reims.
            Un lieu chaleureux où déguster des plats savoureux, des boissons rafraîchissantes et profiter d'un moment de détente avec nos chichas.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-restaurant-50 rounded-lg p-6 shadow-md max-w-xs">
              <div className="text-restaurant-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cuisine Savoureux</h3>
              <p className="text-gray-600">Une carte variée avec des plats préparés avec soin pour satisfaire toutes vos envies.</p>
            </div>
            <div className="bg-restaurant-50 rounded-lg p-6 shadow-md max-w-xs">
              <div className="text-restaurant-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.5V10a2 2 0 00-2-2H5a2 2 0 00-2 2v5.5M21 15.5a2 2 0 01-2 2H5a2 2 0 01-2-2M3 15.5v1.5a2 2 0 002 2h14a2 2 0 002-2v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Chicha Premium</h3>
              <p className="text-gray-600">Une sélection de chichas de qualité avec différents parfums pour s'adapter à tous les goûts.</p>
            </div>
            <div className="bg-restaurant-50 rounded-lg p-6 shadow-md max-w-xs">
              <div className="text-restaurant-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ambiance Unique</h3>
              <p className="text-gray-600">Un décor élégant et une atmosphère conviviale pour des moments inoubliables.</p>
            </div>
          </div>
        </div>
      </div>
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
