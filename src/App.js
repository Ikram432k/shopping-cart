import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from './Components/navBar/navBar';
import Home from './Components/home/home';
import Shop from './Components/shop/shop';
import About from './Components/about/about';
function App() {
  return (
  <BrowserRouter>
  <div>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </div>
  </BrowserRouter>
  )
}

export default App;
