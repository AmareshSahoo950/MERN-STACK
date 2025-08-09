import React from 'react'

function Login() {
  return (
    <div className='relative flex justify-center items-center my-7 z-[1] h-[80vh]'>
      <div className=" w-[350px] p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
        <div className=" bg-black sm:p-6 p-4 rounded-xl">
          <div className="text-white font-semibold">
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email">EMAIL</label>
              <input type="email" id='email' className=' py-3 w-full border-2 border-white rounded-lg mb-9 mt-2 pl-3' placeholder='amareshsahoo950@gmail.com' required />

              <label htmlFor="password">PASSWORD</label>
              <input type="password" id='password' className='py-3 w-full border-2 border-white rounded-lg mt-3 mb-9 pl-3' placeholder='Amaresh@1234' required />

              <button type='submit' className="w-full relative z-0 rounded-sm bg-violet-700 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-violet-800 after:transition-[all_0.3s_ease]  hover:after:w-full font-semibold text-xl mb-3">
                LOGIN
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login