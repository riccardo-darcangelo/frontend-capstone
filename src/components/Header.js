import { Link } from "react-router-dom";
import logo from '../logo.svg';

export default function Header() {
    return (
        <header className="header column container justify-between">
            <img src={logo} className="logo" alt="logo" />
            <nav>
                <ul className="column">
                    <li>
                    <Link to="/" className="nav-item">Home</Link>
                    </li>
                    <li>
                    <a href="#/">About</a>
                    </li>
                    <li>
                    <a href="#/">Menu</a>
                    </li>
                    <li>
                        <Link to="/booking" className="nav-item">Reservation</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
