"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [singleData, setSingleData] = useState(null);
  const { id } = useParams();

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

  if (!singleData) return <div>Loading...</div>;

  return (
    <div className="w-full h-screen flex ">
      <div className="w-full max-w-4xl mx-auto shadow-lg p-10 h-fit">
        <div className="flex gap-2 ">
          <div className="h-40 w-1/2 border border-black rounded-lg">
            <h1>Image</h1>
          </div>
          <div className="h-40 w-full">
            <div className="flex justify-between text-xl items-center">
              <h1 className="font-bold bg-blue-600 px-2 py-2 rounded-lg text-white">
                {singleData.nama}
              </h1>
              <h1>{singleData.penyedia}</h1>
            </div>

            <div className="flex flex-col">
              <h1>
                Dekskripsi : <span>{singleData.deskripsi}</span>
              </h1>
              <h1>
                Waktu : <span>{singleData.waktu}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
