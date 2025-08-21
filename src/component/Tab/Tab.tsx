"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Image from "next/image";

export default function Tab() {
    const router = useRouter();
     const [activeTab, setActiveTab] = useState("All");


  return (
    <div>
      
          <div className="px-4  md:px-0 md:my-0 my-10 ">
  <div className="bg-white rounded-md  whitespace-nowrap">
    {/* Tabs */}
    <div className=" flex flex-wrap gap-1 border-b font-normal border-gray-200 mb-6 justify-center text-center  ">
      {["All", "On-Road", "Airways","Railways","Waterways"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 text-base  hover:bg-[#33accc] whitespace-nowrap opacity-80 text-black  p-1 hover:text-white ${
            activeTab === tab
              ? "border-b-2 bg-[#33accc] text-white"
              : "text-black "
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

  
    {activeTab === "All" && (
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  ">
    <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover " />
      </div>
         <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div>
       <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div> <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div>
      <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div><div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div><div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div><div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div><div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div><div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div><div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div>
      </div>
    )}

   
    {activeTab === "On-Road" && (
      <div className="text-[#343C6A]">  
     <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  ">
    <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover " />
      </div>
         <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div>
       <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div> </div>
         </div>
    )}
    {activeTab === "Airways" && (
      <div className="text-[#343C6A]"> 
       <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  ">
    <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover " />
      </div>
         <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div>
       <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div> </div>
    
          </div>
    )}

     {activeTab === "Railways" && (
      <div className="text-[#343C6A]">
         <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  ">
    <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover " />
      </div>
         <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div>
       </div>
    
            </div>
    )}
     {activeTab === "Waterways" && (
      <div className="text-[#343C6A]"> 
       <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  ">
    <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover " />
      </div>
         <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div>
       <div> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
      </div> </div>
    
           </div>
    )}
  </div>
</div>

    </div>
  )
}
