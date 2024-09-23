import React from 'react'
import RCountdown from 'react-countdown'


const Completionist = () => <span>You are good to go!</span>;

const CountDown = () => {
  const date = new Date("2024-10-06T00:00:00.000Z");
  return (
    <RCountdown date={date} renderer={({ days, hours, minutes, seconds}) =>
      <div className='grid grid-cols-2 gap-4 relative'>
        <div className='absolute w-full h-full flex items-center justify-center'>
          <div className='w-full md:w-[50vw] h-[2px] left-0 bg-gradient-to-r from-white to-transparent absolute' />
          <div className='w-[2px] h-[50vh] top-0 bg-gradient-to-b from-white to-transparent absolute' />
        </div>
        {[{label: 'jours', value: days}, {label: 'heures', value: hours}, {label: 'minutes', value: minutes}, {label: 'secondes', value: seconds}].map(({ label, value }, index) => 
          <div className='flex flex-col items-center' key={index}>
            <h1 className='text-countdown'>{value}</h1>
            <p>{label}</p>
          </div>)
        }
      </div>
    }>
      <Completionist />
    </RCountdown>
  )
}

export default CountDown