import { Link } from 'react-router-dom'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div id='fitur' className='w-full'>
      <div className='containers py-10 mobile:py-5 mobile:mx-4 tablet:mx-6'>
        <div className='flex justify-between items-center mobile:flex-col'>
          <div className='Sdesktop:w-[30rem] mobile:w-full'>
            <h3 className='font-medium text-xl mobile:font-medium mobile:text-base text-black/70 mb-3'>
              Buat Hari Spesial Makin Spesial
            </h3>
            <h1 className='font-bold text-5xl mobile:text-3xl text-black/80 mb-2 mobile:mb-1'>
              Jasa Pembuatan Undangan Digital
            </h1>
            <Typed
              className='text-5xl mobile:text-3xl text-accent font-bold'
              strings={['Pernikahan', 'Ulang Tahun', 'Tunangan']}
              typeSpeed={50}
              backSpeed={50}
              loop
            ></Typed>
            <p className='font-normal text-lg text-black/75 mt-10 mobile:mt-6 mobile:text-base mobile:mr-16'>
              Jadikan hari spesial kamu lebih menarik, Dengan membuat undangan
              digital, undangan kamu jadi modern dan unik.
            </p>
            <div className='mobile:flex mobile:flex-col mobile:items-center'>
              <button className='hover:bg-text Sdesktop:font-medium px-5 Sdesktop:mt-10 py-3 mobile:w-full mobile:mt-6 tablet:mt-4 rounded-md text-bg bg-accent max-w-[20rem]'>
                <Link to={'/order'}>Order Sekarang</Link>
              </button>
            </div>
          </div>
          <div className='mobile:mt-10'>
            <img
              src='/src/assets/HomePage.png'
              alt='hero'
              className='Sdesktop:w-[450px] mobile:w-[300px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
