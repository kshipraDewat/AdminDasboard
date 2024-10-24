import NavBar from '../components/NavBar'
import OverviewCard from '../components/analytics/OverviewCard'
import RevenueVsTargetChart from '../components/analytics/RevenueVsTargetChart'
import ChannelPerformance from '../components/analytics/ChannelPerformance'
import ProductPerformance from '../components/analytics/ProductPerformance'
import UserRetention from '../components/analytics/UserRetention'
import AIPoweredInsight from '../components/analytics/AIPoweredInsight'
import CustSegChart from '../components/analytics/CustSegChart'

const AnalyticsPages = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <NavBar title="Analytics Dashboard" />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <OverviewCard />
        <RevenueVsTargetChart />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustSegChart/>
          
        </div>
        <AIPoweredInsight/>


      </main>

    </div>
  )
}

export default AnalyticsPages
