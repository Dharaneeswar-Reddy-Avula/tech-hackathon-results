import React from 'react'
import { Card } from './card'
import { Hero } from './Hero'
export const Winners = () => {
  return (
    <div className='winners w-full md:p-[50px] border-none'>
     <div className="winners-cards-wrapper  w-full flex gap-[20px] justify-between items-center pb-[30px] rounded-lg flex-wrap ">
     <Hero/>
     <Card/>
     </div>

    </div>
  )
}
