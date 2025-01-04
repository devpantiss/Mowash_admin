import React from "react";
import FirstRow from "../components/Dashboard/FirstRow";
import WorkersMap from "../components/Dashboard/WorkersMap";
import PieChartSection from "../components/Dashboard/demographic/PieChartSection";
import WorksDoneMap from "../components/Dashboard/WorksDoneMap";
import WorkCards from "../components/Dashboard/WorkCards";
import SalesSummary from "../components/Dashboard/SalesSummary";
import QuickLinks from "../components/Dashboard/QuickLinks";
import UsersMap from "../components/Dashboard/UsersMap";
// import WorkRow from "../components/Dashboard/WorkRow";
import Row2 from "../components/Dashboard/Row2";
const Dashboard = () => {
  return (
    <div className="overflow-auto p-2 w-full">
      <FirstRow />
      <WorkersMap />
      <PieChartSection />
      {/* <WorkRow /> */}
      <UsersMap />
      <WorkCards />
      <WorksDoneMap />
      {/* <Row2 /> */}
      <SalesSummary />
      <QuickLinks />
    </div>
  );
};

export default Dashboard;
