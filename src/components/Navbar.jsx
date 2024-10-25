import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Navbar() {
    const navStyle = {
        backgroundColor: "white",
    };

    return (
        <div className="navbar sticky top-0 z-50 border-b-2 border-gray-00 px-28" style={navStyle}>
            <div className="flex justify-between items-center h-full w-full" style={{ padding: '0 20px' }}>
                {/* Logo */}
                <div className="flex-none">
                    <h1><Link to="/">BeHumble</Link></h1>
                </div>

                {/* Nav Links */}
                <div className="nav-mid flex-grow flex justify-center">
                    <ul className="menu menu-horizontal px-1 flex space-x-4 text-black text-base">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/SignUp">Sign Up</Link></li>
                    </ul>
                </div>

                {/* Search and Icons */}
                <div className="nav-right flex items-center space-x-4 flex-none">
                    <div className="searchbox w-64">
                        <label className="input input-bordered flex items-center gap-2 bg-gray-200">
                            <input
                                type="text"
                                className="grow placeholder-gray-600 text-gray-800 text-sm bg-transparent"
                                placeholder="What are you looking for?"
                            />
                            <Icon icon="mdi:magnify" style={{ color: 'black', fontSize: '24px' }} />
                        </label>
                    </div>
                    <div className="fav-items">
                        <button className="p-2 rounded-full hover:bg-gray-200">
                            <Icon icon="solar:heart-outline" style={{ color: 'black', fontSize: '24px' }} />
                        </button>
                    </div>
                    <div className="cart-items">
                        <button className="p-2 rounded-full hover:bg-gray-200">
                            <Icon icon="mdi-light:cart" style={{ color: 'black', fontSize: '24px' }} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
