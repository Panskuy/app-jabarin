"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [historyEvent, setHistoryEvent] = useState([]);

  const getDataEvent = async () => {
    const response = await fetch(
      "https://67f4ad86cbef97f40d2ee8fc.mockapi.io/beasiswa"
    );
    const data = await response.json();
    setHistoryEvent(data.slice(0, 5));
  };

  useEffect(() => {
    getDataEvent();
  }, []);

  return (
    <div className="flex flex-col p-2 bg-white dark:bg-white/10 ml-1 rounded-xl  shadow-xl">
      <h1 className="text-center font-bold text-3xl mb-3">
        Riwayat Pendaftaran
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {historyEvent.map((riwayat) => {
          return (
            <div
              key={riwayat.id}
              className="w-full bg-white dark:bg-white/10 rounded-lg px-4 py-2 shadow-lg"
            >
              <div className="flex gap-2 items-center justify-between">
                <h1 className="text-lg lg:text-xl font-bold">{riwayat.nama}</h1>
                <h1 className="text-xs font-semibold bg-yellow-600 px-2 py-1 rounded-lg text-white dark:text-white">
                  {riwayat.penyedia}
                </h1>
              </div>
              <h1>{riwayat.lokasi}</h1>
              <h1>{riwayat.waktu}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
