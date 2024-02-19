import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SingleProductPage from './pages/SingleProductPage'
import Cart from './pages/Cart'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route path='/' element={<Home />} />
      <Route path='/user/cart' element={<Cart />} />
      <Route path='/products/:id' element={<SingleProductPage />} />

    </Routes>

  )
}
export default App
