import React from 'react'
import FirstRow from '../components/Dashboard/FirstRow'
import WorkersMap from '../components/Dashboard/WorkersMap'
import PieChartSection from '../components/Dashboard/demographic/PieChartSection'
import WorksDoneMap from '../components/Dashboard/WorksDoneMap'
import WorkCards from '../components/Dashboard/WorkCards'
import SalesSummary from '../components/Dashboard/SalesSummary'
const Dashboard = () => {
  return (
    <div className='p-2'>
      <FirstRow />
      <WorkersMap />
      <PieChartSection />
      <WorksDoneMap />
      <WorkCards />
      <SalesSummary />
    </div>
  )
}

export default Dashboard