import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { AboutUs } from "./components/sections/AboutUs";
import { AllInOne } from "./components/sections/AllInOne";
import { Pricing } from "./components/sections/Pricing";
import { FAQ } from "./components/sections/Faq";
import { ContactUs } from "./components/sections/ContactUs";
import { BecomeBuilder } from "./components/sections/BecomeBuilder";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="grid-background">
                <Hero />
              </div>
              <main>
                <AboutUs />
                <AllInOne />
                <Pricing />
                <FAQ />
                <ContactUs />
              </main>
            </>
          }
        />
        <Route path="/become-builder" element={<BecomeBuilder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
