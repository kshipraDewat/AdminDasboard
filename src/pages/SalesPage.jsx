import NavBar from '../components/NavBar'
import { motion } from 'framer-motion'
import {  DollarSign, ShoppingCart, TrendingUp, CreditCard } from 'lucide-react'
import StateCard from '../components/StateCard'
import DailySalesTrend from '../components/sales/DailySalesTrend'
import SalesByCategoryChart from '../components/sales/SalesByCategoryChart'
import SalesAreaChart from '../components/sales/SalesAreaChart'


const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};

const SalesPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <NavBar title="Sales" />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard name='Total Revenue' icon={DollarSign} value={salesStats.totalRevenue.toLocaleString()} color='#6366F1' />
          <StateCard name='Avg. Order Value' icon={ShoppingCart} value={salesStats.averageOrderValue} color='#10B981' />
          <StateCard name='Conversion Rate' icon={TrendingUp} value={salesStats.conversionRate.toLocaleString()} color='#f59e0b' />
          <StateCard name='Sales Growth' icon={CreditCard} value={salesStats.salesGrowth} color='#EF4444' />
        </motion.div>
        
        <SalesAreaChart />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>


      </main>
    </div>

  )
}

export default SalesPage
