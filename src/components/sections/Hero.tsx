// src/components/sections/Hero.tsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="container mx-auto px-4 md:px-8 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="font-extrabold text-5xl md:text-[64px] leading-snug tracking-[0.05rem] text-gray-900 ">
            Construction <br /> Without the <span className="block">Chaos</span>
          </h1>
          <p className="mt-6 font-normal text-[24px] leading-snug tracking-[0.03em] text-black max-w-md mx-auto md:mx-0">
            Builders, streamline your material requests, deliveries, and site
            coordination — all from one platform.
          </p>

          <Button
            size="lg"
            className="mt-8 bg-[#8A5BD5] hover:bg-[#9c63f8] text-lg px-8 py-6 rounded-lg"
            onClick={() => navigate("/become-builder")}
          >
            Become a builder
          </Button>
        </div>
        <div className="relative  w-full  flex justify-center md:justify-end">
          <img
            src="/images/construction.png"
            alt="A construction site with a builder reviewing plans."
            className="w-10/12 h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
