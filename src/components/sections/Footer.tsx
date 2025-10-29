"use client";

import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="container max-w-7xl mx-auto bg-white  mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-extrabold font-shippori mb-4">
                Project Runner
              </h3>
              <p className="text-gray-700 text-base leading-relaxed max-w-xs">
                A real-time construction resource management app that connects
                builders, subcontractors, and forklift operators to streamline
                material requests, deliveries, and site coordination — all in
                one smart platform.
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
              >
                <Instagram size={24} className="text-black" />
              </a>
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
              >
                <Facebook size={24} className="text-black" />
              </a>
            </div>
          </div>

          {/* Get Involved Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold font-shippori">Get Involved</h3>
            <nav className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-gray-700 text-lg hover:text-gray-900 transition"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-gray-700 text-lg hover:text-gray-900 transition"
              >
                Contact Us
              </a>
              <a
                href="#faq"
                className="text-gray-700 text-lg hover:text-gray-900 transition"
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-normal font-shippori">Contact</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="text-gray-700 flex-shrink-0 mt-1"
                />
                <p className="text-gray-700 text-lg font-work-sans leading-relaxed">
                  5008, Ang Mo Kio Avenue 5,
                  <br />
                  #04-09 Techplace II,
                  <br />
                  Singapore 569874.
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={20} className="text-gray-700 flex-shrink-0" />
                <a
                  href="mailto:admin@projectrunner.com"
                  className="text-gray-700 text-lg hover:text-gray-900 transition"
                >
                  admin@projectrunner.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={20} className="text-gray-700 flex-shrink-0" />
                <a
                  href="tel:+6522288000"
                  className="text-gray-700 text-lg hover:text-gray-900 transition"
                >
                  222 888 0000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="  pt-8 text-center bottom-0 ">
          <p className="text-gray-700 text-base">
            Copyright © <span className="font-bold">Project Runner</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
