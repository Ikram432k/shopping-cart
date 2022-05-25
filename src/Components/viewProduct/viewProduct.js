import { Link,useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import {Div} from "./viewStyle"

function ViewProduct(props){
    const { id } = useParams();

const [product,setProduct] = useState({});
const [rating,setRating] = useState({});
const [count,setCount] = useState(1);
useEffect(()=>{
    fetchProduct();
},[]);



const fetchProduct = async()=>{
    try{
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await data.json();
    setProduct(product);
    setRating(product.rating);
    }
    catch(error){
        alert('error occured')
    }
}

const increase =()=>{
    setCount(count+1);
}
const decrease =()=>{
    if(count>0){
        setCount(count-1);
    }
}

const handleCart=()=>{
    alert('Your Order is Added to your Cart')
    const temp = {
        id:product.id,
        quantity: count,
        img: product.image,
        title: product.title,
        price: product.price,
        };
        props.getCartItems(temp);
    };

    return(
        <Div>
            <div className="product">
            <img src={product.image} alt={product.title}/>
            <div className="productDetails">
                <p>{product.title}</p>
                <p>Rating:{rating.rate}/5</p>
                <p>{product.description}</p>
                <div className="btn">
                    <button onClick={decrease}>-</button>
                    <p>{count}</p>
                    <button onClick={increase}>+</button>
                </div> 
                <p>Price:{product.price}$</p>
                <div className="btns">
                    <Link to={'/shop'}>
                    <button onClick={handleCart}>add to cart</button>
                    </Link>
                    <Link to={'/shop'}>
                    <button>go back</button>
                    </Link>
                </div>
            </div>
            </div>
        </Div>
    )
}
export default ViewProduct;