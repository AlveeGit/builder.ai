import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        <div className="">{children}</div>
      </main>
      <Footer />
      <Banner />
    </div>
  );
};

export default Layout;
