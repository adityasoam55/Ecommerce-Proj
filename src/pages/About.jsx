const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 mt-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        About <span className="text-blue-600">ShopEase</span>
      </h1>

      {/* Intro */}
      <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
        At ShopEase, we believe that shopping should be simple, seamless, and
        enjoyable. Our mission is to bring you high-quality products at the best
        prices — all with a smooth and intuitive online shopping experience.
      </p>

      {/* 3-Column Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        {/* card 1 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">
            🛍️ Wide Product Selection
          </h3>
          <p className="text-gray-600">
            Browse from a curated collection of top-quality items across various
            categories. Whether you're shopping for essentials or exploring new
            trends, we’ve got you covered.
          </p>
        </div>

        {/* card 2 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">
            ⚡ Fast & Smooth Experience
          </h3>
          <p className="text-gray-600">
            Our platform is optimized for speed, responsiveness, and a clean
            user experience — so you can find what you need in seconds.
          </p>
        </div>

        {/* card 3 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">
            🎧 Reliable Customer Support
          </h3>
          <p className="text-gray-600">
            Need help with orders, returns, or product details? Our support team
            is always ready to assist you.
          </p>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="mt-20 bg-blue-50 p-10 rounded-xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Our Vision
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We aim to build one of the most trusted and loved online shopping
          experiences by delivering value, transparency, and exceptional service
          to every customer.
        </p>
      </div>
    </div>
  );
};

export default About;
