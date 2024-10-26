import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
  return (
    <>

      <header className="bg-transparent text-white p-4 absolute top-0 w-full z-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">KOMA</h1>
          <nav className="flex space-x-2 md:space-x-4">
            <Link className="text-sm md:text-base hover:underline" aria-label="View Menu" href="/menu">
              Menu
            </Link>
            <Link className="text-sm md:text-base hover:underline" aria-label="Contact Us" href="/contact">
              Contact
            </Link>
            <Link className="text-sm md:text-base hover:underline" aria-label="About Us" href="/about">
              About
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
