import React from "react";

function Faqs() {
  return (
    <div className="max-w-6xl mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="font-bold mb-2">How often are eggs collected?</h2>
          <p>Eggs are collected daily from our farm to ensure freshness.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="font-bold mb-2">Can I order chicken meat online?</h2>
          <p>Yes! You can place orders directly through our website.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="font-bold mb-2">Where can I pick up my order?</h2>
          <p>
            Orders can be collected at our farm in Wilgenhoutsdrif, Northern
            Cape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
