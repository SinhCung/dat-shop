import {Link} from "react-router-dom"
function Header (){
    return (

        <header>
            <div className="logo">SWEATER.DAOATHU</div>
            <nav>
            <ul>

                <li>
                <Link to="/">Home</Link>
                </li>

                <li className="dropdown">

                <a href="#">Shop</a>

                <div className="dropdown-menu">
                    <Link to="/Dress">Dress</Link>
                    <Link to="/Shirt">Shirt</Link>
                </div>

                </li>

                <li>
                <a href="#">Collection</a>
                </li>

                <li>
                <a href="#">About</a>
                </li>

                <li>
                <a href="#">Contact</a>
                </li>

            </ul>
            </nav>


        </header>
    );
};
export default Header;