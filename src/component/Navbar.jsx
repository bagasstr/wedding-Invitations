import { Link, NavLink } from 'react-router-dom'
import { dataNavLink } from '../data/data'
import { HiMenu } from 'react-icons/hi'
import { useState } from 'react'
import logo from '../assets/image/img.svg'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className='w-full'>
      <div className='containers py-7 mobile:mx-4 tablet:mx-6'>
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
                className={`transition-all ease-in-out duration-200 mobile:absolute mobile:mt-10 mobile:bg-bg mobile:w-full mobile:p-4  Sdesktop:flex Sdesktop:gap-x-9 Sdesktop:items-center tablet:absolute tablet:mt-10 tablet:bg-bg tablet:w-full tablet:p-5 mobile:h-full tablet:h-full overflow-hidden ${
                  menu ? 'right-0' : 'right-[-1000px]' /*  && 'hidden' */
                }`}
              >
                {dataNavLink.map((result, index) => (
                  <li
                    key={index}
                    className='list hover:text-accent text-lg font-normal text-black/75 mobile:space-y-3 mobile:my-3 tablet:my-4'
                  >
                    <Link to={result.path} className='links'>
                      {result.name}
                    </Link>
                  </li>
                ))}
                <button className='hover:bg-text Sdesktop:font-medium px-5 py-3 mobile:mt-4 tablet:mt-4 rounded-md text-bg bg-accent'>
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

export default Navbar
