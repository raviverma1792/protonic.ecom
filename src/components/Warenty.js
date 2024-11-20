import React from 'react'

function Warenty() {
  return (
    <div className=' pt-8 flex flex-col lg:flex lg:flex-col gap-5'>

 <div className='flex flex-col   lg:gap-10 gap-8 items-center   lg:flex lg:flex-col lg:items-center  '>
            <label className='font-bold'>OUR GURANTEES</label>
            <div className='lg:flex lg:gap-5 flex gap-4 pl-3 text-[14px] lg:items-center  lg:justify-evenly lg:w-[80%]   pr-3'>
            <div className='flex flex-col gap-3 lg:gap-3 items-center lg:flex lg:flex-col lg:items-center'>
                <img src='https://www.portronics.com/cdn/shop/files/days.svg?v=1702376805'></img>
            <label>7 Days Replacement</label>
            </div>
            <div className='lg:h-[70px] h-[70px]   w-[1px] bg-[#464545] lg:w-[1px]'></div>
            <div className='flex flex-col gap-3 lg:gap-3 items-center lg:flex lg:flex-col lg:items-center'>
                <img src='https://www.portronics.com/cdn/shop/files/secure.svg?v=1702376834'></img>
            <label>Secure Payments</label>
            </div>
            <div className='lg:h-[70px] h-[70px] w-[1px] bg-[#464545] lg:w-[1px]'></div>
            
            <div className='flex flex-col gap-3 lg:gap-3 items-center lg:flex lg:flex-col lg:items-center'>
                <img className='lg:w-[50px] w-[50px]' src='https://www.portronics.com/cdn/shop/files/1_Year_Warranty-04.png?v=1720512030'></img>
            <label className='' >1 Year Warranty</label>
            </div>
        </div>
        
    </div>

    {/* <div className='bg-black   gap-4 w-full h-[6vh] items-center justify-center flex lg:flex lg:justify-center lg:items-center lg:gap-6'>
        <div className=' cursor-pointer text-[white]'>Description</div>
        <div className=' cursor-pointer text-[white]'>More Information</div>
        <div className=' cursor-pointer text-[white]'>Specifications</div>
        <div className=' cursor-pointer text-[white]'>Reviews</div>

    </div> */}
    </div>
  )
}

export default Warenty