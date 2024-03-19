import { Link } from "react-router-dom"
import '../App.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/home">
                        <img src="../Images/Logo" alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li>
                            <Link to="/random">Random</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;