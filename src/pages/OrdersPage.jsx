import NavBar from '../components/NavBar'
import { motion } from 'framer-motion';
import {  ShoppingBag, Clock, CheckCircle, DollarSign } from 'lucide-react';
import StateCard from '../components/StateCard';
import DailyOrders from '../components/orders/DailyOrders';
import OrderDistribution from '../components/orders/OrderDistribution';
import OrdersTable from '../components/orders/OrdersTable';

const orderStats = {
	totalOrders: "1,234",
	pendingOrders: "56",
	completedOrders: "1,178",
	totalRevenue: "$98,765",
};
const OrdersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
    <NavBar title="Orders" />
    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div 
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard name='Total Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
          <StateCard name='Pending Orders' icon={Clock} value={orderStats.pendingOrders}  color='#F59E0B' />
          <StateCard name='Completed Orders' icon={CheckCircle} value={orderStats.completedOrders}  color='#10B981'/>
          <StateCard name='Total Revenue' icon={DollarSign} value={orderStats.totalRevenue}  color='#EF4444' />
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<DailyOrders />
					<OrderDistribution />
				</div>

				<OrdersTable />
        

      </main>
  </div>
  )
}

export default OrdersPage
