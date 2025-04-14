"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Search, Bell, Menu, X, Plus } from "lucide-react";
import ThemeToggle from "@/theme/theme-toggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItems = [
    { name: "Home", href: "/" },
    { name: "Beasiswa", href: "/beasiswa" },
    { name: "Seminar", href: "/seminar" },
    { name: "Magang", href: "/magang" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 flex justify-center ${
        scrolled
          ? "bg-blue-900 shadow-lg dark:bg-black"
          : "bg-blue-900 dark:bg-black"
      }`}
    >
      <div className="w-full max-w-7xl px-4 md:px-10 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center">
          <div className="mr-2 h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center">
            <span className="font-bold text-2xl">J</span>
          </div>
          <Link href="/" className="font-bold text-2xl md:text-3xl">
            JABARIN<span className="text-amber-500">.COM</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10"
          onClick={toggleMobileMenu}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
              mobileMenuOpen
                ? "opacity-0 scale-75 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
          >
            <Menu size={24} />
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
              mobileMenuOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 rotate-90"
            }`}
          >
            <X size={24} />
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between gap-6 w-full max-w-3xl ml-10">
          <ul className="flex items-center gap-4">
            {NavItems.map((item, index) => (
              <Link href={item.href} key={index}>
                <span className="hover:text-amber-400 font-medium transition-colors duration-200 px-2 py-1">
                  {item.name}
                </span>
              </Link>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button className="hover:bg-blue-700 dark:hover:bg-yellow-600 p-2 rounded-full transition-colors" />
            <button className="hover:bg-blue-700 dark:hover:bg-yellow-600 p-2 rounded-full relative transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            </button>
            <Link href="/auth/login">
              <span className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-5 rounded-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg">
                Login
              </span>
            </Link>
            <Link
              href="/event-upload"
              className="bg-white text-black rounded-lg"
            >
              <Plus className="w-9 h-8" />
            </Link>
            <ThemeToggle />
            <Link href="/user">
              <span className="bg-yellow-500 text-white py-2 px-3 rounded-full">
                U
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-blue-900 dark:bg-black md:hidden shadow-lg py-4 px-6 flex flex-col gap-4 transition-transform duration-300">
            {NavItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="block py-2 hover:text-amber-400 transition-colors">
                  {item.name}
                </span>
              </Link>
            ))}

            <div className="flex justify-between mt-2 pt-3 border-t border-blue-700">
              <button className="p-2 hover:bg-blue-800 rounded-full" />
              <button className="p-2 hover:bg-blue-800 rounded-full relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
              </button>
              <ThemeToggle />
              <Link href="/user" className="mt-2">
                <span className="bg-yellow-500 text-white py-2 px-3 rounded-full">
                  U
                </span>
              </Link>
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2"
              >
                <span className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-5 rounded-lg font-medium shadow-md transition-all duration-200">
                  Login
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
