import React, { useState } from "react";

const districtsData = [
  { name: "ANGUL", jobsCompleted: "92.84K", totalRevenue: "55.67 Cr", totalWorkers: "5.2K", totalIncome: "12.45 Cr" },
  { name: "BALASORE", jobsCompleted: "2.34 Cr", totalRevenue: "126.97 Cr", totalWorkers: "3.1K", totalIncome: "8.78 Cr" },
  { name: "BARGARH", jobsCompleted: "1.05 Cr", totalRevenue: "126.62 Cr", totalWorkers: "1.5K", totalIncome: "4.23 Cr" },
  { name: "BHADRAK", jobsCompleted: "1.27 Cr", totalRevenue: "114.31 Cr", totalWorkers: "2.8K", totalIncome: "6.54 Cr" },
  { name: "BOLANGIR", jobsCompleted: "1.43 Cr", totalRevenue: "33.61 Cr", totalWorkers: "4.1K", totalIncome: "7.92 Cr" },
  { name: "CUTTACK", jobsCompleted: "2.83 Cr", totalRevenue: "1298.86 Cr", totalWorkers: "9.5K", totalIncome: "18.67 Cr" },
  { name: "DEOGARH", jobsCompleted: "21.2 Lakhs", totalRevenue: "2.28 Cr", totalWorkers: "1.2K", totalIncome: "1.45 Cr" },
  { name: "DHENKANAL", jobsCompleted: "94.94 Lakhs", totalRevenue: "95.52 Cr", totalWorkers: "2.5K", totalIncome: "4.12 Cr" },
  { name: "GAJAPATI", jobsCompleted: "49.81 Lakhs", totalRevenue: "2.48 Cr", totalWorkers: "1.8K", totalIncome: "2.32 Cr" },
  { name: "GANJAM", jobsCompleted: "2.83 Cr", totalRevenue: "225.16 Cr", totalWorkers: "8.2K", totalIncome: "15.23 Cr" },
  { name: "JAGATSINGHPUR", jobsCompleted: "80.57 Lakhs", totalRevenue: "37.77 Cr", totalWorkers: "1.9K", totalIncome: "3.12 Cr" },
  { name: "JAJPUR", jobsCompleted: "1.39 Cr", totalRevenue: "152.54 Cr", totalWorkers: "2.7K", totalIncome: "5.89 Cr" },
  { name: "JHARSUGUDA", jobsCompleted: "44.56 Lakhs", totalRevenue: "2.71 Cr", totalWorkers: "1.1K", totalIncome: "1.89 Cr" },
  { name: "KALAHANDI", jobsCompleted: "1.05 Cr", totalRevenue: "42.11 Cr", totalWorkers: "2.3K", totalIncome: "4.67 Cr" },
  { name: "KANDHAMAL", jobsCompleted: "90.25 Lakhs", totalRevenue: "4.88 Cr", totalWorkers: "1.4K", totalIncome: "1.52 Cr" },
  { name: "KENDRAPARA", jobsCompleted: "1.13 Cr", totalRevenue: "49.78 Cr", totalWorkers: "2.5K", totalIncome: "5.33 Cr" },
  { name: "KENDUJHAR", jobsCompleted: "1.43 Cr", totalRevenue: "20.99 Cr", totalWorkers: "2.1K", totalIncome: "4.12 Cr" },
  { name: "KHORDHA", jobsCompleted: "3.12 Cr", totalRevenue: "3638.97 Cr", totalWorkers: "15.2K", totalIncome: "23.78 Cr" },
  { name: "KORAPUT", jobsCompleted: "1.22 Cr", totalRevenue: "8.39 Cr", totalWorkers: "1.7K", totalIncome: "2.78 Cr" },
  { name: "MAYURBHANJ", jobsCompleted: "2.15 Cr", totalRevenue: "44.91 Cr", totalWorkers: "3.9K", totalIncome: "6.72 Cr" },
  { name: "NABARANGPUR", jobsCompleted: "75.15 Lakhs", totalRevenue: "13.31 Cr", totalWorkers: "1.2K", totalIncome: "1.78 Cr" },
  { name: "NAYAGARH", jobsCompleted: "99.08 Lakhs", totalRevenue: "37.08 Cr", totalWorkers: "1.9K", totalIncome: "2.89 Cr" },
  { name: "NUAPADA", jobsCompleted: "37.51 Lakhs", totalRevenue: "10.67 Cr", totalWorkers: "900", totalIncome: "1.23 Cr" },
  { name: "PURI", jobsCompleted: "1.42 Cr", totalRevenue: "57.05 Cr", totalWorkers: "2.4K", totalIncome: "6.12 Cr" },
  { name: "RAYAGADA", jobsCompleted: "82.49 Lakhs", totalRevenue: "11.3 Cr", totalWorkers: "1.3K", totalIncome: "2.31 Cr" },
  { name: "SAMBALPUR", jobsCompleted: "1.22 Cr", totalRevenue: "112.43 Cr", totalWorkers: "3.4K", totalIncome: "7.98 Cr" },
  { name: "SUNDARGARH", jobsCompleted: "85.98K", totalRevenue: "130.48 Cr", totalWorkers: "2.9K", totalIncome: "5.34 Cr" },
];

const DistrictDashboard = () => {
  const [activeTab, setActiveTab] = useState("jobs"); // State to track active tab

  return (
    <div className="p-8 bg-transparent text-white min-h-screen">
      <div className="text-2xl font-bold mb-4">Districts of Odisha</div>

      {/* Tabs */}
      <div className="mb-4">
        <button
          onClick={() => setActiveTab("jobs")}
          className={`px-4 py-2 mr-2 font-bold ${activeTab === "jobs" ? "bg-blue-700" : "bg-blue-500"}`}
        >
          Jobs & Revenue
        </button>
        <button
          onClick={() => setActiveTab("workers")}
          className={`px-4 py-2 font-bold ${activeTab === "workers" ? "bg-blue-700" : "bg-blue-500"}`}
        >
          Workers & Income
        </button>
      </div>

      {/* Content based on selected tab */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {districtsData.map((district, index) => (
          <div
            key={index}
            className="bg-blue-800 p-4 rounded-md shadow-md hover:bg-blue-700 transition-colors"
          >
            <h2 className="text-lg font-semibold">{district.name}</h2>
            
            {/* Render data based on active tab */}
            {activeTab === "jobs" ? (
              <div className="flex justify-between">
                <div>
                  <p className="mt-2 text-sm">Jobs Completed (no.)</p>
                  <p className="text-2xl font-bold">{district.jobsCompleted}</p>
                </div>
                <div>
                  <p className="mt-2 text-sm">Total Revenue (₹)</p>
                  <p className="text-2xl font-bold">{district.totalRevenue}</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-between">
                <div>
                  <p className="mt-2 text-sm">Total Workers (no.)</p>
                  <p className="text-2xl font-bold">{district.totalWorkers}</p>
                </div>
                <div>
                  <p className="mt-2 text-sm">Total Income (₹)</p>
                  <p className="text-2xl font-bold">{district.totalIncome}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistrictDashboard;
