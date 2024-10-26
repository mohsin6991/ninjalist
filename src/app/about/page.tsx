import Image from 'next/image';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-20 bg-[#222831] min-h-screen">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
        <Image
          src="/images/about-img.png" // Replace with your image path
          alt="Restaurant Interior"
          width={300}
          height={250}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <p className="text-white text-lg">
          Welcome to [Restaurant Name]! We are committed to providing delicious, freshly prepared dishes with a touch of authenticity and passion. Our team of chefs carefully crafts each meal, using the finest ingredients to bring out the best flavors. Join us for a unique dining experience and enjoy a delightful journey through our culinary expertise.
        </p>
      </div>
    </section>
  );
};

export default About;
