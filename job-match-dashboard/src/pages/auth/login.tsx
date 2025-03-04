import {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {useLogin} from "../../hooks/auth/uselogin.tsx";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const {email, setEmail, password, setPassword, handleSubmit} = useLogin()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
                <p className="text-center text-gray-500 mb-6">Sign in to your account</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-9 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash/> : <FaEye/>}
                        </button>
                    </div>

                    <button type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg transition">
                        Login In
                    </button>

                    <p className="text-center text-gray-500 text-sm">
                        Don't have an account? <a href="#" className="text-blue-700">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
