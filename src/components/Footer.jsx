import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-600 dark:bg-white/10 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        {/* Logo / Deskripsi */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">JABARIN</h2>
          <p className="text-sm text-white/80">
            Platform untuk mencari informasi seputar beasiswa, seminar, dan
            magang dengan mudah.
          </p>
        </div>

        {/* Navigasi */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Navigasi</h3>
          <ul className="text-sm text-white/80 space-y-1">
            <li>
              <Link href="/beasiswa" className="hover:text-white">
                Beasiswa
              </Link>
            </li>
            <li>
              <Link href="/seminar" className="hover:text-white">
                Seminar
              </Link>
            </li>
            <li>
              <Link href="/magang" className="hover:text-white">
                Magang
              </Link>
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Ikuti Kami</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} JABARIN.COM.
      </div>
    </footer>
  );
};

export default Footer;
