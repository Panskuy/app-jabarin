"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [dataBeasiswa, setDataBeasiswa] = useState([]);

  const getDataBeasiswa = async () => {
    try {
      const response = await fetch(
        "https://67f4ad86cbef97f40d2ee8fc.mockapi.io/beasiswa"
      );
      const data = await response.json();
      const filtered = data.filter(
        (item) => item.jenis.toLowerCase() === "beasiswa"
      );
      setDataBeasiswa(filtered);
    } catch (error) {
      console.log("Data gagal di-fetch");
    }
  };

  useEffect(() => {
    getDataBeasiswa();
  }, []);

  return (
    <div className="w-full max-w-[1800px] mx-auto min-h-screen bg-gray-100 dark:bg-white/5 p-6">
      {/* Filter section */}
      <section className="w-full bg-yellow-500 rounded-lg px-6 py-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Cari berdasarkan kata kunci..."
            className="bg-white dark:bg-black h-10 px-4 rounded-md shadow"
          />

          <input
            type="date"
            className="bg-white dark:bg-black h-10 px-4 rounded-md shadow"
            placeholder="masukan tanggal mulai"
          />
        </div>
      </section>

      {/* Event list */}
      <section className="space-y-6">
        {dataBeasiswa.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-white/20 shadow-md rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-lg transition-all"
          >
            <div className="flex-1">
              <Link
                href={`/beasiswa/${event.id}`}
                className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 hover:underline"
              >
                {event.nama}
              </Link>
              <p className="mt-1 text-gray-700 text-sm dark:text-white">
                <span className="font-semibold">Deskripsi:</span>{" "}
                {event.deskripsi}
              </p>
              <p className="mt-1 text-gray-700 text-sm dark:text-white">
                <span className="font-semibold">Waktu:</span> {event.waktu}
              </p>
              <p className="mt-1 text-gray-700 text-sm dark:text-white">
                <span className="font-semibold">Lokasi:</span> {event.lokasi}
              </p>
              <p className="mt-1">
                <span className="inline-block bg-blue-500 text-white dark:bg-yellow-600 text-xs px-2 py-1 rounded">
                  {event.penyedia}
                </span>{" "}
                <span className="ml-2 inline-block bg-yellow-500 dark:bg-black text-white text-xs px-2 py-1 rounded">
                  {event.jenis}
                </span>
              </p>
            </div>

            <Link
              href={`/beasiswa/${event.id}`}
              className="text-yellow-600 hover:text-yellow-800 transition"
            >
              <MoveRight size={28} />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Page;
