import React from 'react'

const About = () => {
  return (
    <div>
        <div className=" bg-slate-50 px-6 rounded-2xl  ">

  <div className="mx-auto max-w-6xl">

    <div className="text-center">
      <p className="font-semibold uppercase tracking-widest text-blue-500">
        About Us
      </p>

      <h1 className="mt-3 text-5xl font-bold">
        About Todo
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
        TodoApp is a simple and secure task management application
        designed to help you organize your daily tasks.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 m">

      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Our Mission</h2>

        <p className="mt-4 leading-7 text-slate-600">
          Our goal is to provide a clean and easy-to-use platform
          where users can manage tasks without complexity.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Built with Security</h2>

        <p className="mt-4 leading-7 text-slate-600">
          User accounts are protected using password hashing,
          JWT authentication and role-based authorization.
        </p>
      </div>

    </div>

  </div>
</div>
    </div>
  )
}

export default About

