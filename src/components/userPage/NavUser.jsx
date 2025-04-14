"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavUser = () => {
  const pathname = usePathname();

  const EditNavItems = [
    {
      label: "Edit Data Pribadi",
      href: "/user/edit-profile",
    },
    {
      label: "Riwayat Pendidikan",
      href: "/user/history-pendidikan",
    },
    {
      label: "Event Tersimpan",
      href: "/user/event-tersimpan",
    },
    {
      label: "History Pendaftaran",
      href: "/user/history-pendaftaran",
    },
  ];

  return (
    <div className="flex flex-row lg:flex-col border-l-4 border-yellow-400 px-5 py-4 gap-3 rounded-xl bg-white/90 dark:bg-black/70 shadow-xl backdrop-blur-md w-full">
      {EditNavItems.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <Link href={item.href} key={index}>
            <p
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md cursor-pointer
              ${
                isActive
                  ? "bg-yellow-400 text-black"
                  : "text-black dark:text-white bg-white dark:bg-zinc-900 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavUser;
