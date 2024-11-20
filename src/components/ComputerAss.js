import React from 'react'
import { useNavigate } from 'react-router-dom'

function ComputerAss() {
    const Navigate=useNavigate()
  return (
    <div className='application flex lg:overflow-visible overflow-scroll items-center lg:w-[100%] py-8 '>
    <div className='flex items-center flex-col justify-center gap-4 w-[100%]'>
     <label className='  font-bold text-[24px] text-start w-[84%]'>Computer Accessories</label>
     <div className='component hidden lg:flex justify-center items-center w-[90%] gap-10'>
         
         <div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image_1_d3617493-d286-4625-852d-763cb62d33b2.jpg?v=1718795108&width=533'></img>

                 <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Smartphone Holder</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[14px] font-bold font-[black]'>Bubble Square</label>
                 <label className=' text-[10px]'>2.4 GHz & Bluetooth | 3-Device Pairing </label>
                 <label className=' text-[15px] font-bold'>₹849 </label>
                 <label className=' text-[10px]'>or Rs. 283/Month

Buy on EMI</label>
                 <button className='  py-1  font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>

         </div>
         <div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/1_6e260011-a28a-4117-80cd-37fb16fee119.jpg?v=1698306565&width=533'></img>

                 <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>4K UHD Support</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[14px] font-bold font-[black]'>Pico 12</label>
                 <label className=' text-[10px]'>Smart DLP Projector | Rechargeable </label>
                 <label className=' text-[15px] font-bold'>₹29,949</label>
                 <label className=' text-[10px]'>or Rs. 10000/Month

Buy on EMI </label>
                 <button className=' py-1 font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>
             

         </div>

         <div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 flex flex-col items-center com  w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/products/Mport13C1200x12001.jpg?v=1674799127&width=533'></img>

                 <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>13-in-1 Design</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[14px] font-bold font-[black]'>Mport 13C</label>
                 <label className=' text-[10px]'>HDMI | Ethernet </label>
                 <label className=' text-[15px] font-bold'>₹3,999</label>
                 <label className=' text-[10px]'>or Rs. 1333/Month

Buy on EMI </label>
                 <button className=' py-1  font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>
             

         </div>

         <div onClick={()=> Navigate('/Productinfo')} className='border border-gray px-3 pb-3 flex flex-col items-center     w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/products/Key5Combo1200x12008.jpg?v=1655297383&width=533'></img>

                 <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Full-Layout Keybord</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[14px] font-bold font-[black]'>Key5 Combo</label>
                 <label className=' text-[10px]'>42.4 GHz Wireless | Adjustable DPI </label>
                 <label className=' text-[15px] font-bold'>₹999</label>
                 <label className=' text-[10px]'>or Rs. 333/Month


Buy on EMI</label>
                 <button className='  py-1  font-[600] rounded-sm w-[90%] text-[white]  bg-[#1c1c1c]'>ADD TO CART</button>
             </div>
             

         </div>

     </div>

     <div className='  '>

     <div className='component w-[300%]  lg:hidden flex px-2 items-center gap-10'>
         
         <div className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image_1_d3617493-d286-4625-852d-763cb62d33b2.jpg?v=1718795108&width=533'></img>

                 <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Smartphone Holder</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[15px] font-bold font-[black]'>Bubble Square</label>
                 <label className=' text-[15px]'>2.4 GHz & Bluetooth | 3-Device Pairing </label>
                 <label className=' text-[20px] font-bold'>₹849 </label>
                 <label className=' text-[15px]'>or Rs. 283/Month

Buy on EMI</label>
                 <button className='  py-1   rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>

         </div>
         <div className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/1_6e260011-a28a-4117-80cd-37fb16fee119.jpg?v=1698306565&width=533'></img>

                 <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>4K UHD Support</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[15px] font-bold font-[black]'>Pico 12</label>
                 <label className=' text-[15px]'>Smart DLP Projector | Rechargeable </label>
                 <label className=' text-[20px] font-bold'>₹29,949</label>
                 <label className=' text-[15px]'>or Rs. 10000/Month

Buy on EMI </label>
                 <button className=' py-1 font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>
             

         </div>

         <div className=' border border-gray px-3 pb-3 flex flex-col items-center com  w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/products/Mport13C1200x12001.jpg?v=1674799127&width=533'></img>

                 <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>13-in-1 Design</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[15px] font-bold font-[black]'>Mport 13C</label>
                 <label className=' text-[15px]'>HDMI | Ethernet </label>
                 <label className=' text-[20px] font-bold'>₹3,999</label>
                 <label className=' text-[15px]'>or Rs. 1333/Month

Buy on EMI </label>
                 <button className=' py-1  font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>
             

         </div>

         <div className='border border-gray px-3 pb-3 flex flex-col items-center     w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/products/Key5Combo1200x12008.jpg?v=1655297383&width=533'></img>

                 <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Full-Layout Keybord</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[15px] font-bold font-[black]'>Key5 Combo</label>
                 <label className=' text-[15px]'>42.4 GHz Wireless | Adjustable DPI </label>
                 <label className=' text-[20px] font-bold'>₹999</label>
                 <label className=' text-[15px]'>or Rs. 333/Month


Buy on EMI</label>
                 <button className='  py-1  font-[600] rounded-sm w-[90%] text-[white]  bg-[#1c1c1c]'>ADD TO CART</button>
             </div>
             

         </div>

     </div>
         </div>

             </div>
 </div>

 
    
  )
}

export default ComputerAss
