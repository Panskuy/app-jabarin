"use client";

import Link from "next/link";

export default function Card({ item }) {
  const jenis = item.jenis?.toLowerCase(); // handle null dan ubah jadi lowercase
  const linkHref = `/event/${item.id}`;

  return (
    <Link href={linkHref}>
      <div className="bg-white dark:bg-black border h-full border-gray-200 rounded-xl hover:bg-white/5 p-5 shadow hover:shadow-lg transition-all duration-75 group ">
        <p className="text-xl font-semibold text-yellow-700 dark:text-yellow-300 group-hover:underline">
          {item.nama}
        </p>
        <p className="text-gray-500 dark:text-white mb-2 font-semibold uppercase">
          {item.jenis}
        </p>
        <p className="text-gray-700 mb-1 dark:text-white">
          <span className="font-medium">Penyedia:</span> {item.penyedia}
        </p>
        <p className="text-gray-700 mb-1 dark:text-white">
          <span className="font-medium">Lokasi:</span> {item.lokasi}
        </p>
        <p className="text-gray-700 mb-3 dark:text-white">
          <span className="font-medium dark:text-white">Waktu:</span>{" "}
          {item.waktu}
        </p>
        <p className="text-gray-600 font-semibold dark:text-white text-justify">
          {item.deskripsi}
        </p>
      </div>
    </Link>
  );
}
