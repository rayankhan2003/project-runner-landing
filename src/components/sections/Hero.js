import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/sections/Hero.tsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export function Hero() {
    const navigate = useNavigate();
    return (_jsx("section", { className: "container mx-auto px-4 py-20 md:py-32", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { className: "text-center md:text-left", children: [_jsxs("h1", { className: "font-extrabold text-5xl md:text-[64px] leading-snug tracking-[0.05rem] text-gray-900 ", children: ["Construction ", _jsx("br", {}), " Without the ", _jsx("span", { className: "block", children: "Chaos" })] }), _jsx("p", { className: "mt-6 font-normal text-[24px] leading-snug tracking-[0.03em] text-black max-w-md mx-auto md:mx-0", children: "Builders, streamline your material requests, deliveries, and site coordination \u2014 all from one platform." }), _jsx(Button, { size: "lg", className: "mt-8 bg-[#8A5BD5] hover:bg-[#9c63f8] text-lg px-8 py-6 rounded-lg", onClick: () => navigate("/become-builder"), children: "Become a builder" })] }), _jsx("div", { className: "relative  w-full  flex justify-center md:justify-end", children: _jsx("img", { src: "/images/construction.png", alt: "A construction site with a builder reviewing plans.", className: "w-10/12 h-auto object-contain rounded-lg shadow-lg" }) })] }) }));
}
