import { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants/constants'
import { Menu, X } from 'lucide-react'
import { PrimaryButton, SecondaryButton } from './Buttons'


const MapNavItems = ({navItems}) => (
  <>
  {navItems.map((item) => (
    <li key={item.label}>
      <a href={item.href}>{item.label}</a>
    </li>
  ))}
  </>
)

function NavBar() {
  const [mobileMenuDrawer, setMobileMenuDrawer] = useState(false)

  const toggleMenu = () => setMobileMenuDrawer(!mobileMenuDrawer)

  return (
    <nav className={`sticky top-0 backdrop-blur-lg border-b border-neutral-600 
                    ${mobileMenuDrawer ? 'pt-4' : 'py-4'}`}>
        <div className="flex justify-between items-center mx-10 lg:mx-20">
          {/* Logo */}
          <div className='flex items-center'>
            <img src={logo} alt='logo' className='w-10 h-10 mr-2'/>
            <h1 className='text-2xl font-bold'>VirtualR</h1>
          </div>
          {/* Page Links */}
          <ul className='hidden lg:flex items-center gap-x-10'>
            <MapNavItems navItems={navItems} />
          </ul>
          {/* Buttons */}
          <div className='hidden lg:flex gap-x-8 items-center text-sm'>
            <SecondaryButton>Sign In</SecondaryButton>
            <PrimaryButton>Create an Account</PrimaryButton>
          </div>
          {/* Hamburger */}
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            {mobileMenuDrawer ? <X/> : <Menu/>}
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuDrawer && (
          <div className='w-full flex flex-col justify-center items-center lg:hidden bg-neutral-900 py-5'>
            <ul className='space-y-2'>
              <MapNavItems navItems={navItems} />
            </ul>
            <div className="flex gap-5 mt-7">
              <SecondaryButton>Sign In</SecondaryButton>
              <PrimaryButton>Create an Account</PrimaryButton>
            </div>
          </div>)
        }
    </nav>
  )
}

export default NavBar