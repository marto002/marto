import { motion } from 'framer-motion'
import React from 'react'

export const Content = ({ text,text2,}: { text: string,text2:string }) => {
  return (
  
        <div className='justify-center font-nunito items-center flex flex-col text-white w-full'>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className='md:text-[65px] text-[40px]  font-normal'
          >
            {text}
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='md:text-[17px] text-[14px] font-normal max-w-[70rem]'
          >
            {text2}
          </motion.h2>

          

         
        </div>
      


      

  )
}
