import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BrandEndingBanner from "./BrandEndingBanner"; // ⬅ Add the ending banner

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-20">{children}</main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Layout;
