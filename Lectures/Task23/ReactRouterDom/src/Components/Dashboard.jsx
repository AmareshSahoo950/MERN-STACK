import { Link } from "react-router-dom"
function Dashboard() {
  return (
    <div className="relative z-1 max-h-screen overflow-hidden w-full h-[80vh]">
      <div className="relative z-10 h-[80vh] flex flex-col justify-center items-center">
        <h1 className="AberMono text-5xl lg:text-7xl font-bold text-center text-gray-200 mb-5">MERN STACK SPACE</h1>
        <div className="relative max-w-2xl my-7 text-gray-300 font-bold">
          <p className="Raleway-Medium text-center text-xl md:text-[1rem]">
            This interface will act as a dashboard. For my react-router-dom project.
          </p>
          <p className="Raleway-Regular py-5 text-lg md:text-2xl text-center">
            In this react project I will be using react-router-dom for basic routing and this page is going to be the landing page
          </p>
        </div>
        <Link to='home' className='py-4 px-8 mx-3 border-3 font-semibold rounded-md text-2xl text-gray-200 cursor-pointer hover:dark:text-gray-400'>Get Started</Link>
      </div>
    </div>
  )
}


export default Dashboard