import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
      console.log("Login submitted with:", { email, password });
    };
  
    return (
        <div className="flex items-center justify-center min-h-screen pt-[130px] bg-[#ffe5a9] pb-20">
        <div className="w-full max-w-[700px] p-8 rounded-lg bg-[#06362E] bg-opacity-80 shadow-xl border border-gray-800">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#ffe7b0] mb-2 boldText">Sign Up to Your Account</h1>
            <p className="text-[#fff]">
              Welcome to a smarter way of managing tasks and products. Our comprehensive suite is
              designed to streamline your workflow, enhance collaboration.
            </p>
          </div>
  
          <button className="flex items-center justify-center w-full p-3 mb-4 bg-[#fff] border border-gray-700 rounded-md font-medium hover:bg-gray-800 transition-colors gap-2">
            <div className="text-2xl">
              <FcGoogle/>
            </div>
            <span>or Sign in with Google</span>
          </button>
  
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-[#ffffffe2]"></div>
            <span className="px-4 text-sm text-[#fff]">Or</span>
            <div className="flex-grow h-px bg-[#ffffffe2]"></div>
          </div>
  
          <div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:"
                placeholder="Enter your email"
              />
            </div>
  
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="text-sm text-white">
                  Password
                </label>
                {/* <a href="#" className="text-sm text-[#ffe6ab] hover:text-[#ffff]">
                  Forgot your password?
                </a> */}
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>
  
            <a href="/login">
              <button
                  className="w-full p-3 bg-[#ffe6ab] rounded-md text-[#06362E] font-bold hover:bg-[#E2C686] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-5 cursor-pointer"
              >
                  Already have an account? Log in here.
              </button>
            </a>
            <button
              onClick={handleSubmit}
              className="w-full p-3 bg-[#ffffff] rounded-md text-[#06362E] font-bold hover:bg-[#E2C686] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

export default Register
