import React from "react";

export default function PatientDetails() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-cyan-600">
        Patient Details
      </h3>
      <div className="space-y-3 text-gray-700">
        <p><strong>Name:</strong> Jessica Taylor</p>
        <p><strong>Age:</strong> 28</p>
        <p><strong>Gender:</strong> Female</p>
        <p><strong>Blood Type:</strong> O+</p>
      </div>

      <div className="mt-6">
        <h4 className="text-md font-semibold text-cyan-600 mb-2">
          Emergency Contact
        </h4>
        <p><strong>Name:</strong> Samuel Taylor</p>
        <p><strong>Relation:</strong> Husband</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
      </div>
    </div>
  );
}
