"use client";

import React, { useState } from "react";
import { UploadCloud } from "lucide-react";

const EventUpload = () => {
  const [form, setForm] = useState({
    nama: "",
    deskripsi: "",
    lokasi: "",
    penyedia: "",
    jenis: "",
    waktu: "",
    img: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Event:", form);
    // lanjutkan submit ke API kalau perlu
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white dark:bg-[#1a1a1a] dark:text-white rounded-xl shadow-lg p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-500 dark:text-yellow-500 mt-2">
            Upload Event
          </h1>
          <p className="text-sm text-gray-400">
            Masukkan informasi lengkap tentang acara kamu
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama Event */}
          <div>
            <label className="block text-sm font-medium mb-1">Nama Event</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-600 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-yellow-600"
              required
            />
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block text-sm font-medium mb-1">Deskripsi</label>
            <textarea
              name="deskripsi"
              value={form.deskripsi}
              onChange={handleChange}
              rows={3}
              className="w-full bg-transparent border border-gray-600 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-yellow-600"
              required
            ></textarea>
          </div>

          {/* Lokasi dan Penyedia */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Lokasi</label>
              <input
                type="text"
                name="lokasi"
                value={form.lokasi}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-600 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-yellow-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Penyedia</label>
              <input
                type="text"
                name="penyedia"
                value={form.penyedia}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-600 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-yellow-600"
              />
            </div>
          </div>

          {/* Jenis dan Waktu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Jenis</label>
              <select
                name="jenis"
                value={form.jenis}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-600 text-black dark:text-white dark:bg-black/50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-yellow-600"
              >
                <option value="" disabled>
                  Pilih jenis
                </option>
                <option value="beasiswa">Beasiswa</option>
                <option value="magang">Magang</option>
                <option value="seminar">Seminar</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Waktu</label>
              <input
                type="text"
                name="waktu"
                value={form.waktu}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-600 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-yellow-600"
              />
            </div>
          </div>

          {/* URL Gambar */}
          <div>
            <label className="block text-sm font-medium mb-1">URL Gambar</label>
            <input
              type="text"
              name="img"
              value={form.img}
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-600 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-yellow-600"
            />
          </div>

          {/* Tombol Submit */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-600 text-white font-bold py-2 px-6 rounded-md dark:hover:bg-yellow-500 transition "
            >
              Submit Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventUpload;
