import React from "react";
import { FaBraille, FaTrophy } from "react-icons/fa";
import Horixontalrule from "../Content/horixontalrule";
import Image from "next/image";

export default function Servicepage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center w-full  mx-auto md:my-0 my-0 bg-white md:py-15 py-6 md:px-30 px-6  ">
        <div className="bg-[#33accc] justify-center items-center p-5 rounded-full w-15 h-15">
          
          <FaBraille color="#fff" size={20} />
        </div>

        <h1 className="text-[#000] md:text-5xl text-19 whitespace-nowrap">
          Our Service Details
        </h1>

        <div className=" justify-center items-center w-[15rem] md:py-3 flex ">
          <Horixontalrule />
        </div>
        <p className="text-[#999] text-lg leading-loose">
          Here are the variety of services offered by Aviary Courier
          Internatonal Limited.
        </p>
      </section>
      <section className="md:px-35 p-5 justify-center  items-center flex flex-col ">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-15 ">
          <div className="flex flex-col gap-5 justify-center text-center items-center">
            <div className="relative inline-block group ">
              <Image
                width={200}
                height={200}
                src="/images/serv-img1.jpg"
                alt="Your Alt Text"
                className="w-[220px] h-[220px] object-cover rounded-full"
              />

              {/* Centered inner image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  width={200}
                  height={200}
                  src="/images/serv-img1.jpg"
                  alt="Inner Image"
                  className="w-[190px] h-[190px] object-cover rounded-full shadow-2xl
                transition-all duration-500 ease-in-out 
                 group-hover:translate-y-[68%] group-hover:rotate-x-100"
                />

                {/* Centered text on second image */}
                <div
                  className=" absolute w-[190px] h-[190px] bg-[rgba(320,132,107,0.6)] p-5 rounded-full justify-center text-center items-center flex flex-col 
    opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <h1>Best in Delivery</h1>
                  <div className="overflow-hidden w-full justify-center items-center flex ">
                    <hr className=" border-white mt-4 border-1 rounded-2xl md:w-full w-[30%] " />
                  </div>
                  <p className="">By Aviary Courier International Service</p>
                </div>
              </div>
            </div>
            <div className=" md:h-80 h-40">
              <h1 className="text-black font-normal text-lg">
                Best In Delivery
              </h1>
              <p className="text-[#999] font-normal text-base">
                International express deliveries; global freight forwarding by
                air, sea, road and rail; warehousing solutions from packaging,
                to repairs, to storage; mail deliveries worldwide is everything
                Aviary Courier ltd does.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-center text-center items-center">
            <div className="relative inline-block group ">
              <Image
                width={200}
                height={200}
                src="/images/serv-img2.jpg"
                alt="Your Alt Text"
                className="w-[220px] h-[220px] object-cover rounded-full"
              />

              {/* Centered inner image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  width={200}
                  height={200}
                  src="/images/serv-img2.jpg"
                  alt="Inner Image"
                  className="w-[190px] h-[190px] object-cover rounded-full shadow-2xl
                transition-all duration-500 ease-in-out 
                 group-hover:translate-y-[68%] group-hover:rotate-x-100"
                />

                {/* Centered text on second image */}
                <div
                  className=" absolute w-[190px] h-[190px] bg-[rgba(320,132,107,0.6)] p-5 rounded-full justify-center text-center items-center flex flex-col 
    opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <h1>Best in Packing</h1>
                  <div className="overflow-hidden w-full justify-center items-center flex ">
                    <hr className=" border-white mt-4 border-1 rounded-2xl md:w-full w-[30%] " />
                  </div>
                  <p className="">By Aviary Courier International Service</p>
                </div>
              </div>
            </div>
            <div className=" md:h-80 h-40">
              <h1 className="text-black font-normal text-lg uppercase">
                Best In Packing
              </h1>
              <p className="text-[#999] font-normal text-base">
                We package your goods to ensure with the best packaging
                facilities.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-center text-center items-center">
            <div className="relative inline-block group ">
              <Image
                width={200}
                height={200}
                src="/images/serv-img3.jpg"
                alt="Your Alt Text"
                className="w-[220px] h-[220px] object-cover rounded-full"
              />

              {/* Centered inner image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  width={200}
                  height={200}
                  src="/images/serv-img3.jpg"
                  alt="Inner Image"
                  className="w-[190px] h-[190px] object-cover rounded-full shadow-2xl
                transition-all duration-500 ease-in-out 
                 group-hover:translate-y-[68%] group-hover:rotate-x-100"
                />

                {/* Centered text on second image */}
                <div
                  className=" absolute w-[190px] h-[190px] bg-[rgba(320,132,107,0.6)] p-5 rounded-full justify-center text-center items-center flex flex-col 
    opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <h1>Best in Transport</h1>
                  <div className="overflow-hidden w-full justify-center items-center flex ">
                    <hr className=" border-white mt-4 border-1 rounded-2xl md:w-full w-[30%] " />
                  </div>
                  <p className="">By Aviary Courier International Service</p>
                </div>
              </div>
            </div>
            <div className=" md:h-80 h-40">
              <h1 className="text-black font-normal text-lg uppercase">
                Best In Transport
              </h1>
              <p className="text-[#999] font-normal text-base">
                We are passionate about cargo and with our proven cargo delivery
                process, it is easy for us to transport your package from here
                to there.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-center text-center items-center">
            <div className="relative inline-block group ">
              <Image
                width={200}
                height={200}
                src="/images/serv-img4.jpg"
                alt="Your Alt Text"
                className="w-[220px] h-[220px] object-cover rounded-full"
              />

              {/* Centered inner image */}
              <div className="absolute inset-0 flex items-center justify-center ">
                <Image
                  width={200}
                  height={200}
                  src="/images/serv-img4.jpg"
                  alt="Inner Image"
                  className="w-[190px] h-[190px]  object-cover rounded-full shadow-2xl
                transition-all duration-500 ease-in-out 
                 group-hover:translate-y-[68%] group-hover:rotate-x-100 "
                />

                {/* Centered text on second image */}
                <div
                  className=" absolute w-[190px] h-[190px] bg-[rgba(320,132,107,0.6)] p-5 rounded-full justify-center text-center items-center flex flex-col 
    opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <h1>Best in Timing</h1>
                  <div className="overflow-hidden w-full justify-center items-center flex ">
                    <hr className=" border-white mt-4 border-1 rounded-2xl md:w-full w-[30%] " />
                  </div>
                  <p className="">By Aviary Courier International Service</p>
                </div>
              </div>
            </div>

            <div className=" md:h-80 h-40">
              <h1 className="text-black font-normal text-lg uppercase">
                Best In Timing
              </h1>
              <p className="text-[#999] font-normal text-base">
                With Aviary Courier Ltd, all deliveries/ packages are covered
                against damage or theft. We provide real-time tracking of your
                goods and send out constant notifications so you know where your
                items are at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="justify-center items-center text-center flex flex-col  md:py-10 py-10">
        <div className="bg-[#33accc] justify-center mb-5 items-center p-5 rounded-full w-15 h-15">
          
          <FaTrophy color="#fff" size={20} />
        </div>
        <h1 className="text-[#000] text-5xl">Our Service Information</h1>

        <div className=" justify-center items-center w-[15rem] py-3 flex ">
          <Horixontalrule />
        </div>
        <p className="text-[#999] font-normal ">
          Here are briefs on some of our services offered
        </p>
      </section>

      <section className="flex flex-col md:px-25 px-5 ">
        <div className="flex gap-5 md:flex-row flex-col  py-10">
          
          <div className="md:w-[60%] flex flex-col gap-5">
            <h1 className="text-[#33accc] text-xl">HAULAGE AND TRANSPORT.</h1>
            <p className="leading-loose text-[#999]">
              Our cargo and haulage department also takes care of our
              warehousing services. Aviary Courier Internatonal Service offers a
              range of warehouse services to individuals and financial
              institutions. We have bonded warehouses at various locations
              around the world. These warehouses have been serving individual
              importers for storage and financial institutions for recouping
              credit line granted customers. We are also involved in field
              warehousing for goods that could not fit into bonded warehouses.
              We have all kinds of items ranging from less sensitive bulky items
              to heavy duty items at lower rate to short, medium and long –
              range destinations within Nigeria and the west coast of Africa.
              Our fleet of trucks and vans ensure that our customers receive
              professional
            </p>
          </div>
           <div className="w-full md:w-[40%] flex items-center justify-center mb-8 md:mb-0 ">
          <Image
          width={200}
          height={200}
            src="/images/service1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-auto h-50 object-cover" />
        </div>
        </div>

        <div className="flex gap-5 md:flex-row flex-col py-10">
           <div className="w-full md:w-[40%] flex items-center justify-center mb-8 md:mb-0 ">
          <Image
          width={200}
          height={200}
            src="/images/service2.jpg"
            alt="Your Alt Text"
            className="w-full md:h-auto h-50 object-cover" />
        </div>
          <div className="md:w-[60%]">
            <h1 className="text-[#33accc] text-xl">Corporate Responsibility</h1>
            <p className="leading-loose text-[#999]">
              We are developing responsible initiatives and efforts across the
              globe, at our sites and with our people. Our aim is to serve the
              communities where we operate. Our group-wide values and our
              policies, which build on international standards and directives,
              are designed to guide, influence and govern our activities. The
              company supports numerous community initiatives and charities from
              sponsoring the Manulife Bike & Hike for Heart and printing the
              directory for the Waterloo Arts Council to supporting the St.
              Mary's Hospital drive to raise funds for digital mammography. It
              embraces causes revolving around health issues such as heart
              ailments and cancer.
            </p>
          </div>
        </div>

        <div className="flex gap-5 md:flex-row flex-col py-10">
          <div className="md:w-[60%]">
            <h1 className="text-[#33accc] text-xl">Quality Customer Service is what we offer</h1>
            <p className="leading-loose text-[#999]">
              Our highly trained customer service professionals ensure that
              every client is thoroughly satisfied. By providing customized
              solutions to all your logistics needs, you can sit back and relax.
              we’ve got you covered!. We are well equipped and positioned to
              offer customs clearing services for export and import. This
              includes all forms of documentation. We also arrange for museum
              certificates and artifact for exports.
            </p>
          </div>
           <div className="w-full md:w-[40%] flex items-center justify-center mb-8 md:mb-0 ">
          <Image
          width={200}
          height={200}
            src="/images/service3.jpg"
            alt="Your Alt Text"
            className="w-full md:h-auto h-50 object-cover" />
        </div>
        </div>
      </section>
    </div>
  );
}
