import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-purple-600 p-4">
            <ul className="flex justify-center space-x-6">
                <li><Link to="/" className="text-white font-bold">Home</Link></li>
                <li><Link to="/add-mood" className="text-white font-bold">Add Mood</Link></li>
                <li><Link to="/mood-history" className="text-white font-bold">Mood History</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
