import { useNavigate } from "react-router-dom";

export default function Sidebar({active}) {
  const navigate= useNavigate();
  return (
    <aside className="w-64 hidden lg:block bg-white border-r p-6">
      <h2 className="font-bold mb-4">Menu</h2>

      <ul className="space-y-3 cursor-pointer ">
        <li className="text-indigo-600 font-semibold ">Overview</li>
        <li onClick={()=>navigate("/Mylisting")} >My Listings</li>
        <li onClick={()=>navigate("/get-complaints")} >Complaints</li>
        <li>Rent Tracker</li>
      </ul>
    </aside>
  );
}