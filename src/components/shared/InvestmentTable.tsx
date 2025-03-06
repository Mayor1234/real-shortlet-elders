import React from 'react';

type DataItem = {
  key: string;
  value: string;
};

const data: DataItem[] = [
  { key: 'Soma Bay', value: '₦500,000 - ₦3,500,000' },
  { key: 'Giza	', value: '₦3,500,000 - ₦5,000,000' },
  { key: 'Aswan & Luxor', value: '₦5,000,000 - ₦8,000,000' },
  { key: 'Madinaty', value: '₦8,000,000 - ₦10,000,000' },
  { key: 'Cairo', value: '₦10,000,000 + (High Capital)' },
];

const InvestmentTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-gray-800">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-medium">LOCATIONS</th>
            <th className="px-4 py-2 text-left font-medium">CAPITAL RANGE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.key} className="text-gray-700">
              <td className="px-4 py-2 ">{item.key}</td>
              <td className="px-4 py-2 ">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
