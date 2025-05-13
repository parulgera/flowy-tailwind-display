
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const location = useLocation();
  
  let pageTitle = "Dashboard";
  if (location.pathname === "/") {
    pageTitle = "List Of Quotations";
  } else if (location.pathname === "/truckers") {
    pageTitle = "Trucker List";
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header pageTitle={pageTitle} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Outlet /> {/* This is where the routed page content will be rendered */}
        </main>
      </div>
    </div>
  );
};

export default Layout;

