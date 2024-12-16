import React from 'react'
import { Card } from './card'
export const Winners = () => {
  return (
    <div className='winners w-full md:p-[50px]'>
     <div className="winners-cards-wrapper  w-full flex gap-[20px] justify-between items-center pb-[30px] rounded-lg flex-wrap">
     <Card/>
     </div>

    </div>
  )
}
