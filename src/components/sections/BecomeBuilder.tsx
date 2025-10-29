"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function BecomeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    emailOptional: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate form submission logic here (email API, backend, etc.)
    setFormData({ name: "", email: "", emailOptional: "", message: "" });
  };

  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">
            Become a Builder
          </h1>

          <div className="grid grid-cols-1  md:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5BD5]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5BD5]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email address (optional)
                  </label>
                  <input
                    type="email"
                    name="emailOptional"
                    value={formData.emailOptional}
                    onChange={handleChange}
                    placeholder="Email address (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5BD5]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5BD5]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-[#8A5BD5] hover:bg-[#9c63f8] text-white rounded-full px-8 py-3 font-semibold w-full md:w-auto"
                >
                  Send
                </Button>
              </form>
            </div>

            {/* Illustration Section */}
            <div className=" flex justify-center  md:justify-start ">
              <div className="relative md:ml-12    w-full max-w-xl">
                <img
                  src="/assets/building.svg"
                  alt="Construction site illustration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
