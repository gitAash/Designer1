import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Sign Up and Save</h3>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="mt-4 p-2 w-full rounded"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Location</h3>
          <p>007, James Bond Street, London, England</p>
          <p>Mon-Sat 10AM - 9PM</p>
          <p>Sun: Closed</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Policies</h3>
          <ul>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
