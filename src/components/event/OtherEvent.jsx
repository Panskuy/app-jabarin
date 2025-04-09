"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const OtherEvent = () => {
  const [otherEvent, setOtherEvent] = useState([]);

  const getOtherEvent = async () => {
    try {
      const response = await fetch(
        "https://67f4ad86cbef97f40d2ee8fc.mockapi.io/beasiswa"
      );

      const data = await response.json();
      const shuffled = data.sort(() => 0.5 - Math.random());

      setOtherEvent(shuffled.slice(0, 10));
    } catch (error) {
      console.log("gagal fetch data", error);
    }
  };

  useEffect(() => {
    getOtherEvent();
  }, []);
  return (
    <div className="w-full bg-white dark:bg-white/5 mx-auto  p-2 rounded-lg">
      <h1 className="text-center font-bold text-2xl mb-4 dark:text-yellow-500">
        Event Lain
      </h1>
      <div className="flex flex-col gap-3">
        {otherEvent.map((event) => {
          return (
            <Link href={`/event/${event.id}`} key={event.id}>
              <div className="w-full rounded-lg shadow-lg p-4 hover:border hover:border-gray-900">
                <h1 className="font-bold text-xl ">{event.nama}</h1>
                <p>{event.penyedia}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OtherEvent;
