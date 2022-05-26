// import './homeStyle'
import {HomeStyles,Div} from './homeStyle'
import { Link } from "react-router-dom";
function Home(){
    return(
        <HomeStyles>
        <Div>
        <h2>Fake store</h2>
        <p>Welcome,to the fake store. The online shopping interface that has varity of products.</p>
        <Link to={'/shop'}>
        <button>SHOP now</button>
        </Link>
        </Div>
        </HomeStyles>
    )
}
export default Home;