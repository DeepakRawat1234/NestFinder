export default function ActivityFeed() {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h3 className="font-bold mb-4">Recent Activity</h3>

      <ul className="space-y-3 text-sm">
        <li>📩 New enquiry from Amit</li>
        <li>✅ Complaint resolved</li>
        <li>💰 Rent received ₹8500</li>
      </ul>
    </div>
  );
}