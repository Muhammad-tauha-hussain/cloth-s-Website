
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import AuthPage from './pages/LoginPage'
import DetailedProductPage from './pages/DetailedProductPage'
import CommingSoon from './pages/CommingSoon'
import Cart from './pages/Cart'


function App() {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id'  element={<DetailedProductPage/>}/>
        <Route path='/login' element={<AuthPage/>}/>
        <Route path='/CommingSoon' element={<CommingSoon/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes> 
    
    </>
  )
}

export default App
