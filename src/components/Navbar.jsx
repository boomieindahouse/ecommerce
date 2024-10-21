import { Link } from 'react-router-dom';

export default function Navbar() {
    const navStyle = {
        backgroundColor: "#F4EAE0",
    };

    return (
        <div className="navbar bg-base-100 text-black" style={navStyle}>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home">Home</Link></li>
                </ul>
            </div>
        </div>
    )
}