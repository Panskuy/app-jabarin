"use client";

import Card from "./Card";
import Link from "next/link";

export default function Section({ title, data, showLink = false, href = "/" }) {
  return (
    <section className="w-full bg-white dark:bg-white/10 rounded-lg p-6 shadow-xl mb-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        {title}
      </h1>

      {showLink && (
        <div className="w-full flex justify-end gap-2 mb-4">
          <Link href={href}>
            <span className="border border-black border-xl rounded-lg px-4 py-2 hover:bg-yellow-600 dark:bg-yellow-700 dark:hover:bg-yellow-500 hover:text-white transition">
              Lihat Semua
            </span>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length ? (
          data.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            Belum ada data.
          </p>
        )}
      </div>
    </section>
  );
}
