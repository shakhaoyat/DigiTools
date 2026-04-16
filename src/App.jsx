
import './App.css'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBer from './components/navBer'
import Hero from './components/hero'
import Status from './components/status'
import Steps from './components/steps'
import Products from './components/products'
import PriceList from './components/pricelist'
import WorkFlowFooter from './components/workFLowFooter'
import Footer from './components/footer'


const fetchProducts = async () => {
  const rsc = await fetch("/data.json");
  const data = await rsc.json();
  return data;
}

const fetchPricing = async () => {
  const rsc = await fetch("/pricing.json");
  const data = await rsc.json();
  return data;
}

function App() {
  const [products, setProducts] = useState([]);
  const [plans, setPlans] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const loadProducts = async () => {
      const [productData, pricingData] = await Promise.all([fetchProducts(), fetchPricing()]);
      setProducts(productData);
      setPlans(pricingData);
    };

    loadProducts();
  }, []);

  return (
    <>
      <NavBer cartCount={cartItems.length}></NavBer>
      <Hero></Hero>
      <Status></Status>
      <Products products={products} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}></Products>
      <Steps></Steps>
      <PriceList plans={plans}></PriceList>
      <WorkFlowFooter></WorkFlowFooter>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover draggable theme="colored" />
    </>
  )
}

export default App
