import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'



const Navbar = () =>{

    function ActiveNavbar({isActive}) {
        return isActive ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" :
                     "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
    }

    return (
        <nav className="bg-indigo-700 border-b border-indigo-500" key="Navbar">
        <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-2">
            <div className="flex h-20 items-center">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <a className="flex flex-shrink-0 items-center mr-4" href="/
                ">
                <img
                    className="h-10 w-auto"
                    src={logo}
                    alt="React Jobs"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                    >React Jobs</span>
                </a>
                <div className="md:ml-auto">
                <div className="flex space-x-2">
                    <NavLink 
                    to="/"
                    className={ActiveNavbar}>
                    Home
                    </NavLink>
                    <NavLink
                    to="/jobs"
                    className={ActiveNavbar}>
                    Jobs
                    </NavLink>
                    <NavLink
                    to="/add-job"
                    className={ActiveNavbar}>
                        Add Job
                    </NavLink>
                </div>
                </div>
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar



/*
1. Why my console.log() printing two times?
You are using a React functional component:
    In React functional components, the component function is invoked twice during the React lifecycle: 
once during the initial render and once during the re-render triggered by the React reconciliation process.
If you have console.log() statements inside your functional component, they will be executed twice.
*/