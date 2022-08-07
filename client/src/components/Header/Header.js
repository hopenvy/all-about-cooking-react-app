import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <div className="row container header">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 container">
                    <h1>All about cooking <br />
                        Made for living and eating with love</h1>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 container">
                    <ul className="social">
                        <li> <Link to="/">Home</Link>
                        </li>
                        <li> <Link to="/">Recipes</Link>
                        </li>
                        <li> <Link to="/">Add a new recipe</Link>
                        </li>
                        <li> <Link to="/">Register</Link>
                        </li>
                        <li> <Link to="/">Login</Link>
                        </li>
                        <li> <Link to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <br />
            <br />
        </header>
    );
};
export default Header; 