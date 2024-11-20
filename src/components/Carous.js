import React, { useState } from 'react'

function Carous() {
  const[move,setMove]=useState(0)
  return (

    <div className='lg:pt-10  pt-5  pl-3 pb-2  lg:pb-8 lg:flex-col lg:flex lg:justify-center lg:items-center lg:w-[100%] lg:gap-4 '>
        <label className='font-semibold text-[16px] lg:text-[24px] w-[80%]'>BLOG POSTS</label>
       
       
       <div className='  w-[90%] pl-4 lg:w-[80%] flex lg:flex overflow-hidden  '>
           
        <div style={{transform : `translateX(-${move}%)`}} className=' crousale w-[600%] lg:w-[600%] flex gap-4 lg:flex  '>
                <img className='w-[30%] lg:w-[32%] rounded-[2%]' src='https://www.portronics.com/cdn/shop/articles/how_to_choose_the_best_computer_accessories_for_maximum_efficiency.png?v=1726491993&width=533' ></img>
                <img className='w-[30%] lg:w-[32%] rounded-[2%]' src='https://www.portronics.com/cdn/shop/articles/how_to_avoid_common_mistakes_when_using_extension_boards.png?v=1726316938&width=533' ></img>
                <img className='w-[30%] lg:w-[32%] rounded-[2%]' src='https://www.portronics.com/cdn/shop/articles/how_to_choose_the_best_wireless_speaker_for_your_lifestyle.png?v=1725043968&width=533' ></img>
                <img className='w-[30%] lg:w-[32%] rounded-[2%]' src='https://www.portronics.com/cdn/shop/articles/why_bluetooth_headphones_are_the_best_choice_for_everyday_life.png?v=1724658955&width=533' ></img>
                <img className='w-[30%] lg:w-[32%] rounded-[2%]' src='https://www.portronics.com/cdn/shop/articles/Ultimate_Guide_To_The_Best_Mobile_Accessories_For_Your_Smartphone.png?v=1722333139&width=533' ></img>
                <img className='w-[30%] lg:w-[32%] rounded-[2%]' src='https://www.portronics.com/cdn/shop/articles/charge_on-the-go_unleash_the_power_of_new_car_charger_adapters.png?v=1721988974&width=533' ></img>
        </div>
        </div>
        <div className='flex lg:flex gap-2 w-full flex items-center justify-center lg:py-0 py-3'>
           <div onClick={()=> move>0 ? setMove(0):null} className=' cursor-pointer lg:flex flex bg-gray-500 rounded-2xl w-[30px] h-[3px] '></div> 
           <div onClick={()=> move<1 ? setMove(102):null} className=' cursor-pointer lg:flex flex bg-gray-500 rounded-2xl w-[30px] h-[3px] '></div> 
           </div>
     </div>
 
    )
}

export default Carous