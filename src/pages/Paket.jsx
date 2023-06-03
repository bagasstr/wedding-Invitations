import PaketDetail from './PaketDetail'

const Paket = () => {
  return (
    <div
      id='paket'
      className='w-full bg-primary Sdesktop:py-[10rem] mobile:pt-[8rem] mobile:pb-[4rem]'
    >
      <div className='containers mobile:mx-4 tablet:mx-6 '>
        <h1 className='text-center font-bold text-2xl text-black/80'>
          PILIH PAKET
        </h1>
        <PaketDetail />
      </div>
    </div>
  )
}

export default Paket
