import React from "react";
import {
  FiCalendar,
  FiPhone,
  FiUser,
  FiAlertTriangle,
  FiBriefcase,
} from "react-icons/fi";

export default function PatientProfile() {
  const patient = {
    name: "Jessica Taylor",
    dob: "August 23, 1996",
    gender: "Female",
    contact: "(415) 555-1234",
    emergency: "(415) 555-5678",
    insurance: "Sunrise Health Assurance",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-[102%] flex flex-col justify-between overflow-hidden">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={patient.image}
          alt={patient.name}
          className="w-28 h-28 rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">{patient.name}</h3>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-4 text-sm text-gray-700 flex-1 overflow-y-auto">
        <div className="flex items-center space-x-3">
          <FiCalendar className="text-cyan-600" />
          <span>
            <strong>Date of Birth:</strong> {patient.dob}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FiUser className="text-cyan-600" />
          <span>
            <strong>Gender:</strong> {patient.gender}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FiPhone className="text-cyan-600" />
          <span>
            <strong>Contact Info:</strong> {patient.contact}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FiAlertTriangle className="text-cyan-600" />
          <span>
            <strong>Emergency Contact:</strong> {patient.emergency}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FiBriefcase className="text-cyan-600" />
          <span>
            <strong>Insurance Provider:</strong> {patient.insurance}
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-full text-sm font-semibold transition">
        Show All Information
      </button>
    </div>
  );
}
