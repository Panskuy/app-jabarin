import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/images/gambar1.jpg"; // Pastikan path gambar sesuai

const Header = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl">
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black opacity-40 z-1 h-full" />

      {/* Gambar sebagai background */}
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />

      {/* Konten teks di atas gambar */}
      <div className="relative z-10 w-full lg:w-1/2 text-white p-6 h-full flex flex-col justify-end lg:justify-center">
        <h1 className="text-3xl font-bold">Selamat Datang Disini</h1>
        <p className="text-xl lg:text-2xl">
          Disini anda bisa mencari aplikasi untuk mencari informasi seputar
          event dan lain-lain
        </p>
      </div>
    </div>
  );
};

export default Header;
