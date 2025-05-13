// src/Payment.js
import React from "react";
import { CheckCircle } from "lucide-react";
import { TbCurrencyRupee } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate()

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Failed to load Razorpay SDK. Check your internet connection.");
      return;
    }

    const options = {
      key: "rzp_test_9tCOZuKLhiZdaM", // Replace with your test key
      amount: 325000, // 500 INR = 50000 paise
      currency: "INR",
      name: "Flash Innovations",
      description: "Test Transaction",
      handler: function (response) {
        alert(`Payment Successful: ${response.razorpay_payment_id}`);
        console.log(response);
        navigate("/")
      },
      prefill: {
        name: "Demo User",
        email: "demo@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#528FF0",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="py-24 px-2 md:py-32 w-full flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Hotel Image */}
        <div className="relative">
          <img 
            src="https://i.ytimg.com/vi/xDdNGTuWfkc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgWShKMA8=&amp;rs=AOn4CLCXBKrX3b6BKFWmnXO5iT96P6Z8jQ" 
            alt="Grande Centre Point Hotel" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h1 className="text-xl font-bold text-white">Master Bed Room</h1>
          </div>
        </div>
        
        {/* Booking Details */}
        <div className="p-4">
          {/* Check-in/Check-out */}
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm text-blue-500 font-medium">CHECK IN</p>
              <p className="text-sm">Wed-21-Jan-2016</p>
            </div>
            <div>
              <p className="text-sm text-blue-500 font-medium text-right">CHECK OUT</p>
              <p className="text-sm text-right">Fri-23-Jan-2016</p>
            </div>
          </div>
          
          {/* Room Info */}
          <div className="mb-4 pb-2 border-b border-gray-200">
            <p className="text-sm text-gray-500">ROOM INFO</p>
            <p className="font-medium">Deluxe Premium</p>
            <div className="flex items-center mt-1 text-sm text-green-500">
              <CheckCircle size={16} className="mr-1" />
              <span>Breakfast Included</span>
              <CheckCircle size={16} className="ml-4 mr-1" />
              <span>Free cancellation</span>
            </div>
          </div>
          
          {/* Stay Info */}
          <div className="mb-4 pb-4 border-b border-gray-200">
            <p className="text-sm text-gray-500">STAY</p>
            <p>1 Room, Max 2 Adults</p>
          </div>
          
          {/* Payment Info */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <p>1 Room X 2 Nights</p>
              <p className="flex items-center"><TbCurrencyRupee/>2,750.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Taxes and fees</p>
              <p>+ 450.00</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">TOTAL</p>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-500 flex items-center"><TbCurrencyRupee/> 3,200.00</p>
                <p className="text-xs text-gray-400">best price guarantee</p>
              </div>
            </div>
          </div>
          
          {/* Pay Button */}
          <button 
            onClick={handlePayment}
            className="w-full bg-green-500 text-white py-3 rounded font-medium hover:bg-green-600 transition-colors"
          >
            PAY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
