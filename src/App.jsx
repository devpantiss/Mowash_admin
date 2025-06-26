import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import DistrictDashboard from "./Pages/DistrictDashboard";
import MoWashOnboardingCenters from "./Pages/MoWashOnboardingCenters";
import MoWashServiceProvidersList from "./Pages/MoWashServiceProvidersList";
import MoWashServicesListing from "./Pages/MoWashServicesListing";
import MoWashWelfareKendra from "./Pages/MoWashWelfareKendra";
import MoWashDetails from "./Pages/MoWashDetails";
import HomePage from "./Pages/HomePage";
import VillageDetailPage from "./Pages/VillageDetailsPage"; // Import the new page

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="block_dashboard" element={<DistrictDashboard />} />
            <Route
              path="onboarding-centers"
              element={<MoWashOnboardingCenters />}
            />
            <Route
              path="total-service-providers"
              element={<MoWashServiceProvidersList />}
            />
            <Route path="total-services" element={<MoWashServicesListing />} />
            <Route path="welfare-kendra" element={<MoWashWelfareKendra />} />
            <Route path="about" element={<MoWashDetails />} />
            <Route
              path="village/:villageName"
              element={<VillageDetailPage />}
            /> {/* New route for village details */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;