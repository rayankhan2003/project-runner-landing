"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export function BecomeBuilder() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        emailOptional: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // You can integrate form submission logic here (email API, backend, etc.)
        setFormData({ name: "", email: "", emailOptional: "", message: "" });
    };
    return (_jsx("main", { children: _jsx("section", { className: "bg-white py-16 md:py-24", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-black mb-12", children: "Become a Builder" }), _jsxs("div", { className: "grid grid-cols-1  md:grid-cols-2 gap-12", children: [_jsx("div", { className: "flex flex-col", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Your Name" }), _jsx("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, placeholder: "Your Name", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5BD5]", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "Email Address", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5BD5]", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email address (optional)" }), _jsx("input", { type: "email", name: "emailOptional", value: formData.emailOptional, onChange: handleChange, placeholder: "Email address (optional)", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5BD5]" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Message" }), _jsx("textarea", { name: "message", value: formData.message, onChange: handleChange, placeholder: "Message", rows: 5, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5BD5]", required: true })] }), _jsx(Button, { type: "submit", className: "bg-[#8A5BD5] hover:bg-[#9c63f8] text-white rounded-full px-8 py-3 font-semibold w-full md:w-auto", children: "Send" })] }) }), _jsx("div", { className: " flex justify-center  md:justify-start ", children: _jsx("div", { className: "relative md:ml-12    w-full max-w-xl", children: _jsx("img", { src: "/assets/building.svg", alt: "Construction site illustration", className: "w-full h-auto object-cover" }) }) })] })] }) }) }));
}
