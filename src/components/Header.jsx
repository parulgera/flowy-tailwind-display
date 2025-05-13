
import React from 'react';
import { Search, UserCircle } from 'lucide-react';

const Header = ({ pageTitle }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">{pageTitle}</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder={pageTitle === "List Of Quotations" ? "Search by anything" : "Search truckers"}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md text-sm">
          {pageTitle === "List Of Quotations" ? "Request" : "Add Trucker"}
        </button>
      </div>
    </header>
  );
};

export default Header;

