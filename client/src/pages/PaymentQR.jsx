import { QRCodeCanvas } from "qrcode.react";
import { useLocation } from "react-router-dom";

const PaymentQR = () => {
const location= useLocation();
const upiLink   =location.state ||{}
console.log(upiLink)
  return (
    <div className="flex flex-col items-center h-screen justify-center mt-6">
      <h2 className="text-lg font-semibold mb-4">
        Scan & Pay
      </h2>

      <QRCodeCanvas value={upiLink} size={300} />

      <p className="mt-3 text-sm text-gray-500">
        Scan with any UPI app
      </p>
    </div>
  );
};

export default PaymentQR;