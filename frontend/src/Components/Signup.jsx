import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);
  };

  return (
    <div className=" bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-5">

      <div className="mx-auto flex  max-w-6xl items-center justify-center">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">

          {/* Left Side */}
          <div className="hidden bg-blue-500 p-10 text-white md:flex md:flex-col md:justify-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
              Join TodoApp
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-tight">
              Plan better.
              <span className="block text-yellow-300">
                Do better.
              </span>
            </h1>

            <p className="mt-6 max-w-md leading-7 text-blue-100">
              Create your account and start organizing your
              daily tasks in a simple and secure workspace.
            </p>

            <div className="mt-10 space-y-4 text-sm text-blue-100">
              <p>✓ Create and manage your todos</p>
              <p>✓ Keep your daily tasks organized</p>
              <p>✓ Secure personal account</p>
            </div>

          </div>


          {/* Right Side */}
          <div className="p-8 sm:p-10">

            <div className="mx-auto max-w-md">

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900">
                  Create Account
                </h2>

                <p className="mt-2 text-slate-500">
                  Fill in your details to get started.
                </p>
              </div>


              <form onSubmit={handleSubmit} className="space-y-5">

                {/* First + Last Name */}
                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      First Name
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                </div>


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
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Minimum 8 characters"
                    minLength={8}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* Confirm Password */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    minLength={8}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* Terms */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-blue-500"
                  />

                  <p className="text-sm text-slate-500">
                    I agree to the{" "}
                    <span className="font-medium text-blue-500">
                      Terms & Conditions
                    </span>
                  </p>
                </div>


                {/* Signup Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-500 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl"
                >
                  Create Account
                </button>

              </form>


              {/* Login Link */}
              <p className="mt-8 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-blue-500 hover:text-blue-600"
                >
                  Login
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Signup;