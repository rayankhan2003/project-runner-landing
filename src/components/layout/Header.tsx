// src/components/layout/Header.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#features", label: "Features" },
  { href: "#subscription", label: "Subscription" },
  { href: "#faqs", label: "FAQ's" },
  { href: "#contact-us", label: "Contact Us" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`py-4 px-4 md:px-8 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/assets/logo.svg" className="w-[185px] h-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {NavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black font-bold transition-colors hover:text-[#8A5BD5]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

     {/* Mobile Navigation */}
{isMobileMenuOpen && (
  <div className="fixed inset-0 bg-white z-50 md:hidden flex flex-col">
    
    {/* Top Bar */}
    <div className="flex justify-between items-center px-6 py-5 border-b">
      <img src="/assets/logo.svg" className="w-[160px]" />

      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100"
      >
        <X className="w-5 h-5 text-red-500" />
      </button>
    </div>

    {/* Navigation Links */}
    <nav className="flex flex-col px-6 pt-8">
      {NavLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="py-5 text-lg font-semibold text-gray-800 border-b border-gray-200"
        >
          {link.label}
        </a>
      ))}
    </nav>

  </div>
)}
    </header>
  );
}
