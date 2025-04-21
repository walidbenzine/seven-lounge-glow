
import { MapPin, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nous contacter</h2>
          <p className="text-restaurant-700/80 max-w-2xl mx-auto">
            Une question ? Besoin d'information ? N'hésitez pas à nous contacter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-full">
              <iframe
                title="7SEVEN LOUNGE on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.7805841663193!2d4.06216107712662!3d49.26392177570576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e974a4c4e2a78b%3A0x4a5fb28ba2e9d5ec!2s147%20Rue%20de%20Cernay%2C%2051100%20Reims!5e0!3m2!1sfr!2sfr!4v1713785454069!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-restaurant-700 mb-6">
                Informations
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-restaurant-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-restaurant-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-gray-800 mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      147 Rue de Cernay<br />51100 Reims
                    </p>
                    <a
                      href="https://maps.app.goo.gl/XpW9g45L65xi3BeaA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-restaurant-600 hover:text-restaurant-800 text-sm font-medium inline-block mt-2"
                    >
                      Voir sur Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-restaurant-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-restaurant-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-gray-800 mb-1">Téléphone</h4>
                    <a
                      href="tel:0749500638"
                      className="text-gray-600 hover:text-restaurant-600 transition-colors"
                    >
                      07 49 50 06 38
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-restaurant-100 p-3 rounded-full mr-4">
                    <Instagram className="h-6 w-6 text-restaurant-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-gray-800 mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/7seven_restaurant"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-restaurant-600 transition-colors"
                    >
                      @7seven_restaurant
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-lg text-gray-800 mb-3">Horaires d'ouverture</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Lundi</span>
                      <span className="font-medium text-restaurant-700">Fermé</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Mardi à Jeudi</span>
                      <span>15:00 – 02:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vendredi</span>
                      <span>15:00 – 02:30</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Samedi</span>
                      <span>10:00 – 02:30</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dimanche</span>
                      <span>10:00 – 02:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
