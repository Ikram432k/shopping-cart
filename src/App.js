import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from './Components/navBar/navBar';
import Home from './Components/home/home';
import Shop from './Components/shop/shop';
import About from './Components/about/about';
import styled from "styled-components";
import ViewProduct from "./Components/viewProduct/viewProduct";
import Cart from "./Components/cart/cart";
function App() {
  const Div = styled.div`
   display: flex; 
   flex-direction: column;
   min-height: 100vh;
  `;
  return (
  <BrowserRouter>
  <Div>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/viewproduct/:id" element={<ViewProduct />} />
      <Route path="/cart/:id" element={<Cart/>} />
    </Routes>
  </Div>
  </BrowserRouter>
  )
}

export default App;
