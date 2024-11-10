import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import DistrictDashboard from "./Pages/DistrictDashboard";
import MoWashOnboardingCenters from "./Pages/MowashOnboardingCenters";
import MoWashServiceProvidersList from "./Pages/MoWashServiceProvidersList";
import MoWashServicesListing from "./Pages/MoWashServicesListing";
import MoWashWelfareKendra from "./Pages/MoWashWelfareKendra";
import MoWashDetails from "./Pages/MoWashDetails";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="page1" element={<DistrictDashboard />} />
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
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
