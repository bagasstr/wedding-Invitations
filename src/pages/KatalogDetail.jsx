import dotenv from 'dotenv'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const KatalogDetail = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getDataKatalog()
  }, [])

  const getDataKatalog = async () => {
    try {
      const response = await axios.get(
        'https://webadmin.citrainvitation.com/api/desain'
      )
      setData(response.data.products)
    } catch (error) {
      setError(error)
    }
  }

  console.log(data)
  return (
    <div className='w-full'>
      <div className='containers py-10 mobile:py-5 mobile:mx-4 tablet:mx-6 grid Sdesktop:grid-cols-2 mobile:grid-cols-1 gap-4 tablet:justify-items-center mobile:justify-items-center tablet:grid-cols-1'>
        {data?.map((result, index) => (
          <div key={index} className='bg-primary rounded-xl p-4'>
            <img src={result.image} alt='' className='rounded-xl shadow-md' />
            <button className='bg-accent px-4 py-2 rounded-md mt-3 text-bg font-semibold hover:bg-accent/80'>
              <Link to='/'>Demo</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KatalogDetail
