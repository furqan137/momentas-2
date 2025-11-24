// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// LAYOUT
import Layout from "./components/layout/Layout";

// PAGES
import LandingPage from "./components/pages/LandingPage";
import AboutPage from "./components/pages/AboutPage";
import InnovationPage from "./components/pages/InnovationPage";
import VisionPage from "./components/pages/VisionPage";
import ContactPage from "./components/pages/ContactPage"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <Layout>
              <LandingPage />
            </Layout>
          }
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />

        {/* INNOVATION */}
        <Route
          path="/innovation"
          element={
            <Layout>
              <InnovationPage />
            </Layout>
          }
        />

        {/* VISION */}
        <Route
          path="/vision"
          element={
            <Layout>
              <VisionPage />
            </Layout>
          }
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
