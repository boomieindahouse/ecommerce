import { Icon } from '@iconify/react';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className='top-content text-center'>Create an account</h2>
        <p>Enter your details below</p>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full mt-1 p-2 rounded-md border-gray-300"
            />
          </div>

          {/* Email/Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email or Phone Number</label>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="input input-bordered w-full mt-1 p-2 rounded-md border-gray-300"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full mt-1 p-2 rounded-md border-gray-300"
            />
          </div>

          {/* Create Account Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
            Create Account
          </button>
        </form>

        {/* Sign up with Google */}
        <div className="flex items-center justify-center mt-6">
          <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
            <Icon icon="ant-design:google-outlined" fontSize={24} />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
