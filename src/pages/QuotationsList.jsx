
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const quotationsData = [
  { id: '01', title: 'Steel Beams - 20 Ton', from: 'Houston, Texas', to: 'Atlanta, Georgia', deliveryTime: '2 Days', price: '$3,200' },
  { id: '02', title: 'Frozen Food Shipment - 10 Ton', from: 'Chicago, Illinois', to: 'Orlando, Florida', deliveryTime: '3 Days', price: '$2,750' },
  { id: '03', title: 'Electronic Components - 5 Ton', from: 'San Jose, California', to: 'Austin, Texas', deliveryTime: '2 Days', price: '$2,900' },
  { id: '04', title: 'Construction Materials - 15 Ton', from: 'Denver, Colorado', to: 'Seattle, Washington', deliveryTime: '4 Days', price: '$3,500' },
  { id: '05', title: 'Medical Supplies - 8 Ton', from: 'Boston, Massachusetts', to: 'Miami, Florida', deliveryTime: '3 Days', price: '$2,650' },
];

const QuotationsList = () => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green-500">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Sr.No</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">From</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">To</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Delivery Time</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {quotationsData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.from}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.to}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.deliveryTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 flex items-center justify-end border-t border-gray-200">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <ChevronLeft className="h-5 w-5" />
          </a>
          <a href="#" aria-current="page" className="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">1</a>
          <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</a>
          <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
          <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">9</a>
          <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">10</a>
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <ChevronRight className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default QuotationsList;

