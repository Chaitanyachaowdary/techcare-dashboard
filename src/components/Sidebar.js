import React from "react";
import { FiUser, FiCalendar, FiMessageSquare, FiCreditCard } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen p-4 flex flex-col">
      <div className="space-y-4 mt-8">
        <button className="flex items-center space-x-2 text-cyan-600 font-medium">
          <FiUser /> <span>Patients</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600">
          <FiCalendar /> <span>Schedule</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600">
          <FiMessageSquare /> <span>Messages</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600">
          <FiCreditCard /> <span>Transactions</span>
        </button>
      </div>
    </div>
  );
}
