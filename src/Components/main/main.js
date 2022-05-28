import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from '../navBar/navBar';
import Home from '../home/home';
import Shop from '../shop/shop';
import About from '../about/about';
import ViewProduct from '../viewProduct/viewProduct';
import Cart from '../cart/cart';
import {Div} from './mainStyle';
import { useEffect, useState } from "react";
function Main() {
    const [cartItem,setCartItems] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(()=>{
      getTotal()
    // eslint-disable-next-line no-use-before-define
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cartItem]);

    const clearAll=()=>{
      setCartItems([]);
      getTotal();
      buyNow();
    }

    const buyNow=()=>{
      if(totalPrice>0){
          alert("Thank you for your purchase");
      }
      else{
          alert('Your Cart is Empty')
      }
  }

    const CheckProduct =(product)=>{
      return cartItem.some((obj)=>obj.id === product.id);
    };
    const deleteItem =(e)=>{
      let temp = [...cartItem];
      temp.splice(Number(e.target.id),1);
      setCartItems(temp);
    };
    const getTotal =()=>{
        let temp = 0;
        cartItem.forEach((obj)=>{
            temp += obj.quantity * obj.price;
        });
        setTotalPrice(temp);
    };
    const getCartItems =(product)=>{
        let cartClone = [...cartItem];
        if(!CheckProduct(product)){
        cartClone.push(product);
        setCartItems(cartClone);
        alert('Your Order is Added to your Cart')

        }
        else{
            alert('Already Exist');
        }
        getTotal();
}
  return (
  <BrowserRouter basename="/">
  <Div>
    <Nav length={cartItem.length}/>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/viewproduct/:id" element={<ViewProduct getCartItems={getCartItems}/>} />
      <Route path="/cart" element={<Cart
        data = {cartItem}
        total = {totalPrice}
        delete = {deleteItem}
        clear = {clearAll}
      />} />
    </Routes>
  </Div>
  </BrowserRouter>
  )
}

export default Main;
