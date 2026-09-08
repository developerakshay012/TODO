import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-linear-to-br from-slate-50 via-white to-blue-50 px-4 py-12">

      <div className="mx-auto flex min-h-[calc(100vh-160px)] max-w-6xl items-center justify-center">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">

          {/* Left Side */}
          <div className="hidden bg-blue-500 p-10 text-white md:flex md:flex-col md:justify-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
              Welcome Back
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-tight">
              Stay focused.
              <span className="block text-yellow-300">
                Get things done.
              </span>
            </h1>

            <p className="mt-6 max-w-md leading-7 text-blue-100">
              Login to manage your tasks, track your progress,
              and stay organized throughout your day.
            </p>

            <div className="mt-10 space-y-4 text-sm text-blue-100">
              <p>✓ Manage your personal todos</p>
              <p>✓ Keep your tasks organized</p>
              <p>✓ Secure account access</p>
            </div>

          </div>


          {/* Right Side */}
          <div className="p-8 sm:p-10">

            <div className="mx-auto max-w-md">

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900">
                  Login
                </h2>

                <p className="mt-2 text-slate-500">
                  Welcome back! Please enter your details.
                </p>
              </div>


              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-semibold text-slate-700">
                      Password
                    </label>

                    
                  </div>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* Remember */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-blue-500"
                  />

                  <span className="text-sm text-slate-600">
                    Remember me
                  </span>
                </div>


                {/* Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-500 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl"
                >
                  Login
                </button>

              </form>


              {/* Signup */}
              <p className="mt-8 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-blue-500 hover:text-blue-600"
                >
                  Sign up
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;