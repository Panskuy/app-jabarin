"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center h-[900px]">
      <h1 className="text-3xl mb-2 font-bold">Halaman tidak di temukan!</h1>
      <button
        onClick={() => router.back()}
        className="bg-yellow-500 px-4 text-2xl py-2 rounded-lg"
      >
        Back112122
      </button>
    </div>
  );
};

export default NotFound;
