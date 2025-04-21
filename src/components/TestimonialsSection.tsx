
import { useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Robert Schenini",
      rating: 5,
      comment: "Le burger royal est très bon, je recommande. Petit restaurant de quartier cozy comme on les aime. Bonne découverte pour ma part j'y retournerai avec plaisir 👍",
      image: "/seven-lounge-glow/lovable-uploads/f4f28e2c-1f3a-4792-bf2f-d065cedf47df.png",
    },
    {
      id: 2,
      name: "Barbara VISEUR",
      rating: 5,
      comment: "Service et nourriture irréprochable, les employés ainsi que le patron sont très à l'écoute du client. Je suis venu assez tard pour manger et la cuisine était encore ouverte à cette heure! Je recommande les yeux fermés !",
      image: "/seven-lounge-glow/-uploads/f4f28e2c-1f3a-4792-bf2f-d065cedf47df.png",
    },
    {
      id: 3,
      name: "Mohamed Abarouch",
      rating: 5,
      comment: "Bonne ambiance et une excellente chicha, je recommande 👍👍",
      image: "/seven-lounge-glow/lovable-uploads/f4f28e2c-1f3a-4792-bf2f-d065cedf47df.png",
    },
    {
      id: 4,
      name: "Ali Laakrout",
      rating: 5,
      comment: "La réouverture fait le plus grand bien à cette ville de Reims, des plats succulents et une équipe au top merci à vous",
      image: "/seven-lounge-glow/lovable-uploads/f4f28e2c-1f3a-4792-bf2f-d065cedf47df.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ));
  };

  return (
    <section id="avis" className="py-20 bg-restaurant-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Ils parlent de nous</h2>
          <p className="text-restaurant-700/80 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience chez 7SEVEN LOUNGE
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* Mobile view: Stacked testimonials */}
            <div className="md:hidden space-y-8">
              {testimonials.map((testimonial) => (
                <a
                  key={testimonial.id}
                  href="https://maps.app.goo.gl/XpW9g45L65xi3BeaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:scale-105"
                >
                  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div>
                        <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.comment}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Desktop view: Carousel */}
            <div className="hidden md:block">
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-restaurant-100 text-restaurant-700 hover:bg-restaurant-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <h3 className="text-xl font-semibold text-restaurant-700">
                  Avis de nos clients
                </h3>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-restaurant-100 text-restaurant-700 hover:bg-restaurant-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <a
                href="https://maps.app.goo.gl/XpW9g45L65xi3BeaA"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:opacity-90"
              >
                <div className="text-center">
                  <div className="mb-6">
                    <p className="text-xl italic text-gray-600 mb-8">
                      "{testimonials[activeIndex].comment}"
                    </p>
                    <div className="flex justify-center mb-2">
                      {renderStars(testimonials[activeIndex].rating)}
                    </div>
                    <h4 className="font-semibold text-lg text-restaurant-800">
                      {testimonials[activeIndex].name}
                    </h4>
                  </div>
                </div>
              </a>

              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`mx-1 w-3 h-3 rounded-full ${
                      activeIndex === index ? "bg-restaurant-500" : "bg-restaurant-200"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://maps.app.goo.gl/XpW9g45L65xi3BeaA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-restaurant-600 hover:text-restaurant-800 transition-colors"
              >
                <span>Voir tous nos avis sur Google Maps</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
