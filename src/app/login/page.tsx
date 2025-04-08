"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const loginData = {
    title: "Welcome to TalkTown",
    description:
      "Login and explore the amazing features we offer. Your journey begins here!",
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", user);
      router.push("/home");
      toast.success("Login Successfully");
      console.log("Data:", response.data);
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-800  px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-5xl">
        {/* Left Side */}
        <div className="md:w-1/2 p-8 bg-gray-900 text-white flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">{loginData.title}</h1>
          <p className="text-white/80 mt-4 text-center text-lg font-medium">
            {loginData.description}
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Login Now!
          </h2>

          <div className="flex flex-col gap-4 w-full">
            <div>
              <label className="text-gray-700 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full mt-1 p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full mt-1 p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            <button
              disabled={buttonDisabled}
              onClick={handleLogin}
              className="w-full bg-gray-900  text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-500 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Login
            </button>
            <button
              onClick={() => null}
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-gray-900 font-bold hover:underline"
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
