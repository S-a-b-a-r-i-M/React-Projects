import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"

const MainLayout = () => {
    return (
    <>
        <Navbar/>
        <Outlet/>
        <ToastContainer />
    </>
    )
}

export default MainLayout



/* DOCS
1.Outlet:
    Outlet component in React Router is a component that serves as a render point for nested routes. 
It is used in conjunction with nested routing, where you have a parent route with child routes


inside it.*/