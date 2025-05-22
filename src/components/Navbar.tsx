
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, ShoppingBag, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useCartStore } from "@/store/cartStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCartStore();
  const itemCount = items.length;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold text-purple-600">Portfolio</Link>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors">Home</Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors">About</Link>
          <Link to="/achievements" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors">Achievements</Link>
          <Link to="/personal" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors">Personal</Link>
          <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors">Contact</Link>
          <Link to="/shop" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors">Shop</Link>
          <div className="ml-4">
            <ThemeToggle />
          </div>
          <Link to="/shop" className="relative">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <Link to="/shop" className="relative mr-2">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <ThemeToggle />
          <Button
            variant="ghost"
            className="ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/achievements" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>Achievements</Link>
            <Link to="/personal" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>Personal</Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/shop" className="text-sm font-medium text-foreground/80 hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>Shop</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
