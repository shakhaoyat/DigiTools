
import './App.css'
import { useEffect, useState } from 'react'
import NavBer from './components/navBer'
import Hero from './components/hero'
import Status from './components/status'
import Products from './components/products'


const fetchProducts = async () => {
  const rsc = await fetch("/data.json");
  const data = await rsc.json();
  return data;
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  return (
    <>
      <NavBer></NavBer>
      <Hero></Hero>
      <Status></Status>
      <Products products={products}></Products>
    </>
  )
}

export default App
