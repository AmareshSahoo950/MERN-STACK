import useFetch from './hooks/useFetch'
import Product from './component/Product';
import Header from './component/Header';

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
      <Header />
      <div className='mt-[20vh] mx-2 grid bg-transparent grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[4vh] gap-x-[1vw]'>
        {data.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </main>
  )
}

export default App
