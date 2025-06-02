import React from 'react'
import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <header className='h-20 shadow-md sticky top-0'>
         {/* {Logo} */}
         <div>
          <div>
            <img
                src={logo}
                width={170}
                height={60}
                alt='logo'
            />
          </div>
         </div>
    </header>
  )
}

export default Header
