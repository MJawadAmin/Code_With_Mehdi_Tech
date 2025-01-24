import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Shop Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">SHOP</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">Variety Packs</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Our Flavors</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Subscribe & Save</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">SUPPORT</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">Find Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Shipping & Return Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Accessibility Options</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Accessibility Statement</a>
            </li>
          </ul>
        </div>

        {/* Questions Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">QUESTIONS</h3>
          <p>
            <a href="mailto:hello@drinkwildwonder.com" className="hover:underline">
              hello@drinkwildwonder.com
            </a>
          </p>
        </div>

        {/* Wholesale Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">WHOLESALE</h3>
          <p className="mb-4">
            <a href="mailto:sales@drinkwildwonder.com" className="hover:underline">
              sales@drinkwildwonder.com
            </a>
          </p>
          <a
            href="#"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 inline-block"
          >
            Shop wholesale products on Faire →
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 mt-8 flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Wildwonder</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:opacity-80">
            <img src="/path-to-instagram-icon.svg" alt="Instagram" className="h-6" />
          </a>
          <a href="#" className="hover:opacity-80">
            <img src="/path-to-tiktok-icon.svg" alt="TikTok" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
