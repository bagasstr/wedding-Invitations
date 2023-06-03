import { Link } from 'react-router-dom'
import { dataPaket } from '../data/data'
import { BiCheck } from 'react-icons/bi'

const PaketDetail = () => {
  return (
    <div className='pt-[4rem]'>
      <div className=''>
        <div className='grid mobile:grid-cols-1 Sdesktop:grid-cols-3'>
          {dataPaket.map((result, idx) => (
            <div key={idx} className=''>
              <div className='p-5 bg-accent mx-3 rounded-lg shadow-md'>
                <div className='text-center'>
                  <h1 className='font-bold text-lg text-bg/90'>
                    {result.title}
                  </h1>
                  <h1 className='text-5xl my-4 text-bg font-semibold'>
                    {result.price}
                  </h1>
                </div>
                {result.description.map((results, index) => (
                  <div className='flex my-3' key={index}>
                    <div className='mr-2'>
                      <BiCheck className='text-[23px] text-bg' />
                    </div>
                    <div className=''>
                      <h1 className='text-base font-medium text-bg'>
                        {results.titleDesc}
                      </h1>
                      <h1 className='text-bg/70'>{results.titleDesc2}</h1>
                    </div>
                  </div>
                ))}
                <hr className='opacity-40' />
                <button className='w-full px-4 py-2 bg-primary text-black/70 rounded-md mt-4 text-xl'>
                  <Link to='/order'>Order Sekarang</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaketDetail
