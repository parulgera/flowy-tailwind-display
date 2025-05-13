
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ClipboardList, Truck, UserCircle } from 'lucide-react'; // Using UserCircle for logo placeholder

const Sidebar = () => {
  const location = useLocation();
  const navItems = [
    { name: 'List Of Quotations', path: '/', icon: ClipboardList },
    { name: 'Trucker List', path: '/truckers', icon: Truck },
  ];

  return (
    <div className="w-64 bg-slate-50 text-gray-700 flex flex-col h-full border-r border-gray-200">
      <div className="p-5 border-b border-gray-200 flex items-center space-x-3">
        <div className="bg-gray-300 p-2 rounded-full">
          <UserCircle size={28} className="text-gray-600" />
        </div>
        <h1 className="text-xl font-semibold text-gray-800">Trucking App</h1>
      </div>
      <nav className="mt-5 flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="px-3">
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-colors
                  ${location.pathname === item.path
                    ? 'bg-green-500 text-white'
                    : 'hover:bg-green-100 hover:text-green-700'
                  }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-5 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">
            U
          </div>
          <span className="text-sm text-gray-600">Hello, User</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

