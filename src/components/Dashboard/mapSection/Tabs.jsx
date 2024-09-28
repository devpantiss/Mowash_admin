import React, { useState } from 'react';

const Tabs = ({ setFilter }) => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setFilter(tab);
  };

  return (
    <div className="flex justify-center mb-4">
      {['All', 'Government', 'Private'].map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 mx-2 ${activeTab === tab ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
