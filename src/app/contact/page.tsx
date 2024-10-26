// pages/contact.js
import Link from 'next/link';
import Footer from '../component/Footer';
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* <header className="bg-green-600 text-white p-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <nav>
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/menu">Menu</Link>
        </nav>
      </header> */}
      <main className="py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-600">Feel free to reach out!</p>
        <form className="max-w-md mx-auto mt-8 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded"/>
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded"/>
          <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32"></textarea>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
