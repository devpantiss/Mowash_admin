import React from 'react'
import FirstRow from '../components/Dashboard/FirstRow'
import WorkersMap from '../components/Dashboard/WorkersMap'
import PieChartSection from '../components/Dashboard/demographic/PieChartSection'
import WorksDoneMap from '../components/Dashboard/WorksDoneMap'
import WorkCards from '../components/Dashboard/WorkCards'
import SalesSummary from '../components/Dashboard/SalesSummary'
import QuickLinks from '../components/Dashboard/QuickLinks'
import UsersMap from '../components/Dashboard/UsersMap'
const Dashboard = () => {


  return (
    <div className='p-2'>
      <FirstRow />
      <WorkersMap />
      <PieChartSection />
      <WorksDoneMap />
      <WorkCards />
      <UsersMap />
      <SalesSummary />
      <QuickLinks />
    </div>
  )
}

export default Dashboard