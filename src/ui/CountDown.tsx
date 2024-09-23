import React from 'react'
import RCountdown from 'react-countdown'
import { motion } from "framer-motion"


const Completionist = () => <span>You are good to go!</span>;

const CountDown = () => {
  const date = new Date("2024-10-06T00:00:00.000Z");
  return (
    <RCountdown date={date} renderer={({ days, hours, minutes, seconds}) =>
      <motion.div animate={{ transform: 'translateY(0%)' }} transition={{duration: 2}} className='-translate-y-500 grid grid-cols-2 gap-4 relative'>
        <div className='absolute z-30 w-full h-full flex items-center justify-center'>
          <div className='w-full md:w-[50vw] h-[2px] left-0 bg-gradient-to-r from-white to-transparent absolute' />
          <div className='w-[2px] h-[50vh] top-0 bg-gradient-to-b from-white to-transparent absolute' />
        </div>
        {[{label: 'jours', value: days}, {label: 'heures', value: hours}, {label: 'minutes', value: minutes}, {label: 'secondes', value: seconds}].map(({ label, value }, index) => 
          <motion.div animate={{opacity: 1}} transition={{duration: 2}} className='opacity-0 flex flex-col items-center' key={index}>
            <h1 className='text-countdown'>{value}</h1>
            <p>{label}</p>
          </motion.div>)
        }
      </motion.div>
    }>
      <Completionist />
    </RCountdown>
  )
}

export default CountDown