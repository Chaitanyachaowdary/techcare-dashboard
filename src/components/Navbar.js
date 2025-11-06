import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow-sm border-b">
      <h1 className="text-2xl font-semibold text-cyan-600">Tech.Care</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-600">Dr. Jose Simmons</span>
        <FaUserCircle size={32} className="text-gray-500" />
      </div>
    </div>
  );
}
