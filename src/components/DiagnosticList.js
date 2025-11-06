import React from "react";

const diagnostics = [
  { problem: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
  { problem: "Type 2 Diabetes", description: "Insulin resistance and elevated blood sugar", status: "Cured" },
  { problem: "Asthma", description: "Recurrent episodes of bronchial constriction", status: "Inactive" },
  { problem: "Arthritis", description: "Joint inflammation and pain", status: "Under Observation" },
  { problem: "Migraine", description: "Recurring headaches with nausea", status: "Inactive" },
  { problem: "Anemia", description: "Low red blood cell count", status: "Cured" },
  { problem: "Allergies", description: "Reaction to allergens", status: "Under Observation" },
];

export default function DiagnosticList() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mt-6 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Diagnostic List</h3>

      <div className="overflow-y-auto h-[220px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-lg">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="sticky top-0 bg-gray-50 z-10 border-b border-gray-200">
            <tr className="text-gray-600">
              <th className="pb-2 font-semibold">Problem/Diagnosis</th>
              <th className="pb-2 font-semibold">Description</th>
              <th className="pb-2 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((d, i) => (
              <tr
                key={i}
                className="hover:bg-gray-100 transition border-b border-gray-100 last:border-0"
              >
                <td className="py-3 font-medium text-gray-800">{d.problem}</td>
                <td className="py-3 text-gray-600">{d.description}</td>
                <td
                  className={`py-3 font-medium text-right ${
                    d.status === "Cured"
                      ? "text-green-600"
                      : d.status === "Under Observation"
                      ? "text-cyan-600"
                      : "text-gray-500"
                  }`}
                >
                  {d.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
