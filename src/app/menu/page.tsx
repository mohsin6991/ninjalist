import MenuBody from "../component/menuitem";

import Footer from "../component/Footer";
import Head from 'next/head';
import Link from 'next/link';

export default function(){
  return (
    <div>
            <Head>
        <title>Restaurant</title>
        <meta name="description" content="Welcome to our restaurant, offering the best flavors and finest ingredients." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="bg-[#222831] text-white p-4 absolute top-0 w-full z-20">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Restaurant Name</h1>
          <nav className="flex space-x-4">
            <Link href="/menu" className="hover:underline" aria-label="View Menu">Menu</Link>
            <Link href="/contact" className="hover:underline" aria-label="Contact Us">Contact</Link>
            <Link href="/about" className="hover:underline" aria-label="About Us">About</Link>
          </nav>
        </div>
      </header>

      <MenuBody />
      <Footer />
      </div>
  )
}




