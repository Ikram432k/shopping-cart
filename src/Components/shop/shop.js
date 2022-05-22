import {useState,useEffect} from 'react';
function Shop(){
useEffect(()=>{
    fetchItems();
},[]);

const[items,setItems] =useState([]);

const fetchItems = async()=>{
    const data = await fetch('https://fakestoreapi.com/products')
    const items =  await data.json();
    setItems(items);
    console.log(items);
}

    return(
        <div>

        <header>Products</header>
            {items.map(item=>(
                <h1>{item.title}</h1>
            ))}
        </div>
    )
}
export default Shop;