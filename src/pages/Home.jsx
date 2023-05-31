import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import Faq from './Faq'
import Fitur from './Fitur'
import Katalog from './Katalog'
import Paket from './Paket'

const Home = () => {
  return (
    <>
      <Hero />
      <Fitur />
      <Katalog />
      <Faq />
      <Paket />
    </>
  )
}

export default Home
