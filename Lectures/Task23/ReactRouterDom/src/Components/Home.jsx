import { useLoaderData } from 'react-router-dom'

function Home() {
  const products = useLoaderData()

  return (
    <div className='relative z-[1] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 w-full mt-10 mb-[10vh]'>
      {
        products.map(product => (
          <div key={product.id} className='bg-transparent rounded-sm border-white border-2 py-7 px-7'>
            <div className='w-full aspect-square overflow-hidden'>
              <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover " />
            </div>
            <div className=" mt-5">
              <h2 className='text-center font-semibold text-lg mb-2 px-4 text-white w-full'>{product.title}</h2>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home

export const productInfoLoader = async () => {

  const response = await fetch('https://api.escuelajs.co/api/v1/products')

  return await response.json();
}