// pages/menu.tsx  
"use client";  
import Link from 'next/link';  
import { FC, useState } from 'react';  

type MenuItemProps = {  
  name: string;  
  price: string;  
  description: string;  
};  

const MenuItem: FC<MenuItemProps> = ({ name, price, description }) => (  
  <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl">  
    <h4 className="text-xl font-semibold text-gray-800">{name}</h4>  
    <p className="mt-2 text-lg font-bold text-gray-900">{price}</p>  
    <p className="mt-2 text-gray-600">{description}</p>  
  </div>  
);  

const allItems = [  
  { name: "Bruschetta", price: "$8", description: "Grilled bread topped with fresh tomatoes and basil.", category: "Appetizers" },  
  { name: "Stuffed Mushrooms", price: "$9", description: "Mushrooms stuffed with cheese and herbs.", category: "Appetizers" },  
  { name: "Calamari", price: "$10", description: "Lightly breaded and fried to perfection.", category: "Appetizers" },  
  { name: "Grilled Salmon", price: "$18", description: "Served with a lemon butter sauce.", category: "Main Dishes" },  
  { name: "Ribeye Steak", price: "$22", description: "Juicy steak cooked to your liking.", category: "Main Dishes" },  
  { name: "Chicken Alfredo", price: "$16", description: "Creamy pasta with grilled chicken.", category: "Main Dishes" },  
  { name: "Vegetable Stir-Fry", price: "$14", description: "A mix of fresh vegetables with a savory sauce.", category: "Main Dishes" },  
  { name: "Cheesecake", price: "$7", description: "Classic cheesecake with a graham cracker crust.", category: "Desserts" },  
  { name: "Tiramisu", price: "$8", description: "Coffee-flavored dessert with layers of mascarpone.", category: "Desserts" },  
  { name: "Chocolate Lava Cake", price: "$8", description: "Rich chocolate cake with a gooey center.", category: "Desserts" },  
  { name: "Lemonade", price: "$3", description: "Freshly squeezed lemonade.", category: "Beverages" },  
  { name: "Iced Tea", price: "$3", description: "Cool and refreshing with a hint of lemon.", category: "Beverages" },  
  { name: "Cappuccino", price: "$4", description: "A perfect blend of espresso and steamed milk.", category: "Beverages" },  
  { name: "Red Wine", price: "$6", description: "A selection of fine red wines.", category: "Beverages" },  
];  

const MenuSection: FC<{ items: MenuItemProps[] }> = ({ items }) => {  
  const [showAll, setShowAll] = useState(false);  
  const displayedItems = showAll ? items : items.slice(0, 3);  

  return (  
    <div className="mb-12">  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
        {displayedItems.map((item, index) => (  
          <MenuItem key={index} name={item.name} price={item.price} description={item.description} />  
        ))}  
      </div>  
      {!showAll && items.length > 3 && (  
        <div className="text-center mt-4">  
          <button  
            onClick={() => setShowAll(true)}  
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"  
          >  
            View More  
          </button>  
        </div>  
      )}  
    </div>  
  );  
};  

const Menu: FC = () => {  
  const [visibleSection, setVisibleSection] = useState<string>('all');  

  const handleCategoryChange = (category: string) => {  
    setVisibleSection(category);  
  };  

  return (  
    <div className="min-h-screen bg-gray-50 p-8">  
      <header className="bg-green-600 text-white p-4 shadow-md">  
        <div className="container mx-auto flex justify-between items-center">  
          <h1 className="text-3xl font-bold">Our Menu</h1>  
          <nav className="flex space-x-4">  
            <Link href="/" className="hover:underline">Home</Link>  
            <Link href="/contact" className="hover:underline">Contact</Link>  
          </nav>  
        </div>  
      </header>  
      <main className="py-20">  
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Explore Our Delicious Menu</h2>  

        {/* Navigation for Categories */}  
        <nav className="mb-8">  
          <ul className="flex justify-center space-x-6">  
            {['all', 'appetizers', 'main-dishes', 'desserts', 'beverages'].map(category => (  
              <li key={category}>  
                <button  
                  onClick={() => handleCategoryChange(category)}  
                  className={`px-6 py-3 rounded-lg transition-colors duration-300   
                    ${visibleSection === category ? 'bg-green-600 text-white font-bold' : 'bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white'}`}  
                >  
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}  
                </button>  
              </li>  
            ))}  
          </ul>  
        </nav>  

        {/* Conditional Rendering of Menu Sections */}  
        {visibleSection === 'all' && <MenuSection items={allItems} />}  
        {visibleSection === 'appetizers' && <MenuSection items={allItems.filter(item => item.category === "Appetizers")} />}  
        {visibleSection === 'main-dishes' && <MenuSection items={allItems.filter(item => item.category === "Main Dishes")} />}  
        {visibleSection === 'desserts' && <MenuSection items={allItems.filter(item => item.category === "Desserts")} />}  
        {visibleSection === 'beverages' && <MenuSection items={allItems.filter(item => item.category === "Beverages")} />}  
      </main>  
      <footer className="bg-gray-800 text-white text-center py-4 mt-12">  
        <p>&copy; {new Date().getFullYear()} Your Restaurant Name. All rights reserved.</p>  
      </footer>  
    </div>  
  );  
};  

export default Menu;