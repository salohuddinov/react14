import './App.css'
import { Routes, Route, } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import About from './pages/about/About'
import Wishlist from './pages/wishlist/Wishlist'
import { useSelector } from 'react-redux'
import Cart from './pages/cart/Cart'
import SingleProduct from './pages/singleproduct/SingleProduct'
import Footer from './components/footer/Footer'

function App() {
  const wishes = useSelector(state => state.wishlist.value)


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singleproduct' element={<SingleProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
