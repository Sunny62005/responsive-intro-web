
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400">
              A showcase of my work, skills, and experiences. Thank you for visiting!
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/achievements" className="text-gray-400 hover:text-white transition-colors">Achievements</Link>
              </li>
              <li>
                <Link to="/personal" className="text-gray-400 hover:text-white transition-colors">Personal</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">All Products</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                GitHub
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sunny Pharande. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
