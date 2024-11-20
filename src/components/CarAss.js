import React from 'react'
import { useNavigate } from 'react-router-dom'

function CarAss() {
    const Navigate=useNavigate()
  return (
    <div className=' overflow-scroll lg:overflow-visible application flex items-center lg:w-[100%] py-8 '>
    <div className='flex items-center flex-col justify-center gap-4 w-[100%]'>
     <label className='  font-bold text-[24px] text-start w-[84%]'>Car Accessories</label>
     <div className='component hidden lg:flex justify-center items-center w-[90%] gap-10'>
         
         <div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image1_ad5e3bfb-947d-4d83-ba22-299a416d11cc.jpg?v=1715253059&width=533'></img>

                 <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Bass Control Roller</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[14px] font-bold font-[black]'>Auto Tune</label>
                 <label className=' text-[10px]'>Bluetooth 5.3 | Multi-colour Lighting </label>
                 <label className=' text-[15px] font-bold'>₹999 </label>
                 <label className=' text-[10px]'>or Rs. 333/Month


Buy on EMI</label>
                 <button className='  py-1  font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>

         </div>
         <div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image1_2c044683-68a8-47f6-834c-66cfcf939b14.png?v=1715248582&width=533'></img>

                 <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Compact Size</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[14px] font-bold font-[black]'>Auto 21</label>
                 <label className=' text-[10px]'>Bluetooth 5.3 | Multi-function Button </label>
                 <label className=' text-[15px] font-bold'>₹799</label>
                 <label className=' text-[10px]'>or Rs. 266/Month


Buy on EMI </label>
                 <button className=' py-1 font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>
             

         </div>

         <div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 flex flex-col items-center com  w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image1_c7830e3e-0e9a-4de7-96e1-83b8d4839710.png?v=1713433808&width=533'></img>

                 <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>65 Watts Car Charger</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[14px] font-bold font-[black]'>Car Power 65</label>
                 <label className=' text-[10px]'>100W Type-C Cable | Dual Ports </label>
                 <label className=' text-[15px] font-bold'>₹1,599</label>
                 <label className=' text-[10px]'>or Rs. 533/Month

Buy on EMI </label>
                 <button className=' py-1  font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>
             

         </div>

         <div onClick={()=> Navigate('/Productinfo')} className='border border-gray px-3 pb-3 flex flex-col items-center     w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Vayu1200x12001.jpg?v=1686386838&width=533'></img>

                 <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Battery Powered Inflator</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[14px] font-bold font-[black]'>VAYU</label>
                 <label className=' text-[10px]'>4000 mAh Battery | 150 PSI Pressure</label>
                 <label className=' text-[15px] font-bold'>₹2,199</label>
                 <label className=' text-[10px]'>or Rs. 733/Month



Buy on EMI</label>
                 <button className='  py-1  font-[600] rounded-sm w-[90%] text-[white]  bg-[#1c1c1c]'>ADD TO CART</button>
             </div>
             

         </div>

     </div>


     <div className='  '>

     <div className='component w-[300%]  lg:hidden flex px-2 items-center gap-10'>
         
         <div className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image1_ad5e3bfb-947d-4d83-ba22-299a416d11cc.jpg?v=1715253059&width=533'></img>

                 <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Bass Control Roller</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[15px] font-bold font-[black]'>Auto Tune</label>
                 <label className=' text-[15px]'>Bluetooth 5.3 | Multi-colour Lighting </label>
                 <label className=' text-[20px] font-bold'>₹999 </label>
                 <label className=' text-[15px]'>or Rs. 333/Month


Buy on EMI</label>
                 <button className='  py-1  font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>

         </div>
         <div className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image1_2c044683-68a8-47f6-834c-66cfcf939b14.png?v=1715248582&width=533'></img>

                 <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Compact Size</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[15px] font-bold font-[black]'>Auto 21</label>
                 <label className=' text-[15px]'>Bluetooth 5.3 | Multi-function Button </label>
                 <label className=' text-[20px] font-bold'>₹799</label>
                 <label className=' text-[15px]'>or Rs. 266/Month


Buy on EMI </label>
                 <button className=' py-1 font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>
             

         </div>

         <div className=' border border-gray px-3 pb-3 flex flex-col items-center com  w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image1_c7830e3e-0e9a-4de7-96e1-83b8d4839710.png?v=1713433808&width=533'></img>

                 <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>65 Watts Car Charger</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[15px] font-bold font-[black]'>Car Power 65</label>
                 <label className=' text-[15px]'>100W Type-C Cable | Dual Ports </label>
                 <label className=' text-[20px] font-bold'>₹1,599</label>
                 <label className=' text-[15px]'>or Rs. 533/Month

Buy on EMI </label>
                 <button className=' py-1  font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
             </div>
             

         </div>

         <div className='border border-gray px-3 pb-3 flex flex-col items-center     w-[20%] '>
             <div className='relative  h-[35vh] '>
                 <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Vayu1200x12001.jpg?v=1686386838&width=533'></img>

                 <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Battery Powered Inflator</div>
             </div>
             <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                 <label className=' text-[15px] font-bold font-[black]'>VAYU</label>
                 <label className=' text-[15px]'>4000 mAh Battery | 150 PSI Pressure</label>
                 <label className=' text-[20px] font-bold'>₹2,199</label>
                 <label className=' text-[15px]'>or Rs. 733/Month



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

export default CarAss