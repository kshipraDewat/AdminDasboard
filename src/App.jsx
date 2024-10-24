import './App.css'
import { Route, Routes } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage'
import ProductsPage from './pages/ProductsPage'
import UsersPage from './pages/UsersPage'
import SalesPage from './pages/SalesPage'
import OrdersPage from './pages/OrdersPage'
import AnalyticsPages from './pages/AnalyticsPages'
import Settings from './pages/Settings'
import SideBar from './components/SideBar'


function App() {
  return (
    <div className=' flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
    <div className='fixed inset-0 z-0'>
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
      <div className='absolute inset-0 backdrop-blur-sm'/>

    </div>
    <SideBar/>

    <Routes>
      <Route path='/' element={<OverviewPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/users' element={<UsersPage/>}/>
      <Route path='/sales' element={<SalesPage/>}/>
      <Route path='/orders' element={<OrdersPage/>}/>
      <Route path='/analytics' element={<AnalyticsPages/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
  </div>
  )
}

export default App
