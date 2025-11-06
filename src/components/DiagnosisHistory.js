import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Oct, 2023", systolic: 120, diastolic: 80 },
  { month: "Nov, 2023", systolic: 140, diastolic: 70 },
  { month: "Dec, 2023", systolic: 130, diastolic: 90 },
  { month: "Jan, 2024", systolic: 150, diastolic: 100 },
  { month: "Feb, 2024", systolic: 160, diastolic: 78 },
  { month: "Mar, 2024", systolic: 145, diastolic: 82 },
];

export default function DiagnosisHistory() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Diagnosis History</h3>
        <p className="text-sm text-gray-500">Last 6 months ▼</p>
      </div>

      {/* Chart and Summary */}
      <div className="bg-purple-50 p-4 rounded-xl grid grid-cols-3 gap-4">
        {/* Chart */}
        <div className="col-span-2">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Blood Pressure</h4>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="systolic"
                  stroke="#d946ef"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#d946ef" }}
                />
                <Line
                  type="monotone"
                  dataKey="diastolic"
                  stroke="#6366f1"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#6366f1" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="bg-white rounded-xl p-4 flex flex-col justify-center text-sm">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-1">Systolic</h4>
            <p className="text-3xl font-bold text-pink-500">160</p>
            <p className="text-gray-500 text-xs flex items-center space-x-1">
              <span>▲</span> <span>Higher than Average</span>
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Diastolic</h4>
            <p className="text-3xl font-bold text-indigo-500">78</p>
            <p className="text-gray-500 text-xs flex items-center space-x-1">
              <span>▼</span> <span>Lower than Average</span>
            </p>
          </div>
        </div>
      </div>

      {/* Health Stat Cards */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Respiratory Rate */}
        <div className="p-4 bg-blue-50 rounded-xl text-center shadow-sm">
          <div className="flex justify-center mb-2">
            <img
              src="https://img.icons8.com/fluency/48/lungs.png"
              alt="Respiratory Icon"
              className="w-8 h-8"
            />
          </div>
          <p className="text-sm text-gray-500">Respiratory Rate</p>
          <h2 className="text-2xl font-bold text-blue-600">20 bpm</h2>
          <p className="text-xs text-gray-500">Normal</p>
        </div>

        {/* Temperature */}
        <div className="p-4 bg-red-50 rounded-xl text-center shadow-sm">
          <div className="flex justify-center mb-2">
            <img
              src="https://img.icons8.com/color/48/thermometer.png"
              alt="Temperature Icon"
              className="w-8 h-8"
            />
          </div>
          <p className="text-sm text-gray-500">Temperature</p>
          <h2 className="text-2xl font-bold text-red-500">98.6°F</h2>
          <p className="text-xs text-gray-500">Normal</p>
        </div>

        {/* Heart Rate */}
        <div className="p-4 bg-pink-50 rounded-xl text-center shadow-sm">
          <div className="flex justify-center mb-2">
            <img
              src="https://img.icons8.com/color/48/heart-with-pulse.png"
              alt="Heart Icon"
              className="w-8 h-8"
            />
          </div>
          <p className="text-sm text-gray-500">Heart Rate</p>
          <h2 className="text-2xl font-bold text-pink-500">78 bpm</h2>
          <p className="text-xs text-gray-500">Lower than Average</p>
        </div>
      </div>
    </div>
  );
}
