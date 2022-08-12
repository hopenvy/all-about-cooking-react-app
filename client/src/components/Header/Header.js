import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <header>
            <div className="col-6 col-sm-12 col-md-12 col-lg-12 col-xl-12 container">
                <h1>All about cooking <br />
                    Made for living and eating with love</h1>
            </div>
            <div className="row container header">
                <div className="col-6 col-sm-10 col-md-10 col-lg-10 col-xl-10 container">
                    <ul className="social">
                        {user.email && <span>{user.email}</span>}
                        <li> <Link to="/">Home</Link>
                        </li>
                        <li> <Link to="/recipes">Recipes</Link>
                        </li>
                        {user.email
                        ? <li>
                            <li> <Link to="/create">Add a new recipe</Link></li>
                            <li> <Link to="/logout">Logout</Link></li>
                        </li>
                        :
                        <li>
                            <li> <Link to="/register">Register</Link></li>
                            <li> <Link to="/login">Login</Link></li>
                        </li>
                        }

                    </ul>
                </div>
            </div>
            <br />
            <br />
        </header >
    );
};

export default Header;