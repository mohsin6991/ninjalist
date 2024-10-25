import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Welcome to our restaurant, offering the best flavors and finest ingredients." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Restaurant Name</h1>
          <nav className="flex space-x-4">
            <Link href="/menu" className="hover:underline">Menu</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/about" className="hover:underline">About</Link> {/* Fixed spelling from "Abute" to "About" */}
          </nav>
        </div>
      </header>
    </>
  );
}
