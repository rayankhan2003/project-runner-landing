import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("header", { className: `py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`, children: _jsxs("div", { className: "container mx-auto flex justify-between items-center", children: [_jsx("a", { href: "#", className: "flex items-center", children: _jsx("img", { src: "/assets/logo.svg", className: "w-[185px] h-auto" }) }), _jsx("nav", { className: "hidden md:flex gap-6", children: NavLinks.map((link) => (_jsx("a", { href: link.href, className: "text-black font-bold transition-colors", children: link.label }, link.label))) }), _jsx("button", { className: "md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors", children: _jsx(Menu, { className: "h-6 w-6 text-gray-700" }) })] }) }));
}
