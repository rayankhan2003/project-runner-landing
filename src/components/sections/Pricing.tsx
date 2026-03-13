"use client";

import { useState } from "react";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Pro",
      price: isYearly ? 408 : 34,
      description: "Unleash the Power of Your Business with Pro Plan.",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1M19.6667 13C19.6667 16.6819 16.6819 19.6667 13 19.6667C9.3181 19.6667 6.33333 16.6819 6.33333 13C6.33333 9.3181 9.3181 6.33333 13 6.33333M16.6772 9.46883L21.9558 10.0232L24.8172 6.01723L21.3835 4.87266L20.239 1.43895L16.233 4.30038L16.6772 9.46883ZM16.6772 9.46883L13 12.9999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "1 active site",
        "Up to 3 forklift operators",
        "5 subcontractors",
      ],
      buttonStyle: "border-2 border-[#1B223C] text-[#1B223C] hover:bg-gray-50",
      isHighlighted: false,
    },
    {
      name: "Business",
      price: isYearly ? 672 : 56,
      description: "Take Your Business to the Next Level with Business Plan.",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00039 9.00022H24.7003M6.24854 1.06753L12.8504 9.0003L19.4633 1.07309M24.4317 8.37229L19.8337 1.47521C19.7179 1.30155 19.66 1.21472 19.5835 1.15186C19.5158 1.09621 19.4378 1.05446 19.3539 1.02899C19.2592 1.00022 19.1548 1.00022 18.9461 1.00022H6.75452C6.54581 1.00022 6.44145 1.00022 6.34673 1.02899C6.26287 1.05446 6.18485 1.09621 6.11714 1.15186C6.04066 1.21472 5.98278 1.30155 5.867 1.47521L1.26895 8.37229C1.11823 8.59837 1.04287 8.71141 1.01586 8.83302C0.992003 8.94043 0.995102 9.05207 1.02488 9.15799C1.05859 9.27791 1.14011 9.38659 1.30314 9.60397L11.997 23.8624C12.2865 24.2484 12.4312 24.4414 12.6087 24.5104C12.7641 24.5709 12.9365 24.5709 13.092 24.5104C13.2694 24.4414 13.4142 24.2484 13.7037 23.8624L24.3975 9.60397C24.5605 9.38659 24.6421 9.27791 24.6758 9.15799C24.7056 9.05207 24.7087 8.94043 24.6848 8.83302C24.6578 8.71141 24.5824 8.59837 24.4317 8.37229Z"
            stroke="#1B223C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "Unlimited sites",
        "Priority support",
        "Multi-user Access",
        "15 Subcontractors",
        "Reporting Tools",
      ],
      buttonStyle: "bg-[#1B223C] text-white hover:bg-[#0f0f1e]",
      isHighlighted: true,
      badge: "Best offer",
    },
  ];

  return (
    <section id="subscription" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#8A5BD5]">Find Your</span>{" "}
            <span className="text-[#F48C06]">Perfect Plan</span>
          </h2>
          <p className="text-[#3A3A3A] text-lg max-w-2xl mx-auto mb-8">
            Discover the ideal plan to fuel your business growth. Our pricing
            options are carefully crafted to cater to businesses.
          </p>

          {/* Toggle */}
          <div className="flex justify-center gap-2 mb-12 bg-[#FBFBFB] p-2 rounded-2xl border border-[#E7EBFF] w-fit mx-auto shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                !isYearly
                  ? "bg-white text-[#1B223C] border border-[#E7EBFF] shadow-md"
                  : "text-[#797878] hover:text-[#1B223C]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                isYearly
                  ? "bg-white text-[#1B223C] border border-[#E7EBFF] shadow-md"
                  : "text-[#797878] hover:text-[#1B223C]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pro Card */}
          <div className="relative rounded-3xl p-10 bg-white border border-[#E7EBFF] shadow-lg flex flex-col justify-between">
            {/* Icon */}
            <div>
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-2xl bg-[#6A8AFF]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1M19.6667 13C19.6667 16.6819 16.6819 19.6667 13 19.6667C9.3181 19.6667 6.33333 16.6819 6.33333 13C6.33333 9.3181 9.3181 6.33333 13 6.33333M16.6772 9.46883L21.9558 10.0232L24.8172 6.01723L21.3835 4.87266L20.239 1.43895L16.233 4.30038L16.6772 9.46883ZM16.6772 9.46883L13 12.9999"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Plan Name */}
            <h3 className="text-4xl font-bold text-[#1B223C] mb-2">Pro</h3>

            {/* Description */}
            <p className="text-[#797878] text-lg mb-6">
              Unleash the Power of Your Business with Pro Plan.
            </p>

            {/* Price */}
            <div className="mb-8">
              <span className="text-6xl font-bold text-[#1B223C]">
                ${plans[0].price}
              </span>
              <span className="text-[#797878] text-lg ml-2">per month</span>
            </div>

            {/* Divider */}
            <div className="border-t border-[#E7EBFF] mb-6"></div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
              {plans[0].features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59961 14.6999C14.3496 22.0499 16.0996 21.6999 22.7496 8.3999"
                      stroke="#1B223C"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="text-[#1B223C] text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="w-full py-4 rounded-xl font-medium border-2 border-[#1B223C] text-[#1B223C] hover:bg-gray-50 transition-all">
              Get Started
            </button>
          </div>

          {/* Business Card */}
          <div className="relative rounded-3xl p-10 bg-white border border-[#E7EBFF] shadow-lg flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              {/* Large ellipse 1 */}
              <div
                className="absolute rounded-full"
                style={{
                  width: "968.66px",
                  height: "968.66px",
                  left: "-550px",
                  top: "-150px",
                  background:
                    "linear-gradient(180deg, rgba(106, 138, 255, 0.56) 0%, rgba(239, 242, 255, 0.2) 100%)",
                }}
              ></div>
              {/* Large ellipse 2 */}
              <div
                className="absolute rounded-full"
                style={{
                  width: "968.66px",
                  height: "968.66px",
                  left: "calc(50% - 968.66px/2 + 108.15px)",
                  top: "-77.66px",
                  background:
                    "linear-gradient(180deg, rgba(106, 138, 255, 0.5) 0%, rgba(106, 138, 255, 0.08) 100%)",
                }}
              ></div>
            </div>

            {/* Content wrapper with z-index */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="absolute top-[85px] left-40  bg-white bg-opacity-20 text-white px-3 py-1 rounded-lg text-sm font-light border border-white border-opacity-30">
                Best offer
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-md">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.15078 12.0002H27.8507M9.39893 4.06753L16.0007 12.0003L22.6137 4.07309M27.5821 11.3723L22.984 4.47521C22.8683 4.30155 22.8104 4.21472 22.7339 4.15186C22.6662 4.09621 22.5882 4.05446 22.5043 4.02899C22.4096 4.00022 22.3052 4.00022 22.0965 4.00022H9.90491C9.6962 4.00022 9.59184 4.00022 9.49712 4.02899C9.41326 4.05446 9.33524 4.09621 9.26753 4.15186C9.19105 4.21472 9.13317 4.30155 9.01739 4.47521L4.41934 11.3723C4.26862 11.5984 4.19326 11.7114 4.16625 11.833C4.14239 11.9404 4.14549 12.0521 4.17527 12.158C4.20898 12.2779 4.2905 12.3866 4.45353 12.604L15.1474 26.8624C15.4369 27.2484 15.5816 27.4414 15.7591 27.5104C15.9145 27.5709 16.0869 27.5709 16.2424 27.5104C16.4198 27.4414 16.5646 27.2484 16.8541 26.8624L27.5479 12.604C27.7109 12.3866 27.7925 12.2779 27.8262 12.158C27.8559 12.0521 27.859 11.9404 27.8352 11.833C27.8082 11.7114 27.7328 11.5984 27.5821 11.3723Z"
                      stroke="#1B223C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Plan Name */}
              <h3 className="text-4xl font-bold text-[#1B223C] mb-2">
                Business
              </h3>

              {/* Description */}
              <p className="text-[#3C3C3C] text-lg mb-6">
                Take Your Business to the Next Level with Business Plan.
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-6xl font-bold text-[#1B223C]">
                  ${plans[1].price}
                </span>
                <span className="text-[#3C3C3C] text-lg ml-2">per month</span>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E7EBFF] mb-6"></div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plans[1].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.59961 14.6999C14.3496 22.0499 16.0996 21.6999 22.7496 8.3999"
                        stroke="#1B223C"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>

                    <span className="text-[#1B223C] text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button className="relative z-10 w-full py-4 rounded-xl font-medium bg-[#1B223C] text-white hover:bg-[#0f0f1e] transition-all shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
