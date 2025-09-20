"use client";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Trackorder() {


  const [activeTab, setActiveTab] = useState("Profile");

  const [order] = useState({
    code: "365jQwb9803",
    product: "Covercoco 250gm Serum",
    qty: 1,
    price: 450,
    status: "Pending",
    orderStatus: "Done",
    payout: "Active",
  });


    const [trackingId, setTrackingId] = useState<string>("");

 useEffect(() => {
    const fetchId = async () => {
      const res = await fetch("/api/tracking");
      const data = await res.json();
      setTrackingId(data.trackingId);
    };
    fetchId();
  }, []);


  useEffect(() => {
    const id = "TRK-" + uuidv4().slice(0, 8).toUpperCase(); 
    setTrackingId(id);
  }, []);

  
    const [user, setUser] = useState<any[]>([]);
  
   /* useEffect(() => {
      fetch("/api/admin/users")
        .then((res) => res.json())
        .then((data) => setUsers(data.users));
    }, []);*/
    useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      fetch(`/api/users/${encodeURIComponent(email)}`)
        .then(res => res.json())
        .then(data => setUser(data.user));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="px-4 py-10 md:px-10 h-full">
        <div className="bg-white rounded-md p-6 md:p-10 flex md:flex-row flex-col gap-5 min-h-screen">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 border-b  border-gray-200 mb-6  md:flex-col flex-row ">
            {["Profile", "Track order", "Security"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-base font-semibold cursor-pointer ${
                  activeTab === tab
                    ? "border-b-2 border-[#343C6A] text-[#232323] "
                    : "text-[#718EBF]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="absolute left-1/6 transform -translate-x-1/2 hidden md:flex  h-[20rem] mb-100   ">
            <div className="flex flex-col h-[28rem] gap-70 w-[1px] bg-black justify-center items-center "></div>
          </div>

          <div className="px-5">
            {activeTab === "Profile" && (
              <div className="flex flex-col md:flex-row gap-5 text-black">
                <div className="w-22 h-20 rounded-full overflow-hidden border-2 border-[#F5F7FA] mx-auto md:mx-0">
                  <Image
                    src="/image/topnavimg.png"
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p>profile </p>
                <button>log out</button>
              </div>
            )}

            {activeTab === "Track order" && (
              <div className="text-[#343C6A]">
                <div className="max-w-4xl mx-auto  p-6">
                  {/* Track Order */}
                  <h2 className="text-lg font-semibold mb-4">
                    Track your Order
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                     {user ? (
        <p>Welcome back,   🎉</p>
      ) : (
        <p>Loading user info...</p>
      )}
                    
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    {["Placed", "Packed", "Shipped", "Delivered"].map(
                      (step, i) => (
                        <div key={i} className="flex-1 flex items-center">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              i < 3 ? "bg-[#33accc] text-white" : "bg-gray-300"
                            }`}
                          >
                            ✓
                          </div>
                          {i < 3 && (
                            <div className="flex-1 h-1 bg-[#33accc]"></div>
                          )}
                          {i === 2 && (
                            <div className="flex-1 h-1 bg-gray-300"></div>
                          )}
                        </div>
                      )
                    )}
                  </div>

                  <p className="text-sm text-gray-600">
                    Your order has been delivered <br />
                    <span className="text-gray-400">
                      Marto courier Tracking: {trackingId}
                    </span>
                  </p>

                  {/* Orders Table */}
                  <h2 className="text-lg font-semibold mt-6 mb-4">
                    All Orders
                  </h2>
                  <table className="w-full border text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border px-3 py-2">#</th>
                        <th className="border px-3 py-2">Order Code</th>
                        <th className="border px-3 py-2">Product Name</th>
                        <th className="border px-3 py-2">Qty</th>
                        <th className="border px-3 py-2">Price</th>
                        <th className="border px-3 py-2">Delivery Status</th>
                        <th className="border px-3 py-2">Order Status</th>
                        <th className="border px-3 py-2">Payout</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-3 py-2">01</td>
                        <td className="border px-3 py-2">{order.code}</td>
                        <td className="border px-3 py-2">{order.product}</td>
                        <td className="border px-3 py-2">{order.qty}</td>
                        <td className="border px-3 py-2">{order.price}</td>
                        <td className="border px-3 py-2">
                          <span className="px-2 py-1 rounded bg-gray-300">
                            {order.status}
                          </span>
                        </td>
                        <td className="border px-3 py-2">
                          <span className="px-2 py-1 rounded bg-[#33accc] text-white">
                            {order.orderStatus}
                          </span>
                        </td>
                        <td className="border px-3 py-2">
                          <span className="px-2 py-1 rounded bg-orange-600 text-white">
                            {order.payout}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTab === "Security" && (
              <div className="text-[#343C6A]">
                Security content goes here...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


