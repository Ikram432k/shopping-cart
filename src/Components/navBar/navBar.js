import { Link } from "react-router-dom";
import {Navs,Li} from './navBarStyle'
function  Nav (props){
    const navStyle={
        color:"white",
        textDecoration: 'none'
        };
    return(
    <Navs>
        <h1>Fake Store</h1>
        <ul className="nav-links">
            <Link style={navStyle} to={'/'}>
            <li>HOME</li>
            </Link>
            <Link style={navStyle} to={'/shop'}>
            <li>SHOP</li>
            </Link>
            <Link style={navStyle} to={'/about'}>
            <li>ABOUT</li>
            </Link>
            <Link style={navStyle} to={'/cart'} className="cartIcon">
            <li>CART({props.length})</li>
            </Link>
        </ul>
    </Navs>        
    )
}
export default Nav;