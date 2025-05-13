
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const truckersData = [
  { id: '01', name: 'John Smith', phone: '(555) 123-4567', location: 'Dallas, TX', truckType: 'Heavy-duty', availability: 'Available', availabilityClass: 'bg-green-100 text-green-800' },
  { id: '02', name: 'Sarah Johnson', phone: '(555) 234-5678', location: 'Phoenix, AZ', truckType: 'Refrigerator', availability: 'On delivery', availabilityClass: 'bg-yellow-100 text-yellow-800' },
  { id: '03', name: 'Michael Brown', phone: '(555) 345-6789', location: 'Chicago, IL', truckType: 'Flatbed', availability: 'Available', availabilityClass: 'bg-green-100 text-green-800' },
  { id: '04', name: 'Jennifer Davis', phone: '(555) 456-7890', location: 'Los Angeles, CA', truckType: 'Container', availability: 'Available', availabilityClass: 'bg-green-100 text-green-800' },
];

const TruckerList = () => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green-500">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Phone</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Location</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Truck Type</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Availability</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {truckersData.map((trucker) => (
              <tr key={trucker.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trucker.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{trucker.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{trucker.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{trucker.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{trucker.truckType}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${trucker.availabilityClass}`}>
                    {trucker.availability}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       <div className="px-6 py-3 flex items-center justify-end border-t border-gray-200">
        {/* Placeholder for pagination if needed in future, same as QuotationsList */}
         <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <ChevronLeft className="h-5 w-5" />
          </a>
          <a href="#" aria-current="page" className="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">1</a>
          <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</a>
          <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
          <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">3</a>
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <ChevronRight className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default TruckerList;

