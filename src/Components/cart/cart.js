import { Link } from "react-router-dom";
import {Div} from './cartStyle'
function CartItem(props){
    const{id,quantity,img,title,price} = props.obj;
    return(
      <div id={id} className="cartItem">
          <img  src={img} alt='product'/>
          <div className="cartItemDetails">              
              <p>{title}</p>
              <p>{price}$</p>
              <p>Quantity: {quantity}</p>
              <button id={props.i} onClick={props.delete} className="del">delete</button>
          </div>
      </div>  
    );
}
function Cart(props){
    const check =()=>{
        if(props.data.length === 0){
            return<h1>Your Cart is Empty</h1>
        } 
    };

    return(
        <Div>
            <div className="wholeCart">
            <div className="cart">
            {check()}
            <main>
                {props.data.map((obj,i)=>(
                    <CartItem key={i} i={i} obj={obj} delete={props.delete}/>
                ))}
            </main>
            <div className="bottomCart">
                <p>Total Amount: {props.total}$</p>
            <Link to={'/shop'}>
            <button onClick={props.clear} className="proceed">
                proceed to payment
            </button>
            </Link>
            </div>

            </div>
            </div>
        </Div>
)
}
export default Cart;