import { CL, Logo, gradient, star } from "@/assets/images";
import { Link } from "wouter";

const Login = () => {
  return (
    <div className="grid  lg:grid-cols-2 h-[100vh]">
      <div className="col bg-black-curo text-white h-full hidden lg:flex flex-col items-center justify-start relative p-10">
        <img src={gradient} className="absolute z-20 bottom-0 left-0" />
        <img src={star} className="absolute bottom-0  z-20 left-0 object-fit" />
        <div className="max-w-xl relative z-50">
          <Link to="/">
            <img src={Logo} className="mb-20" />
          </Link>
          <div>
            <h3 className="text-5xl font-bold">
              The future of trading is with us
            </h3>
            <p className="text-xl mt-6">
              Once you understand how the markets work, and why most fail… Your
              chances of becoming a consistently profitable trader increase
              enormously.
            </p>
          </div>
        </div>
      </div>
      <div className="col bg-white text-black-curo h-full flex flex-col items-center justify-center relative">
        <div className="max-w-xl w-full">
          <img src={CL} className="mb-6" />
          <form action="{{ url_for('user_login') }}">
            <div>
              <div className="mb-6">
                <h3 className="text-5xl font-bold mb-4">Hello, welcome</h3>
                <p className="text-gray-400">
                  Please enter your login details below
                </p>
              </div>
              <div className="space-y-2 mb-4">
                <label htmlFor="username">Email address</label>
                <input
                  className="border w-full border-gray-300 bg-white rounded-md p-2"
                  type="text"
                  name="username"
                />
              </div>
              <div className="space-y-2 mb-4">
                <label htmlFor="password">Password</label>
                <input
                  className="border w-full border-gray-300 bg-white rounded-md p-2"
                  type="password"
                  name="password"
                />
              </div>
              <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="remember_me" />
                  <label htmlFor="remember_me">Remember Me </label>
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <button
                  type="submit"
                  className="rounded-md bg-black-curo text-white p-3 w-full font-semibold"
                >
                  Login
                </button>
                <Link
                  to="/register"
                  className="block text-center text-black-curo w-full font-semibold rounded-md p-3 border border-gray-300"
                >
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
        <span className="absolute bottom-2 text-sm text-slate-500">
          © Copyright 2023, All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Login;
