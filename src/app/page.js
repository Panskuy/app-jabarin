"use client";

import Header from "@/components/home/Header";
import Section from "@/components/home/Section";
import { useEffect, useState } from "react";

export default function Home() {
  const [beasiswaData, setBeasiswaData] = useState([]);
  const [seminarData, setSeminarData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://67f4ad86cbef97f40d2ee8fc.mockapi.io/beasiswa"
      );
      const result = await res.json();

      setBeasiswaData(
        result
          .filter((item) => item.jenis?.toLowerCase().includes("beasiswa"))
          .slice(0, 3)
      );
      setSeminarData(
        result
          .filter((item) => item.jenis?.toLowerCase().includes("seminar"))
          .slice(0, 3)
      );
    } catch (error) {
      console.error("Gagal fetch data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full max-w-[1800px] mx-auto min-h-screen px-4 py-6">
      <section className="w-full bg-yellow-600 dark:bg-white/30 rounded-lg px-4 py-4 mb-6 shadow-md">
        <Header />
      </section>

      <Section title="Beasiswa" data={beasiswaData} showLink href="/beasiswa" />
      <Section title="Seminar" data={seminarData} showLink href="/seminar" />
    </div>
  );
}
