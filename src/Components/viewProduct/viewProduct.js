import { Link } from "react-router-dom";

function ViewProduct(){
    return(
        <div>
            <img src="" alt="img"/>
            <div>
                <p>product title</p>
                <p>rating</p>
                <p>stack</p>
                <div>
                    <button>+</button>
                    <p>0</p>
                    <button>-</button>
                </div>
                <p>0$</p>
                <div>
                    <Link to={'/cart'}>
                    <button>add to cart</button>
                    </Link>
                    <button>buy now</button>
                </div>
            </div>
        </div>
    )
}
export default ViewProduct;