import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const PaymentPage = () => {
  const navigate=useNavigate();
  const { state } = useLocation();
const date = new Date();
  const booking = state || {
    title: "Azure Peak Retreat",
    location: "Santorini, Greece",
    price: 5762,
    guests: "2 Adults",
    dates: "Oct 12 — Oct 18",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBohpqt-oUWN28V6czNI5Yyv4CWjGmSswsTtY4lAP7Vxtk5JUSURVW1inO46LSTbsuEDuk4E6kih9_HiiJNFmJNB4dD4dJTNnAdqB4pzXvYxfqJi-QX96Xm09m3NWSAjzVIy8cssrsMCDQ_25R4zPfG3buN3x_5PPGi17AnG3w0EFIcaiVDdYfDx4tdQxvMEUhKFQ9gR-ZO5vw1Ux6fKMwLv-enblSq_VdrtMYMzRpnTZiyWPu4tjkrJ8aCMRBzG_q92pnP9K-QZhH5",
  };

  const [paymentMethod, setPaymentMethod] = useState("Google Pay");

  const handlePayment = () => {
const upiID = "9569585595@naviaxis";
  const name = "Deepak Rawat";
  const amount = booking.rent;

const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent("Payment")}`;navigate('/paymentQR',{state:upiLink})

    Swal.fire({
          title: `Processing ${paymentMethod} payment of ₹${booking.rent}`,
        
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        });
         

  };

const paymentOptions = [
  {
    name: "Google Pay",
    icon: "https://pfcqaewcncwelogddzqm.supabase.co/storage/v1/object/public/images/images%20(6).png",
  },
  {
    name: "Paytm",
    icon: "https://pfcqaewcncwelogddzqm.supabase.co/storage/v1/object/public/images/20231121070850.png",
  },
  {
    name: "PhonePe",
    icon: "https://pfcqaewcncwelogddzqm.supabase.co/storage/v1/object/public/images/ae5fe3dc423e44c0ddbef5dc64fa356b.png",
  },
];
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-indigo-700">
            NestFinder
          </h1>

          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">
            Secure Checkout
          </button>
        </div>
      </nav>

      {/* Main */}
      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-8 space-y-8">

          <div>
            <h2 className="text-3xl font-bold">Payment Method</h2>
            <p className="text-gray-500">
              Choose your preferred payment option.
            </p>
          </div>

          {/* UPI */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-4">UPI (Recommended)</h3>

            <div className="grid sm:grid-cols-3 gap-4">
  {paymentOptions.map((item) => (
    <div
      key={item.name}
      onClick={() => setPaymentMethod(item.name)}
      className={`border p-4 rounded-xl flex flex-col items-center cursor-pointer transition
        ${
          paymentMethod === item.name
            ? "border-indigo-600 bg-indigo-50"
            : "hover:bg-gray-100"
        }`}
    >
      <img
        src={item.icon}
        alt={item.name}
        className="h-10 w-20 object-contain mb-2"
      />

      <span className="text-sm font-medium">{item.name}</span>
    </div>
  ))}
</div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {["Card Payment", "Net Banking"].map((item) => (
              <div
                key={item}
                onClick={() => setPaymentMethod(item)}
                className={`bg-white p-5 rounded-xl shadow flex justify-between cursor-pointer transition
                  ${
                    paymentMethod === item
                      ? "border border-indigo-600 bg-indigo-50"
                      : "hover:bg-gray-50"
                  }`}
              >
                <div>
                  <h4 className="font-semibold">{item}</h4>
                  <p className="text-sm text-gray-500">
                    {item === "Card Payment"
                      ? "Visa, Mastercard"
                      : "Secure bank login"}
                  </p>
                </div>
                <span>→</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white p-6 rounded-xl shadow">

            <h3 className="text-lg font-bold mb-4">Booking Summary</h3>

            <div className="flex gap-4 mb-6">
              <img
                src={booking.images}
                alt="villa"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <p className="text-xs text-indigo-600 uppercase">
                  Luxury {booking.type}
                </p>
                <h4 className="text-sm font-semibold">
                  {booking.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {booking.city}
                </p>
              </div>
            </div>

            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Dates</span>
                <span>{date.toDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Owner</span>
                <span>{booking.ownerName}</span>
              </div>
            </div>

            <div className="mt-4 border-t pt-4 text-sm">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-indigo-600">
                  ₹ {booking.rent}
                </span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Pay with {paymentMethod}
            </button>

            {/* WhatsApp Support */}
            <a
              href="https://wa.me/919876543210?text=Hi%20I%20need%20help%20with%20payment"
              target="_blank"
              rel="noreferrer"
              className="block text-center mt-4 text-green-600 text-sm"
            >
              💬 Need help? Chat on WhatsApp
            </a>

          </div>
        </div>

      </main>
    </div>
  );
};

export default PaymentPage;