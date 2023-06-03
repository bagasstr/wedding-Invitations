import PaketDetail from './PaketDetail'

const Paket = () => {
  return (
    <div id='paket' className='w-full bg-primary Sdesktop:py-[10rem]'>
      <div className='containers'>
        <h1 className='text-center font-bold text-2xl text-black/80'>
          PILIH PAKET
        </h1>
        <PaketDetail />
      </div>
    </div>
  )
}

export default Paket
