import { countdownBg, heroBg, heroDarkener } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen h-screen relative'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image src={heroBg} alt='hero-bg' layout='fill' objectFit='cover' />
        <Image src={heroDarkener} layout='fill' alt='hero-darkener'  objectFit='cover' />
      </div>

      {/* Hero Content */}
      {/* Countdown */}
      <div className='flex flex-col pt-16 relative w-full h-full items-center gap-28'>
        <Image src={countdownBg} alt='countdown-bg' />
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#feba08] text-[40px] font-bold leading-[41.48px]">LES JOURNÉES SCIENTIFIQUES DE LA<br/></h1>
          <h1 className="text-white text-[64px] font-bold leading-[66.37px]">GASTROENTEROLOGIE</h1>
        </div>
      </div>

      {/* Bottom blur line */}
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-[#121212] to-transparent" />
    </div>
  )
}

export default Hero