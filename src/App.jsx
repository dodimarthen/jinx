import React from "react";
import Button from "./components/Elements/Button/Button";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-4xl font-bold mb-2 text-blue-700">Login</h1>
        <p className="font-medium text-slate-600 mb-8">
          Welcome, please fill the details below!
        </p>
        <form action="">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-slate-700 text-sm font-bold mb-1"
            >
              Email
            </label>
            <input
              type="text"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-55"
              placeholder="user@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-slate-700 text-sm font-bold mb-1"
            >
              Password
            </label>
            <input
              type="text"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-55"
              placeholder="**********"
            />
          </div>
          <Button classname="bg-neutral-800 w-full">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
