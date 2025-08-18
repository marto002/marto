"use client";
import { services } from "@/component/Content/data";
import Horixontalrule from "@/component/Content/horixontalrule";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BsEmojiSmile, } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  return (
   <div>
    
  <section className="flex flex-col items-center justify-center w-full  mx-auto py-24 px-6 md:h-screen bg-white">
  <p className="text-[#000] text-3xl sm:text-4xl md:text-5xl text-center">Our Specialities</p>
  
  <div className="bg-red-700 my-4">
    <Horixontalrule />
  </div>

  <p className="text-[#999] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl text-center px-2">
    Our technology-enabled logistics solutions, anchored by a first-class customer service team and dedicated riders, create a seamless customer experience for both retailers and customers
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-12 w-full max-w-6xl">
    {services.map((service, index) => (
      <div
        key={index}
        className="p-6 flex flex-col justify-center items-center text-center shadow-2xl transition"
        onClick={() => router.push(`/service/${service.id}`)}
      >
        <div className="w-16 h-16 flex items-center justify-center text-3xl mb-6">
          <Image
            src={service.image}
            alt="Background"
            width={50}
            height={50}
          />
        </div>
        <h3 className="text-lg md:text-xl font-normal text-black mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm">{service.description}</p>
      </div>
    ))}
  </div>
</section>

 
  <section> 
    


                                    <div className="relative overflow-hidden ">
             
              <Image
                src="/images/banner2.jpg" 
                alt="Background"
                fill
                className="object-cover z-[-10] "
                priority />

         
              <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-15 md:min-h-screen min-h-[18rem] pt-20 lg:pt-40 justify-center text-center">
                <p className="md:text-[65px] text-[40px] font-normal mt-15 text-white">Giving The Best Solutions</p>
              </div>
            </div>



            

  </section>
  <section className="bg-white justify-center text-center items-center px-25 h-[25rem] flex flex-col gap-5">
   
    <div className="bg-[#33accc] justify-center items-center p-5 rounded-full w-15 h-15"> <FaTrophy color="#fff" size={20}/></div>
   
   <h1 className="text-[#000] text-5xl"> Always Delivering Best Of Our Services</h1>
  
<p className="text-black">To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.</p>
  </section>



  <section> 
    


                                    <div className="relative overflow-hidden">
             
              <Image
                src="/images/banner3.jpg" 
                alt="Background"
                fill
                className="object-cover z-[-10] "
                priority />

         
              <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-15 md:min-h-screen min-h-[18rem] pt-20 lg:pt-40 justify-center text-center">
                <p className="md:text-[65px] text-[40px]  font-normal mt-30 text-white">Making Our Customers Satisfied</p>
              </div>
            </div>

  </section>

    <section className="bg-white justify-center text-center items-center px-25 h-[25rem] flex flex-col gap-5">
   
    <div className="bg-[#33accc] justify-center items-center p-5 rounded-full w-15 h-15"> <BsEmojiSmile  color="#fff" size={20}/></div>
   
   <h1 className="text-[#000] text-5xl">Making Our Customers Happy</h1>
  
<p className="text-black">We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better</p>
  </section>

{/*<div className="relative overflow-hidden ">
  <Image
    src="/images/banner2.jpg"
    alt="Background"
    fill
    className="object-cover z-[-10] fixed top-0 left-0"
    priority
  />

  <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-15 md:min-h-screen min-h-[18rem] pt-20 lg:pt-40 justify-center text-center">
    <p className="md:text-[65px] text-[40px] font-normal mt-15 text-white">
      Giving The Best Solutions
    </p>
  </div>
</div>
 */}
   </div>
  );
}
