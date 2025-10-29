"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Who is this app designed for?",
    answer:
      "The app is built for construction companies, builders, subcontractors, and forklift operators to streamline material requests and deliveries.",
  },
  {
    question: "Do subcontractors or forklift operators need to pay?",
    answer:
      "Subcontractors and forklift operators can access the platform through their assigned projects without additional charges.",
  },
  {
    question: "Can I manage multiple construction sites from one account?",
    answer:
      "Yes, you can manage multiple construction sites from a single account with full visibility and control across all projects.",
  },
  {
    question: "Is there real-time delivery tracking?",
    answer:
      "Yes, our platform provides real-time delivery tracking so you can monitor material deliveries as they happen.",
  },
  {
    question: "Can I assign specific forklift operators to specific sites?",
    answer:
      "Absolutely, you can assign specific forklift operators to specific sites for better coordination and management.",
  },
];

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const toggleExpand = (index: number) =>
    setExpandedIndex(expandedIndex === index ? -1 : index);

  return (
    <section className="bg-white py-10 md:py-20">
      {/* Narrower outer container for the whole section */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading (kept centered) */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#8A5BD5]">FAQ's</span>
          </h2>
        </div>

        {/* FAQ grid: narrower than before, centered */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 md:pb-6"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex items-start justify-between gap-4 text-left hover:opacity-80 transition-opacity"
                >
                  <span className="text-gray-900 font-medium text-base md:text-lg flex-1">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 mt-1">
                    {expandedIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
