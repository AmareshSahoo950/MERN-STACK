import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <div className=" flex justify-between items-center w-full relative  px-2 sm:px-10 py-4 h-[20vh]">
      <div className="z-10 flex text-white mr-7">
        <Link to={'/'}>
          <div className="flex items-center justify-center ml-4 lg:ml-7 w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-white/30">
            <img src="./vite.svg" className="w-full" alt="footer-logo" />
          </div>
        </Link>
      </div>
      <div className="hidden z-10 flex text-white font-semibold sm:block lg:text-2xl lg:ml-[15vw] sm:mr-5">
        <NavLink to={'/home'}
          className={({ isActive }) =>
            isActive ?
              "text-sky-500 text-3xl font-bold underline lg:mr-10 mr-3" :
              "hover:text-gray-400 text-3xl font-bold lg:mr-10 mr-3"
          }
        >
          Home
        </NavLink>
        <NavLink to={'/aboutus'}
          className={({ isActive }) =>
            isActive ?
              "text-sky-500 text-3xl font-bold underline lg:mr-10 mr-3" :
              "hover:text-gray-400 text-3xl font-bold lg:mr-10 mr-3"
          }
        >
          About us
        </NavLink>
      </div>
      <div className="z-10 flex text-white lg:mr-7 sm:mr-5">
        <Link to={'/login'} className='py-1 px-3 mx-3 border-2 mr-1 lg:border-3 lg:py-2 lg:px-5 font-semibold rounded-md cursor-pointer hover:dark:text-gray-300 text-[12px] lg:text-[1rem]'>LOGIN</Link>
        <Link to={'/signup'} className='py-1 px-3 mx-3 border-2 mr-1 lg:border-3 lg:py-2 lg:px-5 font-semibold rounded-md cursor-pointer hover:dark:text-gray-300 text-[12px] lg:text-[1rem]'>SIGN UP</Link>
      </div>
    </div>
  )
}

export default Header;