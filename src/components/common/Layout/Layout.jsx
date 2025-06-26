import React from "react";
import { Outlet } from "react-router-dom"; // For rendering the routed component
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar (Fixed on the left) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow overflow-auto">
        {/* Navbar (Fixed on top) */}
        <Navbar />

        {/* Main content area where routed content will be rendered */}
        <main className="flex-grow p-4 overflow-auto bg-teal-950">
          <Outlet />{" "}
          {/* This is where the content of the selected page will be rendered */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
