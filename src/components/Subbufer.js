import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
 
function Subbufer() {
    const[value, setValue]=useState(0)
    const Navigate = useNavigate()
    const [move,setMove]=useState(0)
     

  return (
    <div className='pb-10'>
        <div className='  lg:w-full lg:flex lg:gap-5  lg:h-[80vh] items-center justify-center lg:pl-4 pl-3 pr-3 ' >
        
            <div className='images cursor-pointer gap-1 hidden lg:flex lg:flex-col'>
                
                <img onClick={()=> move>0 ? setMove(0):null} className='lg:w-[60px] lg:h-[57px]       ' src='https://www.portronics.com/cdn/shop/files/Image1_d0b6b03c-9fde-4ad9-97cd-9ca58da4e198_1080x.png?v=1726742736'></img>
                <img onClick={()=> move<79 ? setMove(14.80):null} className='lg:w-[60px] lg:h-[57px]  ' src='https://www.portronics.com/cdn/shop/files/Image2_926ef783-2f4e-4437-9d35-fa5c2e9464aa_1080x.png?v=1726742736'></img>
                <img onClick={()=> move<79 ? setMove(44.6):null}  className='lg:w-[60px] lg:h-[57px]  ' src='https://www.portronics.com/cdn/shop/files/Image4_d7645a4c-712e-4f23-bc9e-7ba3439797bc_1080x.png?v=1726742737'></img>
                <img onClick={()=> move<79 ? setMove(59.4):null} className='lg:w-[60px] lg:h-[57px]   ' src='https://www.portronics.com/cdn/shop/files/Image5_8172ee6b-20ad-4769-8fc4-bea7006fd4cc_1080x.png?v=1726742737'></img>
                <img onClick={()=> move<79 ? setMove(74.2):null} className='lg:w-[60px] lg:h-[57px]   ' src='https://www.portronics.com/cdn/shop/files/Image6_dd745e4a-246f-4a20-8e48-032ec2b3a5b4_1080x.png?v=1726742737'></img>
                <img onClick={()=> move<79 ? setMove(89):null} className='lg:w-[60px] lg:h-[57px]     ' src='https://www.portronics.com/cdn/shop/files/Image7_94ea0991-66f8-4172-bcb7-6f993b44f850_1080x.png?v=1726742737'></img>
            
            </div>
            
            <div className='lg:w-[50%] lg:h-[70vh] '>
            <div className=' flex flex-col lg:hidden'>
            <label className='text-[20px] font-bold '>Mopcop Pro</label>
            <label className='text-[14px] '>10 kPa Suction | Multiple Nozzles | Dual Functionality | For Dry Vacuum</label>
            </div>
            <div className='  bg-black w-[80%] h-[65vh]  overflow-hidden '>
            
            <div style={{transform : `translateX(-${move}%)`}} className='  gap-3 w-[700%] lg:flex   '>
            <img className=' w-[15%] h-[65vh] ' src='https://www.portronics.com/cdn/shop/files/Image1_d0b6b03c-9fde-4ad9-97cd-9ca58da4e198_1080x.png?v=1726742736'></img>
            <img className=' w-[15%] h-[65vh] ' src='https://www.portronics.com/cdn/shop/files/Image2_926ef783-2f4e-4437-9d35-fa5c2e9464aa_1080x.png?v=1726742736'></img>
            <img className=' w-[15%] h-[65vh] ' src='https://www.portronics.com/cdn/shop/files/Image2_926ef783-2f4e-4437-9d35-fa5c2e9464aa_1080x.png?v=1726742736'></img>
            <img className=' w-[15%] h-[65vh] ' src='https://www.portronics.com/cdn/shop/files/Image4_d7645a4c-712e-4f23-bc9e-7ba3439797bc_1080x.png?v=1726742737'></img>
            <img className=' w-[15%] h-[65vh] ' src='https://www.portronics.com/cdn/shop/files/Image5_8172ee6b-20ad-4769-8fc4-bea7006fd4cc_1080x.png?v=1726742737'></img>
            <img className=' w-[15%] h-[65vh] ' src='https://www.portronics.com/cdn/shop/files/Image6_dd745e4a-246f-4a20-8e48-032ec2b3a5b4_1080x.png?v=1726742737'></img>
            <img className=' w-[15%] h-[65vh] ' src='https://www.portronics.com/cdn/shop/files/Image7_94ea0991-66f8-4172-bcb7-6f993b44f850_1080x.png?v=1726742737'></img>
            </div>
            </div>
            </div>

            <div className='lg:flex-col  lg:h-[60vh]   lg:w-[30%] lg:flex lg:gap-2 flex flex-col gap-2 pl-2 pr-2  '>
                <label className=' hidden lg:flex lg:text-[32px] font-bold '>Mopcop Pro</label>
                <label className=' hidden lg:flex lg:text-[12px] '>10 kPa Suction | Multiple Nozzles | Dual Functionality | For Dry Vacuum</label>

                <div className='lg:flex items-center gap-3 '>
                    <div className='lg:flex flex gap-1'>
                <i class="text-[#f2c82e] fa fa-star-o" aria-hidden="true"></i>
                <i class="text-[#f2c82e] fa fa-star-o" aria-hidden="true"></i>
                <i class="text-[#f2c82e] fa fa-star-o" aria-hid    den="true"></i>
                <i class="text-[#f2c82e] fa fa-star-o" aria-hidden="true"></i>
                <i class="text-[#f2c82e] fa fa-star-o" aria-hidden="true"></i>
                </div>
                <label className='text-[gray]'>Write Review</label>
                </div>
                <label className='font-bold '>₹1,899</label>
                <label className='text-[gray]'>Tax included.</label>
                <div className='flex gap-2 text-[gray]'>
                    <label>Quantity</label>
                    <i onClick={()=> setValue(value - 1)} class=" dec text-[30px] cursor-pointer fa fa-minus-square-o" aria-hidden="true"></i>
                    {value}
                    <i onClick={()=> setValue(value + 1)} class=" inc text-[30px] cursor-pointer fa fa-plus-square-o" aria-hidden="true"></i>
                </div>
                <div className='lg:flex  flex gap-3  '>
                <button onClick={()=> Navigate('/Addtocatr')} className=' relative-fixed bg-[#eb0027] rounded-lg text-[white] w-[50%] h-[6vh]'>Add to cart</button>
                <button className=' relative-fixed bg-[#121212] rounded-lg text-[white] w-[50%] h-[6vh]'>Buy it now</button>
                </div>
                <div className=' border-[2px] pl-2 py-2 rounded-md lg:flex lg:flex-col black'>

                    <label className='text-[12px]'>Add to cart
or 3 Monthly Payments of
₹633
Portronics Pay Later
0% EMI on Powered by
</label>
                 </div>
                 <label className='font-bold' >OFFER AVAILABALE</label>
                 <div className=' border-[2px] pl-2 py-2 rounded-md lg:flex lg:flex-col black'>
                    <label className='font-bold text-[red] '>Hello! Prepaid Buyer</label>
                    <label className='text-[12px]'>extra 5% discount* on checkout outo applied for you</label>
                 </div>
            </div>
        </div>
        
    </div>
  )
}

export default Subbufer