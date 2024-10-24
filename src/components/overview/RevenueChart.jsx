import { motion } from 'framer-motion';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const data = [
    {
      name: "Sun",
      books: 4000,
      clothes: 2400,
      electronic: 2400,
      homeAndGarden:6000
    },
    {
      name: "Mon",
      books: 3000,
      clothes: 1398,
      electronic: 2210,
      homeAndGarden:6000
    },
    {
      name: "Tue",
      books: 2000,
      clothes: 9800,
      electronic: 2290,
      homeAndGarden:6000

    },
    {
      name: "Wed",
      books: 2780,
      clothes: 3908,
      electronic: 2000,
      homeAndGarden:6000
    },
    {
      name: "Thu",
      books: 1890,
      clothes: 4800,
      electronic: 2181,
      homeAndGarden:6000
    },
    {
      name: "Fri",
      books: 2390,
      clothes: 3800,
      electronic: 2500,
      homeAndGarden:6000
    },
    {
      name: "Sat",
      books: 3490,
      clothes: 4300,
      electronic: 2100,
      homeAndGarden:6000
    },
  ];

const RevenueChart = () => {
  return (
    <motion.div
			className=' bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6  border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Sales by Channel</h2>

			<div className="h-80">
<ResponsiveContainer width="100%" height="100%">
  <AreaChart
   width={500}
   height={400}
    data={data}
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <XAxis dataKey="name"/>
    <YAxis />
    <Area type='monotone' dataKey='electronic' stackId='1' stroke="#8884d8" fill="#8884d8"  />
    <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
    <Area type="monotone" dataKey="books" stackId="1" stroke="#82ca9d" fill="#8264db"/>
    <Area  type="monotone" dataKey="homeAndGarden" stackId="1" stroke="#ffc658" fill="#ffc658" />
    <Tooltip contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B2563" }}
                      itemStyle={{ color: "#E5E7EB" }} />
    {/* <Tooltip  contentStyle={{background:"black"}}/> */}
    {/* <Area type="monotone" dataKey="electronic" stackId="1" stroke="#8884d8" fill="#8884d8" /> */}
    {/* <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" /> */}
    {/* <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
  </AreaChart>
</ResponsiveContainer>
			</div>
		</motion.div>
  )
}

export default RevenueChart;
