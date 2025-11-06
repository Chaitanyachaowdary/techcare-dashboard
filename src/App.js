import React from "react";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";
import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";
import PatientProfile from "./components/PatientProfile";
import LabResults from "./components/LabResults";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <main className="grid grid-cols-4 gap-6 px-6 items-start">
        {/* Left Sidebar */}
        <div>
          <PatientsList />
        </div>

        {/* Middle Section */}
        <div className="col-span-2 flex flex-col justify-between space-y-6 h-[85vh]">
          <DiagnosisHistory />
          <DiagnosticList />
        </div>

        {/* Right Panel */}
        <div className="flex flex-col justify-start space-y-6 h-[75vh] mt-2">
        <div className="flex-[0.6]">
          <PatientProfile />
        </div>
        <div className="flex-[0.4] mt-4">
          <LabResults />
        </div>
      </div>
      </main>
    </div>
  );
}

export default App;
