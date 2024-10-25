// pages/about.tsx
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-3xl font-bold">About Us</h1>
        <nav>
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/menu" className="mr-4">Menu</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main className="py-20">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Established in 2023, our restaurant has been dedicated to delivering unforgettable dining experiences. Our focus is on fresh ingredients, seasonal dishes, and a passion for culinary excellence.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-4">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueItem title="Quality Ingredients" description="We use only the freshest and highest-quality ingredients in every dish." />
            <ValueItem title="Sustainability" description="Our commitment to sustainability includes sourcing locally and minimizing waste." />
            <ValueItem title="Customer Satisfaction" description="Your satisfaction is our top priority, with a friendly and welcoming environment." />
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-4">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember name="John Doe" position="Head Chef" bio="With over 20 years of culinary experience, John leads our kitchen with creativity and expertise." />
            <TeamMember name="Jane Smith" position="Sous Chef" bio="Jane brings a passion for fresh, local ingredients and innovative dishes." />
            <TeamMember name="Mark Johnson" position="Restaurant Manager" bio="Mark ensures that every guest has a fantastic dining experience from start to finish." />
          </div>
        </section>
      </main>
    </div>
  );
}

// Reusable component for values
const ValueItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg text-center">
    <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

// Reusable component for team members
const TeamMember: React.FC<{ name: string; position: string; bio: string }> = ({ name, position, bio }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg text-center">
    <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
    <p className="text-green-600 font-medium">{position}</p>
    <p className="mt-2 text-gray-600">{bio}</p>
  </div>
);
