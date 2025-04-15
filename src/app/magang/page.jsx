"use client";

import Search from "@/components/shared/Search";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [dataBeasiswa, setDataBeasiswa] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const getDataBeasiswa = async () => {
    try {
      const response = await fetch(
        "https://67f4ad86cbef97f40d2ee8fc.mockapi.io/beasiswa"
      );
      const data = await response.json();
      const filtered = data.filter(
        (item) => item.jenis.toLowerCase() === "magang"
      );

      setDataBeasiswa(filtered);
    } catch (error) {
      console.log("Data gagal di-fetch");
    }
  };

  useEffect(() => {
    getDataBeasiswa();
  }, []);

  const filteredData = dataBeasiswa.filter(
    (item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchDate ? item.waktu === searchDate : true)
  );

  return (
    <div className="w-full max-w-[1800px] mx-auto min-h-screen dark:bg-white/5 py-10">
      <Search
        onKeywordChange={(e) => setSearchTerm(e.target.value)}
        onDateChange={(e) => setSearchDate(e.target.value)}
      />

      {/* Event list */}
      <section className="space-y-6">
        {filteredData.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-white/20 shadow-md rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-lg transition-all"
          >
            {event.img && (
              <div className="min-w-[120px] max-w-[200px]">
                <Image
                  src={event.img}
                  alt={event.nama}
                  width={200}
                  height={120}
                  className="rounded object-cover"
                />
              </div>
            )}

            <div className="flex-1">
              <Link
                href={`/event/${event.id}`}
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
              href={`/event/${event.id}`}
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
