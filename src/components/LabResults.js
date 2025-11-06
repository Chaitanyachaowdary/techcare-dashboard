import React from "react";
import { FiDownload } from "react-icons/fi";

const labTests = [
  "Blood Tests",
  "CT Scans",
  "Radiology Reports",
  "X-Rays",
  "Urine Test",
  "MRI Scan",
  "Allergy Test",
  "Liver Function Test",
  "Thyroid Panel",
  "ECG Report",
];

export default function LabResults() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex-1 overflow-hidden">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Lab Results</h3>

      {/* Scrollable area */}
      <div
        className="overflow-y-auto h-[280px] pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px", // ✅ Forces space between items, even inside scroll containers
        }}
      >
        {labTests.map((test, index) => (
          <div
            key={index}
            className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-3 bg-white shadow-sm hover:bg-gray-50 transition-all duration-200"
          >
            <span className="text-sm text-gray-800 font-medium">{test}</span>
            <FiDownload
              className="text-cyan-600 text-lg cursor-pointer hover:text-cyan-700 hover:scale-110 transition-transform"
              title="Download"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
