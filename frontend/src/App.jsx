import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import ComponentLayout from './components/common/ComponentLayout'
import AllProducts from './pages/AllProducts'
import Categoreis from './pages/home/Categoreis'
import SingleProduct from './pages/SingleProduct'
import RegisterPage from './pages/auth/RegisterPage'
import LoginPage from './pages/auth/LoginPage'
import Wishlist from './pages/Wishlist';
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route element={<ComponentLayout />}>
          <Route path='/shops' element={<AllProducts />} />
          <Route path='/shops/:id' element={<SingleProduct />} />
          <Route path='/categories' element={<Categoreis />} />

          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<CartPage />} />

          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>

    </Router>
  )
}

export default App
