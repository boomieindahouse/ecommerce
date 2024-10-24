import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-4">

                {/* Exclusive Section */}
                <div>
                    <h2 className='text-white'>Exclusive</h2>
                    <p className="mt-4 text-white">Subscribe</p>
                    <p className="text-gray-400 mb-4">Get 10% off your first order</p>
                    <div className="flex items-center text-black p-1 border-2 border-gray-600 rounded-xl w-56">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="grow p-2 outline-none text-sm text-white bg-transparent w-40"
                        />
                        <button className="ml-2 p-2 text-white">
                            <Icon icon="mdi:arrow-right" width="24px" />
                        </button>
                    </div>
                </div>

                {/* Support Section */}
                <div>
                    <h2 className="text-lg font-normal text-white">Support</h2>
                    <p className="mt-4 text-gray-400">
                        999 Huatale, Nakhon Ratchasima, 30000.
                    </p><br />
                    <p className="text-gray-400">boomies@example.com</p><br />
                    <p className="text-gray-400">+66-99-999-9999</p>
                </div>

                {/* Account Section */}
                <div>
                    <h2 className="text-lg font-normal text-white">Account</h2>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>

                {/* Quick Link Section */}
                <div>
                    <h2 className="text-lg font-normal text-white">Quick Link</h2>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Download App Section */}
                <div>
                    <h2 className="text-lg font-normal text-white">Download App</h2>
                    <p className="mt-4 text-gray-400">Save $3 with App New User Only</p>
                    <div className="flex items-center space-x-4 mt-2">
                        <div className="flex space-x-2"> {/* ใช้ flex และ space-x-2 เพื่อเว้นระยะระหว่างปุ่ม */}
                            <button className="btn bg-transparent">
                                <Icon icon="mdi:facebook" width="24px" />
                            </button>
                            <button className="btn bg-transparent">
                                <Icon icon="mdi:twitter" width="24px" />
                            </button>
                            <button className="btn bg-transparent">
                                <Icon icon="mdi:instagram" width="24px" />
                            </button>
                            <button className="btn bg-transparent">
                                <Icon icon="mdi:linkedin" width="24px" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center text-gray-500">
                <p className='copyright text-gray-600'>© Copyright Pawis 2024. All rights reserved</p>
            </div>
        </footer>
    );
}
