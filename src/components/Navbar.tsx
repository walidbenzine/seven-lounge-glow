
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/logo.png"
                alt="7SEVEN LOUNGE"
                className="h-12 w-auto mr-2 rounded-full"
              />
              <div className={`transition-colors ${isScrolled ? 'text-restaurant-700' : 'text-white'}`}>
                <h1 className="text-xl font-bold font-serif tracking-wider">7SEVEN LOUNGE</h1>
                <p className="text-xs tracking-wider">RESTAURANT & SALON DE THÉ</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`nav-link ${isScrolled ? 'text-restaurant-800' : 'text-white'} hover:text-restaurant-300 font-medium transition-colors`}>
              Accueil
            </Link>
            <a href="#menu" className={`nav-link ${isScrolled ? 'text-restaurant-800' : 'text-white'} hover:text-restaurant-300 font-medium transition-colors`}>
              Menu
            </a>
            <a href="#avis" className={`nav-link ${isScrolled ? 'text-restaurant-800' : 'text-white'} hover:text-restaurant-300 font-medium transition-colors`}>
              Avis
            </a>
            <a href="#contact" className={`nav-link ${isScrolled ? 'text-restaurant-800' : 'text-white'} hover:text-restaurant-300 font-medium transition-colors`}>
              Contact
            </a>
            <a
              href="tel:0749500638"
              className="button-primary"
            >
              <span>Réserver</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-gray-500 hover:border-gray-500"
          >
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-restaurant-800' : 'text-white'}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 bg-white rounded-lg shadow-xl">
            <div className="flex flex-col">
              <Link
                to="/"
                className="px-4 py-2 text-restaurant-800 hover:bg-restaurant-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <a
                href="#menu"
                className="px-4 py-2 text-restaurant-800 hover:bg-restaurant-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#avis"
                className="px-4 py-2 text-restaurant-800 hover:bg-restaurant-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Avis
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-restaurant-800 hover:bg-restaurant-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="tel:0749500638"
                className="mx-4 my-2 button-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Réserver</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
