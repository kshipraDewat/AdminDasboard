import './App.css'
import { Route, Routes } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage'
import ProductsPage from './pages/ProductsPage'
import UsersPage from './pages/UsersPage'
import SalesPage from './pages/SalesPage'
import OrdersPage from './pages/OrdersPage'
import AnalyticsPages from './pages/AnalyticsPages'
import Settings from './pages/Settings'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
    <NavBar/>
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
