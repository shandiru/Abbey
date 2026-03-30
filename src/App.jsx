import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GDPRConsent from "./components/GDPRButton";

import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
      <Footer />
      <GDPRConsent />
     
    </Router>
  );
}

export default App;
