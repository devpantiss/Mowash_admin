import React from "react";
import {
  FaToilet,
  FaTruck,
  FaRecycle,
  FaWater,
  FaLeaf,
  FaSolarPanel,
  FaBuilding,
} from "react-icons/fa";

// Mock data for services
const serviceData = [
  {
    id: 1,
    name: "Toilet Mason, Electrician & Plumbers",
    users: 1200,
    serviceProviders: 50,
    jobsCompleted: 800,
    revenue: 150000,
    icon: <FaToilet />,
  },
  {
    id: 2,
    name: "Cesspool Vehicle Service Providers",
    users: 900,
    serviceProviders: 25,
    jobsCompleted: 600,
    revenue: 120000,
    icon: <FaTruck />,
  },
  {
    id: 3,
    name: "Waste Collection, Segregation & Processing",
    users: 2500,
    serviceProviders: 75,
    jobsCompleted: 1200,
    revenue: 300000,
    icon: <FaRecycle />,
  },
  {
    id: 4,
    name: "Nal Jal Mitra for Drinking Water",
    users: 1800,
    serviceProviders: 40,
    jobsCompleted: 950,
    revenue: 200000,
    icon: <FaWater />,
  },
  {
    id: 5,
    name: "Solid & Liquid Waste Treatment",
    users: 1300,
    serviceProviders: 60,
    jobsCompleted: 1100,
    revenue: 250000,
    icon: <FaLeaf />,
  },
  {
    id: 6,
    name: "Solar Plant & Water Pump, EPC, O&M",
    users: 1500,
    serviceProviders: 35,
    jobsCompleted: 500,
    revenue: 180000,
    icon: <FaSolarPanel />,
  },
  {
    id: 7,
    name: "Pond Restoration & Rejuvenation",
    users: 800,
    serviceProviders: 20,
    jobsCompleted: 300,
    revenue: 100000,
    icon: <FaWater />, // Replaced with FaWater for similar representation
  },
  {
    id: 8,
    name: "Institutional Facility Management",
    users: 2200,
    serviceProviders: 55,
    jobsCompleted: 1400,
    revenue: 400000,
    icon: <FaBuilding />,
  },
];

const MoWashServicesListing = () => {
  return (
    <div className="p-6 bg-transparent ring-2 ring-white rounded-md text-white min-h-screen">
      <h2 className="text-2xl font-semibold mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="bg-blue-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col lg:flex-row text-center items-center mb-4">
              <div className="text-4xl mr-4 text-white">{service.icon}</div>
              <h3 className="text-2xl font-bold">{service.name}</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <p className="flex text-center flex-col">
                  <span className="text-2xl">
                    {service.users.toLocaleString()}
                  </span>
                  <span className="font-semibold">Users</span>
                </p>
              </div>
              <div>
                <p className="flex text-center flex-col">
                  <span className="text-2xl">{service.serviceProviders} </span>
                  <span className="font-semibold">Service Providers</span>{" "}
                </p>
              </div>
              <div>
                <p className="flex text-center flex-col">
                  <span className="text-2xl">
                    {" "}
                    {service.jobsCompleted.toLocaleString()}
                  </span>
                  <span className="font-semibold">Jobs Completed</span>
                </p>
              </div>
              <div>
                <p className="flex text-center flex-col">
                  <span className="text-2xl">
                    ₹{service.revenue.toLocaleString()}
                  </span>
                  <span className="font-semibold">Revenue Generated</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoWashServicesListing;
