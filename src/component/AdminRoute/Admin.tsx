"use client";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Admin() {
  const [activeTab, setActiveTab] = useState("USERS");
  const [order] = useState({
    code: "365jQwb9803",
    product: "Covercoco 250gm Serum",
    qty: 1,
    price: 450,
    status: "Pending",
    orderStatus: "Done",
    payout: "Active",
  });

  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="bg-white rounded-md p-5  min-h-screen">
      <div className=" text-black justify-center text-center">
        <h1 className="text-3xl font-bold">Welcome, Admin 🚀</h1>
      </div>
      <div className="flex gap-5 md:flex-row flex-col">
        {/* Tabs */}

        <div className="flex flex-wrap gap-4 border-b  border-gray-200 mb-6   md:flex-col flex-row ">
          {["USERS", "setTrack order", "Security"].map((tab) => (
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
        <div className="absolute left-1/9 transform -translate-x-1/2 hidden md:flex  h-[20rem] mb-100   ">
          <div className="flex flex-col h-[28rem] gap-70 w-[1px] bg-black justify-center items-center "></div>
        </div>

        <div className="px-5">
          {activeTab === "USERS" && (
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

              <div className="overflow-x-auto mt-6">
                <table className="min-w-full border border-gray-300 rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Role</th>
                      <th className="px-4 py-2 border">Tracking Numbers</th>
                      <th className="px-4 py-2 border">Signup Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border">{user.email}</td>
                        <td className="px-4 py-2 border">{user.role}</td>
                        <td className="px-4 py-2 border">
                          {user.trackingId?.length
                           }
                        </td>
                        <td className="px-4 py-2 border">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "setTrack order" && (
            <div className="text-[#343C6A]">
              <div className="max-w-4xl mx-auto  p-6">
                {/* Track Order */}
                <h2 className="text-lg font-semibold mb-4">Track your Order</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Order Code: {order.code}
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
                    Marto courier Tracking: 9376763836642021
                  </span>
                </p>

                {/* Orders Table */}
                <h2 className="text-lg font-semibold mt-6 mb-4">All Orders</h2>
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
            <div className="text-[#343C6A]">Security content goes here...</div>
          )}
        </div>
      </div>
    </div>
  );
}
