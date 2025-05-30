import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Shop } from './Pages/Shop.jsx';
import { ShopCategory } from './Pages/ShopCategory.jsx';
import { Product } from './Pages/Product.jsx';
import { Cart } from './Pages/Cart.jsx';
import { LoginSignup } from './Pages/LoginSignup.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import men_banners from './Components/Assets/banner_mens.png';
import women_banners from './Components/Assets/banner_women.png';
import kid_banners from './Components/Assets/banner_kids.png';
import ShopContextProvider from './Context/ShopContext.jsx'; // ✅ Import the context provider

function App() {
  return (
    <div>
      <ShopContextProvider> {/* ✅ Wrap everything with context */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_banners} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banners} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banners} category="kid" />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
