import React from "react";
import QuickLinks from "../components/Dashboard2/QuickLinks";
import Row1 from "../components/Dashboard2/Row1";
import Row3 from "../components/Dashboard2/Row3";
import Row4 from "../components/Dashboard2/Row4";
import Row5 from "../components/Dashboard2/Row5";
import Row67 from "../components/Dashboard2/Row67";
import Row8 from "../components/Dashboard2/Row8";
import Row9 from "../components/Dashboard2/Row9";
import Row10 from "../components/Dashboard2/Row10";
import MapSection from "../components/Dashboard2/MapSection";
const Dashboard = () => {
  return (
    <div className="overflow-auto p-2 w-full">
      <Row1 />
      <MapSection />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row8 />
      <Row67 />
      <Row9 />
      <Row10 />
      <QuickLinks />
    </div>
  );
};

export default Dashboard;
