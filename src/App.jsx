import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GDPRConsent from "./components/GDPRButton";

import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import  PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/Term";

function App() {
  return (
    <Router>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <Footer />
      <GDPRConsent />
     
    </Router>
  );
}

export default App;
