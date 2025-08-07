
function Product({ product }) {

  return (
    <div key={product.id} className='bg-transparent rounded-sm border-white border-2 w-full pt-7 pb-7'>
      <div className='w-full overflow-hidden px-9'>
        <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover " />
      </div>
      <div className=" mt-5">
        <h2 className='text-center font-semibold text-lg mb-2 px-4 text-white w-full'>{product.title}</h2>
      </div>
    </div>
  )
}

export default Product