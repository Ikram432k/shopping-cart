import { Link } from "react-router-dom";
import '../navBar/navBar.css'
function  Nav (){
    return(
    <nav>
        <h1>Fake Fashion</h1>
        <ul className="nav-links">
            <Link to={'/'}>
            <li>HOME</li>
            </Link>
            <Link to={'/shop'}>
            <li>SHOP</li>
            </Link>
            <Link to={'/about'}>
            <li>ABOUT</li>
            </Link>
        </ul>
    </nav>        
    )
}
export default Nav;