
import Footer from './component/Footer';
import Header from './component/Header';
import About from './abute/page';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-8">
        <section className="text-center py-20">
          <h2 className="text-4xl font-bold text-gray-800">Welcome to Our Restaurant!</h2>
          <p className="text-lg mt-4 text-gray-600">The best flavors, the finest ingredients.</p>
        </section>
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Our Story</h3>
            <p className="mt-4 text-gray-600">We pride ourselves on delicious, handcrafted meals...</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Our Ingredients</h3>
            <p className="mt-4 text-gray-600">We use only the freshest, highest quality ingredients...</p>
          </div>
        </section>
      </main>
      <Footer />

    </div>
  );
}
