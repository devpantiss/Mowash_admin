import React, { useState } from 'react';
import HospitalMap from './HospitalMap';
import Tabs from './Tabs';
import HospitalTable from './HospitalTable';

const hospitalData = [
  // Array of objects with district-wise data
  { name: 'Gajapati', government: 167, private: 4, total: 171 },
  { name: 'Ganjam', government: 596, private: 57, total: 653 },
  // Add the rest of the districts...
];

const MainComponent = () => {
  const [filter, setFilter] = useState('All');

  const filteredData = hospitalData.map((district) => ({
    ...district,
    total: filter === 'All' ? district.total : filter === 'Government' ? district.government : district.private,
  }));

  return (
    <div className="p-4">
      <Tabs setFilter={setFilter} />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3 p-2">
          <HospitalMap selectedData={filteredData} />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <HospitalTable data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
