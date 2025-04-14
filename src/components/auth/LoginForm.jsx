"use client";

import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {
  const [viewPassword, setViewPassword] = useState(false);

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <div className="bg-white w-full max-w-xl flex flex-col justify-center border-2 border-black/40 p-4 rounded-lg shadow-xl dark:bg-white/5">
      <h1 className="font-bold text-3xl text-center text-blue-600 dark:text-yellow-500">
        Login
      </h1>

      <form action="" className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Masukkan username"
            className="px-2 py-1 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <div className="w-full flex items-center">
            <input
              type={viewPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Masukkan Password"
              className="px-2 py-1 border border-black/20 rounded-lg w-full "
            />

            <button
              type="button"
              onClick={handleViewPassword}
              className="-ml-10 text-black/40 dark:text-white/30"
              aria-label="Toggle password visibility "
            >
              {viewPassword ? <EyeClosed /> : <Eye />}{" "}
            </button>
          </div>
        </div>

        <div className="w-full text-center bg-yellow-600 hover:bg-yellow-500 rounded-lg py-2 font-bold text-white text-lg mt-4">
          <button type="submit">Login</button>
        </div>
      </form>

      <h1 className="flex gap-1 text-sm mt-2">
        Sudah punya akun?{" "}
        <Link href={"/auth/register"}>
          <span className="text-blue-700 dark:text-yellow-500">Register</span>
        </Link>
      </h1>
    </div>
  );
};

export default LoginForm;
