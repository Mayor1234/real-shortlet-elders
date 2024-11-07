import React from 'react';

type DataItem = {
  key: string;
  value: string;
};

const data: DataItem[] = [
  { key: 'Orchid', value: 'N100,000 - N1,000,000' },
  { key: 'Chevron', value: 'N500,000 - N3,000,000' },
  { key: 'Ikate', value: 'N1,000,000 - N3,500,000' },
  { key: 'Lekki Phase 1', value: 'N1,000,000 - N5,000,000' },
  { key: 'Victoria Island', value: 'N2,000,000 - N8,000,000' },
  { key: 'Ikoyi', value: 'N5,000,000 - High Capital' },
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
