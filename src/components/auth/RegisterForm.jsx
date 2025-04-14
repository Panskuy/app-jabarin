"use client";

import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterForm = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewVerifyPassword, setViewVerifyPassword] = useState(false);
  const router = useRouter();

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };
  const handleViewVerifyPassword = () => {
    setViewVerifyPassword(!viewVerifyPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault(); // Cegah reload
    router.push("/auth/register/verifyEmail");
  };

  return (
    <div className="w-full max-w-xl flex flex-col justify-center border-2 border-black/40 p-4 rounded-lg shadow-xl bg-white dark:bg-white/5">
      <h1 className="font-bold text-3xl text-center text-blue-600m dark:text-yellow-500">
        Register
      </h1>

      <form action="" className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Masukkan username"
            className="px-2 py-1 border border-black/20 rounded-lg dark:border-white/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Masukkan email"
            className="px-2 py-1 border border-black/20 rounded-lg dark:border-white/30"
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
              className="px-2 py-1 border border-black/20 rounded-lg w-full dark:border-white/30"
            />

            <button
              type="button"
              onClick={handleViewPassword}
              className="-ml-10 text-black/40 dark:text-white/30"
              aria-label="Toggle password visibility"
            >
              {viewPassword ? <EyeClosed /> : <Eye />}{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="verifyPassword">Verify Password</label>
          <div className="w-full flex items-center">
            <input
              type={viewVerifyPassword ? "text" : "password"}
              name="verifyPassword"
              id="verifyPassword"
              placeholder="Masukkan Verifikasi Password"
              className="px-2 py-1 border border-black/20 rounded-lg w-full dark:border-white/30"
            />

            <button
              type="button"
              onClick={handleViewVerifyPassword}
              className="-ml-10 text-black/40 dark:text-white/30"
              aria-label="Toggle password visibility"
            >
              {viewVerifyPassword ? <EyeClosed className="" /> : <Eye />}
            </button>
          </div>
        </div>

        <div>
          <div className="flex gap-2">
            <input type="checkbox" id="syarat" />
            <label
              htmlFor="syarat"
              className="text-black dark:text-white/70 font-light text-sm"
            >
              Menyetujui Syarat dan Ketentuan
            </label>
          </div>
        </div>

        <div className="w-full text-center bg-yellow-600 hover:bg-yellow-500 rounded-lg py-2 font-bold text-white text-lg mt-4">
          <button onClick={handleRegister} type="submit">
            Register
          </button>
        </div>
      </form>

      <h1 className="flex gap-1 text-sm mt-2">
        Sudah punya akun?{" "}
        <Link href={"/auth/login"}>
          <span className="text-blue-700 dark:text-yellow-500">Login</span>
        </Link>
      </h1>
    </div>
  );
};

export default RegisterForm;
