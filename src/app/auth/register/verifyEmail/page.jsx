"use client";

import React from "react";

const VerifyPage = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen px-4">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-white/10 p-6 rounded-lg shadow-md">
        <h1 className="text-center font-bold text-2xl text-blue-600 dark:text-yellow-400">
          Masukkan Kode Verifikasi
        </h1>

        <p className="text-center text-sm text-gray-500 dark:text-white/50 mt-1">
          Kode dikirim ke email kamu. Silakan cek dan masukkan kodenya.
        </p>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Masukkan kode verifikasi"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-500 dark:hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold dark:bg-yellow-500">
            Verifikasi
          </button>

          <div className="text-center text-sm text-gray-600 dark:text-white/60">
            Belum menerima kode?{" "}
            <button className="text-blue-600 hover:underline dark:text-yellow-400">
              Kirim Ulang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
