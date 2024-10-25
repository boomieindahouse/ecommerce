import { Icon } from '@iconify/react';
import shopimg from '../assets/img/shopimg.jpg'

const Signin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-6xl" style={{ height: '600px' }}>
                {/* รูป Placeholder */}
                <div className="w-3/5">
                    <img
                        src={shopimg}
                        alt="Placeholder"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* ด้านขวา: ฟอร์ม Signup */}
                <div className="w-2/5 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-normal text-center">Sign in to BeHumble</h2>
                    <p className="text-center text-gray-500">Enter your details below</p>

                    {/* Form */}
                    <form className="space-y-4 mt-4">
                        {/* Email/Phone Field */}
                        <div>
                            <input
                                type="text"
                                placeholder="Email or Phone Number"
                                className="w-full mt-1 p-2 bg-white border-b-2 border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black"
                                style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full mt-1 p-2 bg-white border-b-2 border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black"
                                style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                            />
                        </div>

                        {/* Create Account Button */}
                        <button className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600">
                            Sign in
                        </button>
                    </form>

                    {/* Sign up with Google */}
                    <div className="flex items-center justify-center mt-6">
                        <button className="w-full flex items-center justify-center gap-2 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600">
                            <Icon icon="ant-design:google-outlined" fontSize={24} />
                            Sign in with Google
                        </button>
                    </div>

                    <div className="login">
                        <div className="login-acc flex items-center justify-center mt-6">
                            <p className="flex items-center text-gray-500">
                                Don&apos;t have account?
                                <span className="ml-2">
                                    <a href="/Signup" className="text-blue-500 hover:underline">Sign up</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
