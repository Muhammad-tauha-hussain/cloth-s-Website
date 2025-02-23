import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import AuthPage from './pages/LoginPage';
import DetailedProductPage from './pages/DetailedProductPage';
import CommingSoon from './pages/CommingSoon';
// import Cart from './pages/Cart';
import Layout from './components/Layout';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Routes>
      {/* Wrap Layout as a parent route */}
      <Route path="/" element={<Layout />}>
        {/* Define child routes under Layout */}
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<DetailedProductPage />} />
        <Route path="login" element={<AuthPage />} />
        <Route path="commingsoon" element={<CommingSoon />} />
        <Route path="cart" element={<CartPage />} />
        
      </Route>
    </Routes>
  );
}

export default App;
