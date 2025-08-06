import useFetch from './hooks/useFetch'

function App() {

  const url = ' https://api.escuelajs.co/api/v1/products';

  const fetch = useFetch(url);

  const { loading, data, error } = fetch;


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-transparent bg-blend-overlay">
        <div className="text-center">
          <div className="animate-spin rounded-full h-24 w-24 border-t-5 border-b-5 border-white mx-auto"></div>
          <p className="mt-4 text-2xl font-semibold text-white">Loading...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-transparent">
        <p className="text-xl font-semibold text-white">Error: {error}</p>
      </div>
    )
  }


  return (
    <main className=' min-h-screen bg-black '>

      <div className="fixed top-0 left-0 right-0 h-[15vh] bg-black z-10 flex items-center justify-center">
        <h1 className="text-4xl font-semibold text-white">Photos</h1>
      </div>

      <div className='mt-[20vh] mx-2 grid bg-transparent grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[4vh] gap-x-[1vw]'>

        {data.map((product) => (
          <div key={product.id} className='bg-transparent rounded-sm border-white border-2 w-full pt-7 pb-7'>
            <div className='w-full overflow-hidden px-9'>
              <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover " />
            </div>
            <div className=" mt-5">
              <h2 className='text-center font-semibold text-lg mb-2 px-4 text-white w-full'>{product.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
