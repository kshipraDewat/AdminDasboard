import NavBar from '../components/NavBar'
import { motion } from 'framer-motion'
import {Package, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react'
import StateCard from '../components/StateCard'
import ProductTable from '../components/products/ProductTable'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'
import SalesTrendChart from '../components/products/SalesTrendChart'

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <NavBar title="Products" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div 
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard name='Total Products' icon={Package} value={1234} color='#6366F1' />
          <StateCard name='Top Selling' icon={TrendingUp} value={89} color='#10b981' />
          <StateCard name='Low Stock' icon={AlertTriangle} value={23} color='#f59e0b' />
          <StateCard name='Total Revenue' icon={DollarSign} value={"$543,210"} color='#ef4444' />
        </motion.div>

        <ProductTable/>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart/>
          <CategoryDistributionChart/>
        </div>
        



     </main>
    </div>
  )
}

export default ProductsPage
