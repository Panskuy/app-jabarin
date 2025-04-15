import React from "react";

const page = () => {
  const dataRiwayat = [
    {
      label: "SD",
      namaSekolah: "SDN 1 Surabaya",
      Lokasi: "Surabaya",
      tahun: "1992",
    },

    {
      label: "SMP",
      namaSekolah: "SMPN 10 Surabaya",
      Lokasi: "Surabaya",
      tahun: "1998",
    },
    {
      label: "SMA",
      namaSekolah: "SMAN 20 Surabaya",
      Lokasi: "Surabaya",
      tahun: "2001",
    },
  ];

  return (
    <div className="flex flex-col p-2 bg-white dark:bg-white/10 ml-1 rounded-xl  shadow-xl">
      <h1 className="text-center font-bold text-3xl mb-3">
        Riwayat Pendidikan
      </h1>
      <div className="w-full flex flex-col gap-2">
        {dataRiwayat.map((riwayat, index) => {
          return (
            <h1 key={index} className="font-bold text-xl">
              <span>{riwayat.label}</span> -{" "}
              <span>
                {riwayat.namaSekolah} - <span>{riwayat.tahun}</span>
              </span>
            </h1>
          );
        })}
      </div>
      <div className="w-full flex justify-end">
        <button className="p-3 bg-blue-600 dark:bg-yellow-600 text-white font-bold rounded-lg mr-4 mb-4">
          Simpan
        </button>
      </div>
    </div>
  );
};

export default page;
