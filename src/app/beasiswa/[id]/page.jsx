"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [singleData, setSingleData] = useState(null);
  const { id } = useParams();
  const router = useRouter();

  const getSingleData = async () => {
    try {
      const response = await fetch(
        `https://67f4ad86cbef97f40d2ee8fc.mockapi.io/beasiswa/${id}`
      );
      const data = await response.json();
      setSingleData(data);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleData();
    }
  }, [id]);

  if (!singleData) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="w-full min-h-screen flex justify-center items-start p-4">
      <div className="w-full max-w-4xl shadow-lg p-4 md:p-10 bg-white dark:bg-white/5 rounded-lg">
        <div className="my-3">
          <button
            onClick={() => router.back()}
            className="border border-blue-600 dark:border-yellow-600 px-2 py-1 rounded-lg hover:bg-blue-600 dark:hover:bg-yellow-600 hover:text-white transition-all"
          >
            Back
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Image Placeholder */}
          <div className="h-40 w-full md:w-1/2 border border-black rounded-lg flex items-center justify-center">
            <h1 className="text-sm md:text-base">Image</h1>
          </div>

          {/* Informasi Beasiswa */}
          <div className="w-full flex flex-col justify-between">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-lg md:text-xl gap-2">
              <h1 className="font-bold bg-blue-600 dark:bg-yellow-600 px-3 py-1 rounded-lg text-white text-sm md:text-base">
                {singleData.nama}
              </h1>
              <h1 className="text-sm md:text-base font-semibold underline">
                {singleData.penyedia}
              </h1>
            </div>

            <div className="mt-4 space-y-1 text-sm md:text-base">
              <h1>
                <span className="font-semibold">Deskripsi:</span>{" "}
                {singleData.deskripsi}
              </h1>
              <h1>
                <span className="font-semibold">Waktu:</span> {singleData.waktu}
              </h1>
            </div>
          </div>
        </div>
        <button className="w-full lg:w-fit mt-4 bg-yellow-400 dark:bg-yellow-600 font-semibold flex items-center hover:bg-yellow-500 px-2 py-1 rounded-lg text-sm lg:text-lg transition-colors">
          Bergabung
        </button>
      </div>
    </div>
  );
};

export default Page;
