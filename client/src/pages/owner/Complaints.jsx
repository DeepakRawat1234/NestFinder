import { useState } from "react";
import Navbar from "../../components/OwnerNavbar";

export default function Complaints() {

  const [complaints] = useState([
    {
      id: 1,
      title: "Burst pipe in kitchen",
      room: "Room 402B",
      type: "Plumbing",
      desc: "Water leaking rapidly under sink",
      status: "open",
      time: "10 min ago"
    },
    {
      id: 2,
      title: "WiFi not working",
      room: "Room 110A",
      type: "Network",
      desc: "Disconnects every 5 mins",
      status: "open",
      time: "1 hour ago"
    },
    {
      id: 3,
      title: "Power outage",
      room: "Room 305",
      type: "Electrical",
      desc: "No electricity in bedroom",
      status: "progress",
      time: "30 min ago"
    }
  ]);

  const open = complaints.filter(c => c.status === "open");
  const progress = complaints.filter(c => c.status === "progress");

  return (
    <><Navbar/>
    <div className="min-h-screen bg-gray-100 p-6 mt-14 ">

      {/* Header */}
      <div className="flex justify-between items-center mb-6 ">
        <h1 className="text-2xl font-bold">Complaint Dashboard</h1>

        <input
          className="border px-3 py-2 rounded w-64"
          placeholder="Search complaint..."
        />
      </div>

      {/* Stats */}
      <div className="flex gap-4 mb-6">
        <div className="bg-white p-3 rounded shadow text-sm">
          🔴 {open.length} Open
        </div>
        <div className="bg-white p-3 rounded shadow text-sm">
          🟡 {progress.length} In Progress
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Open */}
        <div>
          <h2 className="font-bold text-red-600 mb-3">Open Complaints</h2>

          <div className="space-y-4">
            {open.map(item => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="flex justify-between">
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-400">
                    {item.time}
                  </span>
                </div>

                <h3 className="font-bold mt-2">{item.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.desc}
                </p>

                <div className="mt-3 text-xs text-gray-600">
                  📍 {item.room}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress */}
        <div>
          <h2 className="font-bold text-yellow-600 mb-3">In Progress</h2>

          <div className="space-y-4">
            {progress.map(item => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="flex justify-between">
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-400">
                    {item.time}
                  </span>
                </div>

                <h3 className="font-bold mt-2">{item.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.desc}
                </p>

                <div className="mt-3 text-xs text-gray-600">
                  📍 {item.room}
                </div>

                <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded text-sm">
                  Mark Resolved
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div></>
  );
}