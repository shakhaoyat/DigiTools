
import './App.css'
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
  const products = fetchProducts();
  return (
    <>
      <NavBer></NavBer>
      <Hero></Hero>
      <Status></Status>
      <Products></Products>
    </>
  )
}

export default App
