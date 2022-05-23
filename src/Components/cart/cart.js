import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Cart(){
const { id } = useParams();
const [item,setItem] = useState([]);
useEffect(()=>{
    fetchCart();
},[])

// const convertData =(data)=>{
//     const {
//         name: title,
//         cost:price,
//     } = data;
//     return{
//         title,price
//     };
// }

const getItem =(data)=>{
    let cloneItem = [...item];
    cloneItem.push(data);
    setItem(cloneItem);
    console.log(item);
}

const fetchCart=async()=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
    getItem(data);
    // console.log(item);
}
return(

    <div>
        <h2>your shopping cart</h2>
        {/* <div className="cartItem">
            <p>{item.title}</p>
            <p>{}</p>
        </div> */}
    </div>
)
}
export default Cart;