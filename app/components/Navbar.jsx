"use client"
import { useState } from 'react';
import Image from 'next/image';
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar visibility
  };

  return (
    <header className="bg-[#F8F9FA] text-white p-4 w-full border-b-2 border-yellow-100">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center  pl-4">
          <Image height={50} width={50} src="/logo.png" alt="Company Logo"  />
          <span className="text-3xl font-semibold text-[#164760]">Register</span><span className="text-3xl font-semibold text-[#FFA229]">Karo</span>
        </div>

        {/* Navbar Links (visible on large screens) */}
        <nav className={`hidden md:flex space-x-6`}>
          <a href="/" className="text-lg text-bold text-[#575757] hover:text-blue-950">Home</a>
          <a href="/" className="text-lg text-bold text-[#575757] hover:text-blue-950">Startup</a>
          <a href="/" className="text-lg text-bold text-[#575757] hover:text-blue-950">Blog</a>
          <a href="/" className="text-lg text-bold text-[#575757] hover:text-blue-950">Contact Us</a>
          <a href="/" className="text-lg text-bold text-[#575757] hover:text-blue-950">About Us</a>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
          Click to Call
        </button>

        {/* Hamburger Menu for small screens (Using Custom Image) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleSidebar}>
            <img src="/hamburger.svg" alt="Hamburger Menu" className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="md:hidden fixed top-15 right-0 w-64 h-full bg-white p-4 text-white z-10">
          <ul className="space-y-4">
            <li> <a href="/" className="text-2xl text-bold text-[#575757] hover:text-blue-950">Home</a></li>
            <li> <a href="/" className="text-2xl text-bold text-[#575757] hover:text-blue-950">Startup</a></li>
            <li> <a href="/" className="text-2xl text-bold text-[#575757] hover:text-blue-950">Blog</a></li>
            <li> <a href="/" className="text-2xl text-bold text-[#575757] hover:text-blue-950">Contact Us</a></li>
            <li> <a href="/" className="text-2xl text-bold text-[#575757] hover:text-blue-950">About Us</a></li>
            <li>
              <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
