
import { Link } from "react-router-dom";
import { MapPin, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-restaurant-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/lovable-uploads/2f6a8043-6a27-499f-a968-27dc7cfabf28.png"
                alt="7SEVEN LOUNGE"
                className="h-12 w-auto mr-3"
              />
              <div>
                <h2 className="text-xl font-bold tracking-wide font-serif">7SEVEN LOUNGE</h2>
                <p className="text-xs tracking-wider text-restaurant-200">RESTAURANT & SALON DE THÉ</p>
              </div>
            </div>
            <p className="text-restaurant-200 mb-4">
              Une ambiance unique, des plats savoureux et un moment de détente assuré dans notre restaurant et salon de thé à Reims.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-restaurant-700">Nos horaires</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lundi</span>
                <span className="font-medium text-restaurant-200">Fermé</span>
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

          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-restaurant-700">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-restaurant-300 mr-3" />
                <span>147 Rue de Cernay, 51100 Reims</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-restaurant-300 mr-3" />
                <a href="tel:0749500638" className="hover:text-restaurant-300 transition-colors">
                  07 49 50 06 38
                </a>
              </li>
              <li className="flex items-center">
                <Instagram className="h-5 w-5 text-restaurant-300 mr-3" />
                <a
                  href="https://www.instagram.com/7seven_restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-restaurant-300 transition-colors"
                >
                  @7seven_restaurant
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-restaurant-700 pt-8 text-center">
          <p className="text-restaurant-300 text-sm">
            &copy; {new Date().getFullYear()} 7SEVEN LOUNGE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
