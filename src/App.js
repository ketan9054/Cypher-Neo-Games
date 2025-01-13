import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/LandingPage/Footer";
import QuickLinks from "./components/LandingPage/QuickLinks";
import Header from "./components/LandingPage/Header";

// import Footer from "./components/Footer"; // Adjust the path if Footer is located elsewhere
import DisclaimerPage from "./pages/DisclaimerPage";
import TermsPage from "./pages/TermsPage";
import LegalityPage from "./pages/LegalityPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import PasswordPolicyPage from "./pages/PasswordPolicyPage";
import SitemapPage from "./pages/SitemapPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import QuickLinks from "./components/LandingPage/QuickLinks";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/legality" element={<LegalityPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/password" element={<PasswordPolicyPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
          </Routes>
        </main>
        <QuickLinks />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
