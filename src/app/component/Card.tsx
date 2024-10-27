import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <main className="p-8 bg-gray-100">
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#222831] shadow-lg p-6 rounded-lg flex transition-transform transform hover:scale-105">
          <img 
            src="/images/o1.jpg" 
            alt="Our Story" 
            className="w-24 h-24 rounded-full mr-4 object-cover border-4 border-blue-500" 
          />
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">Tasty Thursdays</h3>
            </div>
            <div className="mt-4">
              <p className="text-lg text-green-600">15% Off</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#222831] shadow-lg p-6 rounded-lg flex transition-transform transform hover:scale-105">
          <img 
            src="/images/o2.jpg" 
            alt="Our Ingredients" 
            className="w-24 h-24 rounded-full mr-4 object-cover border-4 border-blue-500" 
          />
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">Pizza Days</h3>
            </div>
            <div className="mt-4">
              <p className="text-lg text-green-600">15% Off</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutSection;
