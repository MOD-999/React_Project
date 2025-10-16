import "./style.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="fixed-header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </header>
    )
}
export default Header