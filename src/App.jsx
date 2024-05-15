import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OfficeService from "./pages/OfficeService";
import HomeService from "./pages/HomeService";
import AboutPage from "./pages/AboutPage";
import NavbarComponent from "./components/NavbarComponent";
import ContactPage from "./pages/ContactPage";
import FooterComponent from "./components/FooterComponent";
import ScrollToTop from "./ScrollToTop";
import AdditionalReno from "./ServiceComponents/AdditionalReno";
import CustomService from "./pages/CustomService";

function App() {
  return (
    <>
      <Router>
        <div>
          <ScrollToTop />
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Routes>
            <Route path="/officeservice" element={<OfficeService />} />
          </Routes>
          <Routes>
            <Route path="/homeservice" element={<HomeService />} />
          </Routes>
          <Routes>
            <Route path="/customaddition" element={<CustomService />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <FooterComponent />
        </div>
      </Router>
    </>
  );
}

export default App;
