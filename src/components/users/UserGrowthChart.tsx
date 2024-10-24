import { motion } from 'framer-motion'
import React from 'react'
import { ResponsiveContainer, XAxis, YAxis, Tooltip, Line, Area, LineChart, CartesianGrid } from 'recharts'
const salesData = [
    { month: "Jan", sales: 1000 },
    { month: "Feb", sales: 1500 },
    { month: "Mar", sales: 2000 },
    { month: "Apr", sales: 3000 },
    { month: "May", sales: 4000 },
    { month: "Jun", sales: 5000 },
    { month: "Jul", sales: 6500 },
];
const UserGrowthChart = () => {
  return (
    <div>
         <motion.div
                className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className='flex items-center justify-between mb-6'>
                    <h2 className='text-xl font-semibold text-gray-100'>Sales Trend </h2>
            
                </div>
                <div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={salesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='month' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
                        <Tooltip contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}/>
					   <Line type="linear" dataKey='sales' stroke='#6366f1' strokeWidth={3} dot={{fill:"#6366f1", strokeWidth:2, r:6}} activeDot={{r:8 , strokeWidth:2}} />
							
                        <Area type='monotone' dataKey='sales' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
					</LineChart>
				</ResponsiveContainer>
			</div>

            </motion.div>
      
    </div>
  )
}

export default UserGrowthChart
