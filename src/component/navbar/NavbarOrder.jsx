import { Link, NavLink } from 'react-router-dom'
import { dataNavLinkOrder } from '../../data/data'
import { HiMenu } from 'react-icons/hi'
import { useState } from 'react'
import logo from '../../assets/image/img.svg'

const NavbarOrder = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className='w-full fixed top-0'>
      <div className='containers py-7  mobile:mx-4 tablet:mx-6'>
        <div className='flex Sdesktop:items-center justify-between'>
          <img src={logo} alt='logo' className='w-[200px] mobile:w-[150px]' />
          <nav className='flex items-center'>
            <div
              className='icon_humberger text-2xl font-extrabold Sdesktop:hidden'
              onClick={() => setMenu((prev) => !prev)}
            >
              <HiMenu />
            </div>
            <ul className=''>
              <div
                className={`transition-all ease-in-out duration-200 mobile:absolute mobile:mt-10 mobile:bg-bg mobile:w-full mobile:p-4 tablet:absolute Sdesktop:flex Sdesktop:gap-x-9 Sdesktop:items-center  tablet:mt-10 tablet:bg-bg tablet:w-full tablet:p-5 mobile:h-full tablet:h-full z-10 ${
                  menu ? 'right-0' : 'right-[-1000px]' /*  && 'hidden' */
                }`}
              >
                <Link
                  to='/'
                  className='links  hover:text-accent text-lg font-normal text-black/75 mobile:space-y-3 mobile:my-3 tablet:my-4'
                >
                  Home
                </Link>
                {dataNavLinkOrder.map((result, index) => (
                  <li
                    onClick={() => setMenu((prev) => !prev)}
                    key={index}
                    className='list hover:text-accent text-lg font-normal text-black/75 mobile:space-y-3 mobile:my-3 tablet:my-4'
                  >
                    <a href={result.path}>{result.name}</a>
                  </li>
                ))}
                <button
                  onClick={() => setMenu((prev) => !prev)}
                  className='hover:bg-text Sdesktop:font-medium px-5 py-3 mobile:mt-4 tablet:mt-4 rounded-md text-bg bg-accent'
                >
                  <Link to={'/order'}>Order Sekarang</Link>
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavbarOrder
