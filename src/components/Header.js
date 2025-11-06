import React from "react";
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiMessageSquare,
  FiCreditCard,
  FiSettings,
  FiMoreVertical,
} from "react-icons/fi";

export default function Header() {
  const navItems = [
    { label: "Overview", icon: <FiHome />, active: false },
    { label: "Patients", icon: <FiUsers />, active: true },
    { label: "Schedule", icon: <FiCalendar />, active: false },
    { label: "Message", icon: <FiMessageSquare />, active: false },
    { label: "Transactions", icon: <FiCreditCard />, active: false },
  ];

  return (
    <header className="flex justify-between items-center bg-white shadow-sm px-8 py-3 rounded-full m-4 border border-gray-100">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-extrabold text-gray-800">
          <span className="text-cyan-600">Tech</span>.Care
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center space-x-2 text-sm font-medium px-3 py-2 rounded-full transition-all duration-200 ${
              item.active
                ? "bg-cyan-400 text-white shadow"
                : "text-gray-600 hover:text-cyan-600"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User Info */}
      <div className="flex items-center space-x-3">
        <img
          src="https://i.pravatar.cc/40?img=48"
          alt="Doctor"
          className="w-9 h-9 rounded-full object-cover"
        />
        <div className="flex flex-col text-left leading-tight">
          <span className="text-sm font-semibold text-gray-800">
            Dr. Jose Simmons
          </span>
          <span className="text-xs text-gray-500">General Practitioner</span>
        </div>
        <FiSettings className="text-gray-500 text-xl cursor-pointer hover:text-cyan-600" />
        {/* 3 Dots Icon */}
        <FiMoreVertical className="text-gray-500 text-xl cursor-pointer hover:text-cyan-600" />
      </div>
    </header>
  );
}
