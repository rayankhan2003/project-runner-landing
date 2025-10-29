import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx("div", { className: "grid-background", children: _jsx(Hero, {}) }), _jsxs("main", { children: [_jsx(AboutUs, {}), _jsx(AllInOne, {}), _jsx(Pricing, {}), _jsx(FAQ, {}), _jsx(ContactUs, {})] })] }) }), _jsx(Route, { path: "/become-builder", element: _jsx(BecomeBuilder, {}) })] }), _jsx(Footer, {})] }));
}
export default App;
