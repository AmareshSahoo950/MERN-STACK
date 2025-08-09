
function Signup() {
  return (
    <div className='relative flex justify-center items-center my-7 z-10 h-[80vh]'>
      <div className="w-[350px] p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mt-[5vh] mb-[10vh]">
        <div className=" bg-black sm:p-6 p-4 rounded-xl ">
          <div className="text-white">
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">NAME</label>
              <input type="text" id='name' className='mt-2 mb-5 px-4 py-3 w-full border-2 border-white rounded-md' required />
              <label htmlFor="email">EMAIL</label>
              <input type="email" id='email' className='mt-2 mb-5 px-4 py-3 w-full border-2 border-white rounded-md' required />

              <label htmlFor="password">PASSWORD</label>
              <input type="password" id='password' className='mt-2 mb-5 px-4 py-3 w-full border-2 border-white rounded-md' required />

              <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
              <input type="password" id='confirm-password' className='mt-2 mb-5 px-4 py-3 w-full border-2 border-white rounded-md' required />

              <button type='submit' className="w-full relative z-0 rounded-sm bg-violet-700 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-violet-800 after:transition-[all_0.3s_ease]  hover:after:w-full font-semibold text-xl cursor-pointer">
                SIGN UP
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
