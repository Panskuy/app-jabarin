"use client";

import Link from "next/link";

export default function Card({ item }) {
  const jenis = item.jenis?.toLowerCase(); // handle null dan ubah jadi lowercase
  const linkHref = `/${jenis === "beasiswa" ? "beasiswa" : "seminar"}/${
    item.id
  }`;

  return (
    <div className="bg-white dark:bg-black border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition-shadow duration-300">
      <Link
        href={linkHref}
        className="text-xl font-semibold text-yellow-700 dark:text-yellow-300 hover:underline"
      >
        {item.nama}
      </Link>
      <p className="text-sm text-gray-500 dark:text-white mb-2 capitalize">
        {item.jenis}
      </p>
      <p className="text-gray-700 mb-1 dark:text-white">
        <span className="font-medium">Penyedia:</span> {item.penyedia}
      </p>
      <p className="text-gray-700 mb-1 dark:text-white">
        <span className="font-medium">Lokasi:</span> {item.lokasi}
      </p>
      <p className="text-gray-700 mb-3 dark:text-white">
        <span className="font-medium dark:text-white">Waktu:</span> {item.waktu}
      </p>
      <p className="text-gray-600 text-sm dark:text-white">{item.deskripsi}</p>
    </div>
  );
}
