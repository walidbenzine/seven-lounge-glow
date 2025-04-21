
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("chicha");

  return (
    <section id="menu" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 w-40 h-40 rounded-full bg-restaurant-50 blur-2xl opacity-70"></div>
      <div className="absolute bottom-40 -right-20 w-60 h-60 rounded-full bg-restaurant-50 blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Notre Menu</h2>
          <p className="text-restaurant-700/80 max-w-2xl mx-auto">
            Découvrez notre sélection de plats, boissons et chichas pour vous offrir une expérience gustative unique
          </p>
        </div>
        
        <Tabs defaultValue="chicha" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-auto gap-2 bg-restaurant-50 p-1.5 rounded-lg mb-8">
            <TabsTrigger value="chicha" className={`${activeTab === "chicha" ? "bg-restaurant-500 text-white" : "bg-transparent text-restaurant-600"} px-4 py-2 rounded-md transition-all`}>
              Chicha
            </TabsTrigger>
            <TabsTrigger value="soft" className={`${activeTab === "soft" ? "bg-restaurant-500 text-white" : "bg-transparent text-restaurant-600"} px-4 py-2 rounded-md transition-all`}>
              Soft
            </TabsTrigger>
            <TabsTrigger value="entrees" className={`${activeTab === "entrees" ? "bg-restaurant-500 text-white" : "bg-transparent text-restaurant-600"} px-4 py-2 rounded-md transition-all`}>
              Entrées
            </TabsTrigger>
            <TabsTrigger value="plats" className={`${activeTab === "plats" ? "bg-restaurant-500 text-white" : "bg-transparent text-restaurant-600"} px-4 py-2 rounded-md transition-all`}>
              Plats
            </TabsTrigger>
            <TabsTrigger value="desserts" className={`${activeTab === "desserts" ? "bg-restaurant-500 text-white" : "bg-transparent text-restaurant-600"} px-4 py-2 rounded-md transition-all`}>
              Desserts
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chicha" className="focus:outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">TÊTE PLATE</h3>
                  <span className="text-lg font-bold text-restaurant-600">13€</span>
                </div>
                <p className="text-gray-600 italic mb-2">Chicha classique</p>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">KALOUD</h3>
                  <span className="text-lg font-bold text-restaurant-600">15€</span>
                </div>
                <p className="text-gray-600 italic mb-2">Système de chauffe amélioré</p>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">KAZAR</h3>
                  <span className="text-lg font-bold text-restaurant-600">20€</span>
                </div>
                <p className="text-gray-600 italic mb-2">Premium chicha</p>
              </div>
              
              <div className="menu-card col-span-1 md:col-span-2">
                <h3 className="text-xl font-medium text-restaurant-700 mb-4">Goût Au choix :</h3>
                <p className="text-gray-600">
                  Menthe, Love 66, Hawaii, Mi Amor, Menthe sucrée, Lady Killer...
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="focus:outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Soft</h3>
                  <span className="text-lg font-bold text-restaurant-600">5€</span>
                </div>
                <p className="text-gray-600 italic mb-2">Boissons non-alcoolisées</p>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Vittel ou Sirop au choix</h3>
                  <span className="text-lg font-bold text-restaurant-600">5€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Redbull</h3>
                  <span className="text-lg font-bold text-restaurant-600">5€</span>
                </div>
                <p className="text-gray-600 italic mb-2">Supplément Sirop 1€</p>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Mojito</h3>
                  <span className="text-lg font-bold text-restaurant-600">8€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Diabolo Sirop</h3>
                  <span className="text-lg font-bold text-restaurant-600">4€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Cocktail</h3>
                  <span className="text-lg font-bold text-restaurant-600">8€</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="entrees" className="focus:outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Nems x3</h3>
                  <span className="text-lg font-bold text-restaurant-600">6€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Nems x6 Poulet/Crevette</h3>
                  <span className="text-lg font-bold text-restaurant-600">9€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Nems x9</h3>
                  <span className="text-lg font-bold text-restaurant-600">14€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Burrata</h3>
                  <span className="text-lg font-bold text-restaurant-600">9€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Salade César</h3>
                  <span className="text-lg font-bold text-restaurant-600">12€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Salade Saumon Frais</h3>
                  <span className="text-lg font-bold text-restaurant-600">13€</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="plats" className="focus:outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Le 7SEVEN</h3>
                  <span className="text-lg font-bold text-restaurant-600">12€</span>
                </div>
                <p className="text-gray-600 italic mb-2">Plat signature du restaurant</p>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Le Burger du Chef</h3>
                  <span className="text-lg font-bold text-restaurant-600">14€</span>
                </div>
                <p className="text-gray-600 italic mb-2">Burger artisanal avec frites maison</p>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Tortiglioni Forestière</h3>
                  <span className="text-lg font-bold text-restaurant-600">12€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Tortiglioni Saumon Frais</h3>
                  <span className="text-lg font-bold text-restaurant-600">14€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Tortiglioni Carbonara</h3>
                  <span className="text-lg font-bold text-restaurant-600">12€</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="desserts" className="focus:outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Gaufre Nutella Chantilly</h3>
                  <span className="text-lg font-bold text-restaurant-600">8€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Pain Perdu Caramel Beurre Salé Boule de Glace Vanille</h3>
                  <span className="text-lg font-bold text-restaurant-600">8€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Fraisier et son coulis de fruits rouges</h3>
                  <span className="text-lg font-bold text-restaurant-600">8€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">Fondant au chocolat Boule de Glace Vanille</h3>
                  <span className="text-lg font-bold text-restaurant-600">8€</span>
                </div>
              </div>
              
              <div className="menu-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-restaurant-700">MilkShake</h3>
                  <span className="text-lg font-bold text-restaurant-600">6€</span>
                </div>
                <p className="text-gray-600 italic mb-2">Supplément Kinder, Oréo... 2€</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
