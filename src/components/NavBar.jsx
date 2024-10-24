
const NavBar = ({title}) => {
  return (
        <nav className=' w-auto bg-gray-800 bg-opacity-50 backdrop-blur-md p-1 shadow-lg border-b border-gray-700'>

            <div className=" max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-6">
             <h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
             </div>
        </nav>
    
  )
}

export default NavBar

  