import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Main,Div} from './shopStyle';
function Shop(){
useEffect(()=>{
    fetchItems();
},[]);

const[items,setItems] =useState([]);

const fetchItems = async()=>{
    const data = await fetch('https://fakestoreapi.com/products')
    const items =  await data.json();
    setItems(items);
    // console.log(items);
}

    return(
        <Main>
            {items.map(item=>(
                <Div className='' key={item.id}>
                    <div className='imgdiv'>
                        <img src={item.image} alt={item.title} />
                    </div>
                 <div className='details'>  
                     <div className='detail' > 
                    <p>{item.title}</p>
                    <p>price: {item.price} $</p>
                    </div>
                    <Link to={`/viewproduct/${item.id}`}>
                    <button>view product</button>
                    </Link>
                </div>
                </Div>
            ))}
        </Main>
    )
}
export default Shop;