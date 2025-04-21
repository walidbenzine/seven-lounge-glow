
const GallerySection = () => {
  const images = [
    {
      src: "/lovable-uploads/05058f9f-079a-439e-a1d4-b78ad989571e.png",
      alt: "Salade fraîche du 7SEVEN LOUNGE"
    },
    {
      src: "/lovable-uploads/f4f28e2c-1f3a-4792-bf2f-d065cedf47df.png",
      alt: "Burger signature du 7SEVEN LOUNGE"
    },
    {
      src: "/lovable-uploads/3b29a848-84b8-448a-9b46-505084929f10.png",
      alt: "Nems frais du 7SEVEN LOUNGE"
    },
    {
      src: "/lovable-uploads/dac13031-10bd-4687-b6a3-3d9a26ba4380.png",
      alt: "Préparation d'un cocktail au 7SEVEN LOUNGE"
    },
    {
      src: "/lovable-uploads/c7c7d564-2bd4-437a-b94b-04fd1666d2ed.png",
      alt: "Mur de fleurs avec néon 7seven"
    },
    {
      src: "/lovable-uploads/fe721c63-d4a9-4148-bc7c-329ec063d006.png",
      alt: "Burgers et déco néon 7seven"
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
