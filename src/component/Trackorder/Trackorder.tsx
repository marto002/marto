"use client";

import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

type User = {
  status?: string;
  // add other fields if needed
};

const user: User | null = {
  status: "Packed",
};

export default function Trackorder() {
  const [activeTab, setActiveTab] = useState("Trackorder");


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

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail"); 
    if (!email) return;

    const fetchStatus = async () => {
      try {
        const res = await fetch(`/api/users/${encodeURIComponent(email)}`);
        const data = await res.json();
        setStatus(data.status);
      } catch (err) {
        console.error("Error fetching status:", err);
      }
    };

    fetchStatus();
  }, []);

 
  const visibleStatuses = ["Packed", "Placed", "Delivered", "Shipped"];

  return (
    <div className="min-h-screen bg-gray-100 md:p-6">
      <div className="px-0 py-10 md:px-10 h-full">
        <div className="bg-white rounded-md p-6 md:p-10 flex md:flex-row flex-col gap-5 min-h-screen">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 border-b  border-gray-200 mb-6  md:flex-col flex-row ">
            {["Trackorder", "Security"].map((tab) => (
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

          <div className="px-5 ">
            {activeTab === "Trackorder" && (
              <div className="text-[#343C6A]">
                <div className="max-w-4xl mx-auto  p-6">
                  {/* Track Order */}
                  <h2 className="text-lg font-semibold mb-4">
                    Track your Order
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {user ? (
                      <p className="text-2xl flex md:flex-row flex-col font-semibold text-[#718EBF]">
                        {userEmail && <p>Welcome back: {userEmail}</p>}
                      </p>
                    ) : (
                      <p>Loading user info...</p>
                    )}
                  </p>

                 

                 
                 

                 
                  <p className="text-xl text-[#33accc]">
                    <span className="text-gray-700 font-bold">
                      your Tracking order is : {trackingId}
                    </span><br />
                     Your order would be tracked here.... 
                  </p>
 <div  className="mt-6 ">
                    {visibleStatuses.includes(status || "") ? (
                      <div className="flex items-center justify-between mb-4">
                        {["Placed", "Packed", "Shipped", "Delivered"].map(
                          (step, i) => (
                            <div key={i} className="flex-1 flex items-center">
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                  i < 3
                                    ? "bg-[#33accc] text-white"
                                    : "bg-gray-300"
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
                    ) : null}
                  </div>
                </div>
                
              </div>
            )}
            {activeTab === "Security" && (
              <div className="text-[#343C6A] ml-4">
                Security coming soon ...
                
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
