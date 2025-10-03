import React from "react";

function About() {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-12 mt-20">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center bg-yellow-50 rounded-lg p-6 md:p-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your local chicken, your fresh start
          </h1>
          <p className="text-lg mb-6">
            Discover the taste of truly local eggs and chicken - raised with
            care, collected by you. Join a community that values freshness,
            flavor, and simple joy of good food.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Reserve your chicken today
            </button>
            <button className="bg-gray-200 text-black px-6 py-3 rounded-md hover:bg-gray-300">
              View products
            </button>
          </div>
        </div>
        <div className="md:w-1/4 w-full flex justify-center">
          <img
            src="/hero-chicken.png"
            alt="Fresh chicken and eggs"
            className="w-3/4 sm:w-2/3 md:w-full h-auto max-h-70 md:max-h-50 rounded-xl shadow-xl object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* FEATURED PRODUCTS ROW */}
      <section className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md h-32 flex items-center justify-center"
          >
            Product {idx + 1}
          </div>
        ))}
      </section>

      {/* EVERYTHING CHICKEN SECTION */}
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-bold">
          Everything chicken, all in one place
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold mb-2">Eggs straight from the farm</h3>
            <p className="text-gray-600 mb-2">
              Crack open freshness every morning - our eggs are gathered daily
              from well-cared-for hens, perfect for your table.
            </p>
            <div className="h-48 bg-gray-200 mb-2 flex items-center justify-center">
              Image
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Browse
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold mb-2">Locally raised chicken meat</h3>
            <p className="text-gray-600 mb-2">
              Enjoy tender, flavorful chicken - ideal for family meals, special
              occasions, or your next hearty feast.
            </p>
            <div className="h-48 bg-gray-200 mb-2 flex items-center justify-center">
              Image
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Browse
            </button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-green-600 text-white text-center py-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Fresh chicken, just a click away
        </h2>
        <p className="mb-4 max-w-2xl mx-auto">
          Order eggs or chicken meat from our local farm. Always fresh, always
          ready for you to collect. Join our community of food lovers and taste
          the difference today.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
          Reserve today
        </button>
      </section>

      {/* CONTACT SECTION */}
      <section className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg p-6 md:p-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">
            Let's connect about your order
          </h3>
          <p className="text-gray-700 mb-4">
            Questions about eggs or chicken? We're here to help you place your
            order and answer anything you need.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>
              <strong>NORTHERN-CAPE</strong>
            </p>
            <p>Perseel 95, Wilgenhoutsdrif, Grootdrink</p>
            <p>Email: Plaasmandjie@gmail.com</p>
            <p>Phone: 083 375 5899</p>
            <div className="h-32 bg-gray-200 mt-2 flex items-center justify-center">
              Map
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            Image
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col md:flex-row items-center justify-between py-6 border-t mt-6">
        <div className="mb-4 md:mb-0">
          <img src="/logo.png" alt="Plaasmandjie Logo" className="h-12" />
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#">Eggs</a>
          <a href="#">Meat</a>
          <a href="#">Pickup</a>
          <a href="#">Support</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="#">FB</a>
          <a href="#">WA</a>
        </div>
      </footer>
    </div>
  );
}

export default About;
