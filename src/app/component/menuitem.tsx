// pages/menu.tsx  
"use client";  
import Image from 'next/image';
import { FC, useState } from 'react';  

type MenuItemProps = {  
  name: string;  
  price: string;  
  description: string;  
  image: string;  
};  

const MenuItem: FC<MenuItemProps> = ({ name, price, description, image }) => (  
  <div className="bg-white shadow-md p-6 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg border border-gray-200">  
    <Image src={image} alt={name} width={200} height={150} className="mx-auto mb-4 rounded-md" />  
    <h4 className="text-2xl font-semibold text-gray-900">{name}</h4>  
    <p className="mt-2 text-lg font-semibold text-gray-700">{price}</p>  
    <p className="mt-2 text-gray-500">{description}</p>  
  </div>  
);  

const allItems = [  
  { name: "Bruschetta", price: "$8", description: "Grilled bread topped with fresh tomatoes and basil.", category: "Appetizers", image: "/images/f1.png" },  
  { name: "Stuffed Mushrooms", price: "$9", description: "Mushrooms stuffed with cheese and herbs.", category: "Appetizers", image: "/images/f2.png" },  
  { name: "Calamari", price: "$10", description: "Lightly breaded and fried to perfection.", category: "Appetizers", image: "/images/f3.png" },  
  { name: "Grilled Salmon", price: "$18", description: "Served with a lemon butter sauce.", category: "Main Dishes", image: "/images/f4.png" },  
  { name: "Ribeye Steak", price: "$22", description: "Juicy steak cooked to your liking.", category: "Main Dishes", image: "/images/f5.png" },  
  { name: "Chicken Alfredo", price: "$16", description: "Creamy pasta with grilled chicken.", category: "Main Dishes", image: "/images/f6.png" },  
  { name: "Vegetable Stir-Fry", price: "$14", description: "A mix of fresh vegetables with a savory sauce.", category: "Main Dishes", image: "/images/f7.png" },  
  { name: "Cheesecake", price: "$7", description: "Classic cheesecake with a graham cracker crust.", category: "Desserts", image: "/images/f8.png" },  
  { name: "Tiramisu", price: "$8", description: "Coffee-flavored dessert with layers of mascarpone.", category: "Desserts", image: "/images/f9.png" },  
];  

const MenuSection: FC<{ items: MenuItemProps[] }> = ({ items }) => {  
  const [showAll, setShowAll] = useState(false);  
  const displayedItems = showAll ? items : items.slice(0, 3);  

  return (  
    <div className="mb-12">  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
        {displayedItems.map((item, index) => (  
          <MenuItem key={index} name={item.name} price={item.price} description={item.description} image={item.image} />  
        ))}  
      </div>  
      {!showAll && items.length > 3 && (  
        <div className="text-center mt-4">  
          <button  
            onClick={() => setShowAll(true)}  
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300"  
          >  
            View More  
          </button>  
        </div>  
      )}  
    </div>  
  );  
};  

const MenuBody: FC = () => {  
  const [visibleSection, setVisibleSection] = useState<string>('all');  

  const handleCategoryChange = (category: string) => {  
    setVisibleSection(category);  
  };  

  return (  
    <div className="min-h-screen bg-gray-50 p-8">  
      <main className="py-20">  
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-wide">Our Menu</h2>  

        {/* Navigation for Categories */}  
        <nav className="mb-8">  
          <ul className="flex justify-center space-x-4 md:space-x-6 lg:space-x-8">  
            {['all', 'appetizers', 'main-dishes', 'desserts', 'beverages'].map(category => (  
              <li key={category}>  
                <button  
                  onClick={() => handleCategoryChange(category)}  
                  className={`px-6 py-3 rounded-full text-md font-semibold transition-colors duration-300   
                    ${visibleSection === category ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-500 hover:text-white'}`}  
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
    </div>  
  );  
};  

export default MenuBody;
