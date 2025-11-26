// src/components/layout/Layout.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Header />

      {/* Remove top padding for home hero, keep for others */}
      <main className={`flex-1 ${isHomePage ? "pt-0" : "pt-20"}`}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
