import { motion } from 'framer-motion'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const categoryData = [
	{ name: "Electronics", value: 4500, color:"#6366F1"},
	{ name: "Clothing", value: 3200, color:"#8B5CF6" },
	{ name: "Home & Garden", value: 2800, color:"#EC4899" },
	{ name: "Books", value: 2100,color:"#10B981" },
	{ name: "Sports & Outdoors", value: 1900 ,color:"#F59E0B" },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const CategoryChart = () => {
  return (
    <motion.div  className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}>
   
   <h2 className='text-xl font-semibold text-gray-100'> Category Distribution</h2>
   <div className='h-80'>
   <ResponsiveContainer width="100%" height="100%" >
      <PieChart >
        <Tooltip
        contentStyle={{background:"white" , borderRadius:"5px"}}
        />
        <Pie
          data={categoryData}
          innerRadius={"70%"}
          outerRadius={"90%"}
          paddingAngle={5}
          labelLine={false}
          dataKey= "value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {categoryData.map((item) => (
            <Cell 
                key={item.name} 
                fill={item.color} />
          ))}
        </Pie>
       
      </PieChart>
      </ResponsiveContainer>
   </div>
   <div className=' flex lg:gap-4 justify-center items-end gap-2'>
        {categoryData.map(item=>(
            <div  key={item.name} > 
                <div className="title flex items-center gap-1">
                    <div className='rounded-full w-1 h-1 lg:w-2 lg:h-2' style={{backgroundColor: item.color}}/>
                    <span className='text-xs'>{item.name}</span>
            
                </div>
                <span className='text-xs'>{item.value}</span>
            </div>
        ))}
    </div>
      
    </motion.div>
  )
}

export default CategoryChart






