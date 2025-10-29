// src/components/layout/Header.tsx
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const NavLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Features" },
  { href: "#", label: "Subscription" },
  { href: "#", label: "FAQ's" },
  { href: "#", label: "Contact Us" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
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
              className="text-black font-bold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
}
