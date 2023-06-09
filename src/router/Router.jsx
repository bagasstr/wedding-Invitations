import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Order from '../pages/Order'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </>
  )
}

export default Router
