import { heroBg, heroDarkener, logos } from '@/assets'
import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'
// import DownloadBtn from './DownloadBtn'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='w-screen h-screen relative'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image src={heroBg} alt='hero-bg' layout='fill' objectFit='cover' />
        <Image src={heroDarkener} layout='fill' alt='hero-darkener'  objectFit='cover' />
      </div>

      {/* Hero Content */}
      {/* Countdown */}
      <div className='flex flex-col pt-10 relative w-full h-full items-center gap-28'>
        <CountDown />
        {/* Title */}
        <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 1.5 }} className="text-center gap-14 z-10 bg-[#0000005f] flex flex-col items-center relative bg-opacity-50 backdrop-blur-lg px-5 py-10 rounded-xl">
          <Image src={logos} className='h-[75px] absolute -top-[38px]' alt="logos" />
          <div className='flex flex-col items-center'>
            <h1 className="text-[#56c79c] text-xl lg:text-2xl font-extralight">LES JOURNÉES SCIENTIFIQUES DE LA<br/></h1>
            <h1 className="text-white text-3xl lg:text-6xl font-normal bg-clip-text text-transparent bg-gradient-to-tr from-white to-[#71757E] drop-shadow-2xl">GASTROENTEROLOGIE</h1>
          </div>
          {/* <div>
            <DownloadBtn />
          </div> */}
        </motion.div>
      </div>

      {/* Bottom blur line */}
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-[#121212] to-transparent" />
      {/* Top blur rounded fx */}
      <div className="absolute top-[-50px] left-[-50px] rounded-full shrink-0 bg-[#56c79c] opacity-[0.5] mix-blend-lighten blur-footer size-96" />

    </div>
  )
}

export default Hero