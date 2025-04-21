
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-primary">
          ResearchPro
        </a>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#pricing" className="hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#testimonials" className="hover:text-primary transition-colors">
            Testimonials
          </a>
          <Button asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-6 px-6 bg-white border-b">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a 
              href="#pricing" 
              className="py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a 
              href="#testimonials" 
              className="py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <Button asChild className="w-full mt-2">
              <a href="#contact" onClick={toggleMenu}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
