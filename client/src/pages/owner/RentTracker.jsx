import React from "react";
import Navbar from "../../components/OwnerNavbar";
import Footer from "../../components/Footer";

export default function RentTracker() {
  return (<>
  <Navbar/>
    <div className="min-h-screen bg-gray-50 pt-20 px-6">

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-bold mb-2">Rent Tracker</h1>
          <p className="text-gray-500">
            Manage rent payments and track tenant activity
          </p>
        </div>

        <div className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded">
          <button>◀</button>
          <span className="font-semibold">Feb 2024</span>
          <button>▶</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-green-100 p-6 rounded-xl shadow">
          <p className="text-sm text-green-700">Collected</p>
          <h2 className="text-2xl font-bold">₹85,000</h2>
          <p className="text-xs text-green-600 mt-2">+12% growth</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <p className="text-sm text-yellow-700">Pending</p>
          <h2 className="text-2xl font-bold">₹17,700</h2>
          <p className="text-xs text-yellow-600 mt-2">2 payments left</p>
        </div>

        <div className="bg-red-100 p-6 rounded-xl shadow">
          <p className="text-sm text-red-700">Overdue</p>
          <h2 className="text-2xl font-bold">₹2,500</h2>
          <p className="text-xs text-red-600 mt-2">Needs action</p>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-bold">Payment Directory</h3>

          <input
            className="border px-3 py-1 rounded"
            placeholder="Search tenant..."
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-4">Tenant</th>
                <th className="p-4">Room</th>
                <th className="p-4">Rent</th>
                <th className="p-4">Due</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody>

              {/* Row 1 */}
              <tr className="border-t">
                <td className="p-4 font-medium">Rahul Kumar</td>
                <td className="p-4">Room 102</td>
                <td className="p-4">₹8,500</td>
                <td className="p-4">5 Feb</td>
                <td className="p-4">
                  <span className="bg-green-200 text-green-700 px-2 py-1 rounded text-xs">
                    Paid
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-blue-600">Download</button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-t">
                <td className="p-4 font-medium">Priya Sharma</td>
                <td className="p-4">Room 204</td>
                <td className="p-4">₹9,200</td>
                <td className="p-4">5 Feb</td>
                <td className="p-4">
                  <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded text-xs">
                    Pending
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-orange-600">
                    Send Reminder
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-t">
                <td className="p-4 font-medium">Amit Joshi</td>
                <td className="p-4">Room 301</td>
                <td className="p-4">₹8,500</td>
                <td className="p-4">1 Feb</td>
                <td className="p-4">
                  <span className="bg-red-200 text-red-700 px-2 py-1 rounded text-xs">
                    Overdue
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="bg-red-600 text-white px-3 py-1 rounded">
                    Alert
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 flex justify-center">
          <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded">
            Send Reminders to All
          </button>
        </div>

      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="bg-indigo-600 text-white p-6 rounded-xl">
          <h3 className="text-lg font-bold mb-2">Automated Payouts</h3>
          <p className="text-sm opacity-80 mb-4">
            Enable auto-collection from tenants
          </p>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded">
            Enable
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold mb-2">Quick Export</h3>
          <p className="text-sm text-gray-500 mb-4">
            Download rent statements
          </p>

          <div className="flex gap-3">
            <button className="border px-4 py-2 rounded">CSV</button>
            <button className="border px-4 py-2 rounded">PDF</button>
          </div>
        </div>

      </div>


    </div>
    <Footer/>
    </>
  );
}