export default function RentTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-bold mb-4">Rent Tracker</h3>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>Name</th>
            <th>Room</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Amit</td>
            <td>Room 102</td>
            <td>₹8500</td>
            <td className="text-green-600">Paid</td>
          </tr>

          <tr>
            <td>Snehil</td>
            <td>Unit 4C</td>
            <td>₹12000</td>
            <td className="text-yellow-600">Pending</td>
          </tr>

          <tr>
            <td>Rohan</td>
            <td>Room 205</td>
            <td>₹7500</td>
            <td className="text-red-600">Overdue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}