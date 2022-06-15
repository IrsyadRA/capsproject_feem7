import React from "react";

const LoginForm = () => {
  return (
    <div className="grid lg:grid-cols-2 w-full min-h-screen">
      {/* left */}
      <div className="min-h-screen flex flex-col justify-center gap-12">
        <div className="max-w-5xl w-3/5 mx-auto">
          <h1 className="text-5xl font-bold">Sign in to your account</h1>
          <p className="text-lg mt-5 text-gray-400 ">
            Maximize your talent by taking courses that have been provided by
            the Ebility in full
          </p>
        </div>
        <div className="max-w-5xl lg:w-3/5 mx-auto flex flex-col gap-12">
          <div>
            <label className="text-2xl font-semibold block">Email</label>
            <input
              className="w-full p-4 rounded-md mt-2 border border-gray-300 focus:outline-none"
              placeholder="Email address"
            ></input>
          </div>
          <div>
            <label className="text-2xl font-semibold block">Password</label>
            <input
              className="w-full p-4 rounded-md mt-2 border border-gray-300 focus:outline-none"
              placeholder="Password"
            ></input>
          </div>
          <div className="lg:flex w-full justify-between">
            <div className="flex items-center gap-3">
              <input className="accent-blue-500" type="checkbox" />
              <label className="text-lg text-gray-400">Keep me signed in</label>
            </div>
            <button className="text-lg text-blue-400 hover:underline">
              Forgot Password?
            </button>
          </div>
          <button className="w-full p-4 bg-blue-500 rounded-md text-white font-bold text-xl hover:bg-blue-600">
            Sign In
          </button>
          <div className="flex justify-center">
              <label>Not registered yet?</label>
              <button className="text-blue-400 hover:underline">Create a new account</button>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="bg-gradient-to-b from-sky-500 to-blue-0"></div>
    </div>
  );
};

export default LoginForm;
