import Hero from '../component/Hero'
import Navbar from '../component/navbar/Navbar'
import Faq from './Faq'
import Fitur from './Fitur'
import Katalog from './Katalog'
import Paket from './Paket'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Katalog />
      <Fitur />
      <Faq />
      <Paket />
    </>
  )
}

export default Home
