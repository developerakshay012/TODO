import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-5">

      {/* Hero Section */}
      <section className="flex items-center justify-center">
        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
            Simple • Fast • Secure
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
            Organize Your Day,
            
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Plan your tasks, stay focused, and get more done with a
            simple and secure Todo application.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/signup"
              className="rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
            >
              Login
            </Link>

          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-widest text-blue-500">
              Features
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Everything You Need
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Simple tools to help you manage your everyday tasks
              without unnecessary complexity.
            </p>
          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-3xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-5 text-4xl">
                ✅
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Easy Task Management
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Create, update, complete and delete your tasks
                quickly and easily.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-3xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-5 text-4xl">
                🔐
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Secure & Private
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Your account and personal tasks are protected
                with secure authentication.
              </p>

            </div>


            {/* Card 3 */}
            <div className="rounded-3xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-5 text-4xl">
                ⚡
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Simple & Fast
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A clean interface designed to help you focus
                on what really matters.
              </p>

            </div>

          </div>
        </div>

      </section>


      {/* How It Works */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-500">
            How It Works
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Get Started in 3 Simple Steps
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Create Account
              </h3>

              <p className="mt-2 text-slate-600">
                Sign up and create your personal account.
              </p>
            </div>


            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Create Todos
              </h3>

              <p className="mt-2 text-slate-600">
                Add tasks and organize your daily work.
              </p>
            </div>


            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Get Things Done
              </h3>

              <p className="mt-2 text-slate-600">
                Complete your tasks and stay productive.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-4xl rounded-3xl bg-blue-500 px-8 py-16 text-center shadow-xl">

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Ready to get things done?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-blue-100">
            Start organizing your tasks and make every day more productive.
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
          >
            Start Now
          </Link>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t bg-white px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">

          <h2 className="text-xl font-bold text-slate-900">
            TodoApp
          </h2>

          <p className="text-sm text-slate-500">
            © 2026 TodoApp. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
};

export default Home;