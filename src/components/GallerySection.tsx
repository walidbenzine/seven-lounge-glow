
const GallerySection = () => {
  const images = [
    {
      src: "/seven-lounge-glow/lovable-uploads/fe721c63-d4a9-4148-bc7c-329ec063d006.png",
      alt: "Restaurant 7SEVEN LOUNGE"
    },
    {
      src: "/seven-lounge-glow/lovable-uploads/burger coca.jpg",
      alt: "Burger et Coca"
    },
    {
      src: "/seven-lounge-glow/lovable-uploads/burger.jpg",
      alt: "Burger"
    },
    {
      src: "/seven-lounge-glow/lovable-uploads/nems.jpg",
      alt: "Nems"
    },
    {
      src: "/seven-lounge-glow/lovable-uploads/2f6a8043-6a27-499f-a968-27dc7cfabf28.png",
      alt: "Repas"
    },
    {
      src: "/seven-lounge-glow/lovable-uploads/dac13031-10bd-4687-b6a3-3d9a26ba4380.png",
      alt: "Repas"
    },
    {
      src: "/seven-lounge-glow/lovable-uploads/05058f9f-079a-439e-a1d4-b78ad989571e.png",
      alt: "Salade fraîche du 7SEVEN LOUNGE"
    }
  ];

  return (
    <section className="py-20 bg-restaurant-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Notre Galerie</h2>
          <p className="text-restaurant-700/80 max-w-2xl mx-auto">
            Découvrez l'ambiance et nos plats en images
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg h-64 bg-restaurant-100"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-restaurant-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
