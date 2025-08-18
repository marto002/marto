import React from 'react'
import { FaBraille, FaTrophy } from 'react-icons/fa'

export default function About() {
  return (
    <div>
        <section className="bg-white justify-center text-center items-center px-25 h-[25rem] flex flex-col gap-5">
         
          <div className="bg-[#33accc] justify-center items-center p-5 rounded-full w-15 h-15"> <FaBraille  color="#fff" size={20}/></div>
         
         <h1 className="text-[#000] text-5xl">About Our Business</h1>
        
      <p className="text-[#999]">Aviary Courier International Services is a leading company in express industry. Established in 2001 with its cutting edge technology, dedicated infrastructure and world class services it is a one stop service provider and has been playing an important role in the supply chain of a number of industries. As the supply chain gets increasingly integrated in to the productivity of business, Aviary Courier Worldwide Express with its sphere of influence expertise and unique Air/Surface infrastructure propped up has emerged as a major distribution consultant to some of the biggest brands across the industries. Speed and reliability are the key value drives at Aviary Courier International Services. To ensure these the Aviary Courier International Services uses state-of-the-art-technology from collection to delivery.
         Time overwhelming paper work is minimized and consignment can be traced & tracked and delivery confirmed online.`</p>
        </section>
        <section>
            <div className="bg-[#33accc] justify-center items-center p-5 rounded-full w-15 h-15"> <FaTrophy color="#fff" size={20}/></div>
                  <h1 className="text-[#000] text-5xl">Our Team</h1>
       <p className="text-[#999]">These are the few people that made Aviary Courier International Services a success.</p>
        </section>
    </div>
  )
}
