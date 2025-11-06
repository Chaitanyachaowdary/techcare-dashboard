import React from "react";
import { FiMoreVertical, FiSearch } from "react-icons/fi";

const patients = [
  { name: "Emily Williams", gender: "Female", age: 18, image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Ryan Johnson", gender: "Male", age: 45, image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Brandon Mitchell", gender: "Male", age: 36, image: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Jessica Taylor", gender: "Female", age: 28, image: "https://randomuser.me/api/portraits/women/47.jpg" },
  { name: "Samantha Johnson", gender: "Female", age: 56, image: "https://randomuser.me/api/portraits/women/48.jpg" },
  { name: "Ashley Martinez", gender: "Female", age: 54, image: "https://randomuser.me/api/portraits/women/49.jpg" },
  { name: "Olivia Brown", gender: "Female", age: 32, image: "https://randomuser.me/api/portraits/women/50.jpg" },
  { name: "Tyler Davis", gender: "Male", age: 19, image: "https://randomuser.me/api/portraits/men/47.jpg" },
  { name: "Kevin Anderson", gender: "Male", age: 30, image: "https://randomuser.me/api/portraits/men/48.jpg" },
  { name: "Dylan Thompson", gender: "Male", age: 36, image: "https://randomuser.me/api/portraits/men/49.jpg" },
  { name: "Nathan Evans", gender: "Male", age: 58, image: "https://randomuser.me/api/portraits/men/50.jpg" },
  { name: "Mike Nolan", gender: "Male", age: 31, image: "https://randomuser.me/api/portraits/men/51.jpg" },

  // Added 5 new patients
  { name: "Sophia Carter", gender: "Female", age: 27, image: "https://randomuser.me/api/portraits/women/55.jpg" },
  { name: "Ethan Brooks", gender: "Male", age: 41, image: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Grace Miller", gender: "Female", age: 22, image: "https://randomuser.me/api/portraits/women/56.jpg" },
  { name: "Jacob Lee", gender: "Male", age: 29, image: "https://randomuser.me/api/portraits/men/56.jpg" },
  { name: "Lily Johnson", gender: "Female", age: 34, image: "https://randomuser.me/api/portraits/women/57.jpg" },
];

export default function PatientsList() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col overflow-hidden">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Patients</h3>

      {/* Search Bar */}
      <div className="relative mb-4">
        <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-full text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      {/* Scrollable List */}
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-lg pr-1 h-[102.5vh]">
        {patients.map((patient, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-2 rounded-xl cursor-pointer mb-1 transition ${
              index === 3 ? "bg-cyan-100" : "hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center space-x-3">
              <img
                src={patient.image}
                alt={patient.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  {patient.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <FiMoreVertical className="text-gray-400 text-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
