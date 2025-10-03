import React from "react";

function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>
        Have questions about eggs, chicken, or orders? Reach out to us and we'll
        get back to you as soon as possible.
      </p>

      <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
        <p>
          <strong>Email:</strong> Plaasmandjie@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> 083 375 5899
        </p>
        <p>
          <strong>Address:</strong> Perseel 95, Wilgenhoutsdrif, Grootdrink,
          Northern Cape
        </p>
      </div>
    </div>
  );
}

export default Contact;
