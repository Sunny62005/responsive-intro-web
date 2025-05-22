
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold text-purple-600">Portfolio</Link>
        </div>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">About</Link>
          <Link to="/achievements" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Achievements</Link>
          <Link to="/personal" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Personal</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Contact</Link>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden border-t p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/achievements" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>Achievements</Link>
            <Link to="/personal" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>Personal</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
