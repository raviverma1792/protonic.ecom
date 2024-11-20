import React, { useState } from 'react'

function Proinfo() {
    const [show,setShow]= useState(false)
    const [show1,setShow1]= useState(false)
    const [show2,setShow2]= useState(false)
    const [show3,setShow3]= useState(false)
  return (
      <div className='w-full  py-5 items-center flex justify-center flex-col pl-6 pr-6  '>
        <label className='font-semibold  lg:fle lg:flex-row tracking-widest w-full lg:w-[93%]  py-3 '>SOUNDBARS</label>
        
        <div className='w-full  gap-2 lg:flex lg:flex-row   lg:justify-center '>
        
        
          <div className=' hidden bg-[#f3f3f3] lg:w-[20%] lg:h-[50vh]  lg:flex lg:flex-col  gap-1 pt-3 pl-3 pr-3 '>
            <label>FILTER:</label>
            <div className='w-[100%] h-[2px] bg-[#8080808a]'></div>

            <div className='flex items-center justify-between'>
                <div> Short by</div>
                <div onClick={()=> setShow(!show)}><i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
            </div>
            
            <div style={{height:show === true ? "100px" : "0px",overflow:"hidden"}}  className='bg-red-400 flex flex-col'>
                 <label ><input type='checkbox'></input> Featured</label>
                 <label ><input type='checkbox'></input> Best selling</label>
                 <label ><input type='checkbox'></input> Alphabetically, A-Z</label>
                 <label ><input type='checkbox'></input> Alphabetically, Z-A</label>
                 <label ><input type='checkbox'></input> Price, low to high</label>
                 <label ><input type='checkbox'></input> Price, high to low</label>
                 <label ><input type='checkbox'></input> Date, old to new</label>
             
            </div>
            <div className='w-[100%] h-[2px] bg-[#8080808a]'></div>
            <div className='flex items-center justify-between'>
                <div>Availability</div>
                <div onClick={()=> setShow1(!show1)}><i class="fa fa-angle-down" aria-hidden="true"></i></div>
            </div>
            <div style={{height:show1===true?"100px":"0px",overflow:"hidden"}} className='flex flex-col'>

                   <label ><input type='checkbox'></input> Featured</label>
                 <label ><input type='checkbox'></input> Best selling</label>
                 <label ><input type='checkbox'></input> Alphabetically, A-Z</label>
                 <label ><input type='checkbox'></input> Alphabetically, Z-A</label>
                 <label ><input type='checkbox'></input> Price, low to high</label>
                 <label ><input type='checkbox'></input> Price, high to low</label>
                 <label ><input type='checkbox'></input> Date, old to new</label>
            </div>

            <div className='w-[100%] h-[2px] bg-[#8080808a]'></div>
            <div className='flex items-center justify-between'>
                <div>Price</div>
                <div onClick={()=> setShow2(!show2)}><i class="fa fa-angle-down" aria-hidden="true"></i></div>
            </div>
            <div style={{height:show2===true?"100px":"0px",overflow:"hidden"}} className='flex flex-col'>

                   <label ><input type='checkbox'></input> Price</label>
                 <label ><input type='checkbox'></input> Best selling</label>
                 <label ><input type='checkbox'></input> Alphabetically, A-Z</label>
                 <label ><input type='checkbox'></input> Alphabetically, Z-A</label>
                 <label ><input type='checkbox'></input> Price, low to high</label>
                 <label ><input type='checkbox'></input> Price, high to low</label>
                 <label ><input type='checkbox'></input> Date, old to new</label>
            </div>

            <div className='w-[100%] h-[2px] bg-[#8080808a]'></div>
            <div className='flex items-center justify-between'>
                <div>Color</div>
                <div onClick={()=> setShow3(!show3)}><i class="fa fa-angle-down" aria-hidden="true"></i></div>
            </div>
            <div style={{height:show3===true?"100px":"0px",overflow:"hidden"}} className='flex flex-col'>

                   <label ><input type='checkbox'></input> Featured</label>
                 <label ><input type='checkbox'></input> Best selling</label>
                 <label ><input type='checkbox'></input> Alphabetically, A-Z</label>
                 <label ><input type='checkbox'></input> Alphabetically, Z-A</label>
                 <label ><input type='checkbox'></input> Price, low to high</label>
                 <label ><input type='checkbox'></input> Price, high to low</label>
                 <label ><input type='checkbox'></input> Date, old to new</label>
            </div>
            

            
            
        </div>


    <div className='lg:flex lg:w-[70%] w-[100%] gap-5  items-center lg:flex-col pb-4'>
        
        <div className='w-[100%] lg:justify-center lg:items-center  lg:flex gap-4 '>

        <div className=' gap-5 lg:gap-0 border border-gray  pt-4 pb-4 lg:px-3 lg:pb-3 lg:flex  flex flex-row lg:flex-col lg:items-center w-[100%]  lg:w-[30%] '>
                        <div className='relative  w-[80%] lg:w-full lg:h-[35vh] '>
                            <img className='lg:h-[35vh] lg:w-[100%] w' src='https://www.portronics.com/cdn/shop/files/Artboard1_346bbd8a-f6f2-4523-8fcf-b1fdc0f28c7a.jpg?v=1717501590&width=533'></img>

                            <div className='absolute lg:left-4 bottom-[-6px] flex items-center justify-center lg:rounded-xl h-[2.5vh] text-[10px] text-[white] w-full lg:w-[80%] bg-[#eb092b]'>80W HD Sound</div>
                        </div>
                        <div className='w-[100%] gap-2 lg:gap-2 justify-center flex flex-col  lg:pt-5'>
                            <label className=' text-[14px] font-bold font-[black]'>HARMONY </label>
                            <label className=' text-[10px]'>Bass Boost Technology | Bass/Treble </label>
                            <label className=' text-[15px] font-bold'>₹8,499 </label>
                            <label className=' text-[10px]'>or Rs. 2833/Month

                                Buy on EMI</label>
                            <button className='  py-1  text-[11px]  rounded-sm w-[100%] text-[white]   bg-[#1c1c1c]'>COMMING SOON</button>
                        </div>

        </div>

        <div className='gap-5 lg:gap-0 border border-gray  pt-4 pb-4 lg:px-3 lg:pb-3 lg:flex  flex flex-row lg:flex-col lg:items-center w-[100%]  lg:w-[30%]  '>
                        <div className='relative  w-[80%] lg:w-full lg:h-[35vh]  '>
                            <img className='lg:h-[35vh] lg:w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_cf9a3ea1-0fbd-409c-ac01-e218c3974ce5.jpg?v=1714817234&width=533'></img>

                            <div className='absolute lg:left-4 bottom-[-6px] flex items-center justify-center lg:rounded-xl h-[2.5vh] text-[10px] text-[white] w-full lg:w-[80%] bg-[#eb092b]'>Wireless & Powerful Sound</div>
                        </div>
                        <div className='w-[100%] gap-2 lg:gap-2 justify-center flex flex-col  lg:pt-5'>
                            <label className=' text-[14px] font-bold font-[black]'>DECIBEL 24 </label>
                            <label className=' text-[10px]'>Bluetooth 5.3 | wireless 10W HD </label>
                            <label className=' text-[15px] font-bold'>₹999 </label>
                            <label className=' text-[10px]'>or Rs. 333/Month

                                Buy on EMI</label>
                            <button className='  py-1 text-[11px]  rounded-sm w-[100%] text-[white]   bg-[#1c1c1c]'>COMMING SOON</button>
                        </div>

        </div>

        <div className='gap-5 lg:gap-0 border border-gray  pt-4 pb-4 lg:px-3 lg:pb-3 lg:flex  flex flex-row lg:flex-col lg:items-center w-[100%]  lg:w-[30%] '>
                        <div className='relative  w-[80%] lg:w-full lg:h-[35vh] '>
                            <img className='h-[20vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_c48e07a1-d9e6-4ce3-85d0-951a0a7c83a1.jpg?v=1709807194&width=533'></img>

                            <div className='absolute lg:left-4 bottom-[-6px] flex items-center justify-center lg:rounded-xl h-[2.5vh] text-[10px] text-[white] w-full lg:w-[80%] bg-[#eb092b]'>80W HD Soundbar</div>
                        </div>
                        <div className='w-[100%] gap-2 lg:gap-2 justify-center flex flex-col  lg:pt-5'>
                            <label className=' text-[14px] font-bold font-[black]'>Pure Sound Pro X </label>
                            <label className=' text-[10px]'>Wired Subwoofer for Deep Bass | 2.1 </label>
                            <label className=' text-[15px] font-bold'>₹4,699
Regular price
 </label>
                            <label className=' text-[10px]'>or Rs. 1566/Month
                            </label>
                            <button className='  py-1 text-[11px]  rounded-sm w-[100%] text-[white]   bg-[#1c1c1c]'>ADD TO CART</button>
                        </div>

        </div>



        
        
        </div>
       
        <div className='w-[100%] lg:justify-center lg:items-center  lg:flex gap-4 '>

<div className=' gap-5 lg:gap-0 border border-gray  pt-4 pb-4 lg:px-3 lg:pb-3 lg:flex  flex flex-row lg:flex-col lg:items-center w-[100%]  lg:w-[30%] '>
                <div className='relative  w-[80%] lg:w-full lg:h-[35vh] '>
                    <img className='lg:h-[35vh] lg:w-[100%] w' src='https://www.portronics.com/cdn/shop/files/Artboard1_346bbd8a-f6f2-4523-8fcf-b1fdc0f28c7a.jpg?v=1717501590&width=533'></img>

                    <div className='absolute lg:left-4 bottom-[-6px] flex items-center justify-center lg:rounded-xl h-[2.5vh] text-[10px] text-[white] w-full lg:w-[80%] bg-[#eb092b]'>80W HD Sound</div>
                </div>
                <div className='w-[100%] gap-2 lg:gap-2 justify-center flex flex-col  lg:pt-5'>
                    <label className=' text-[14px] font-bold font-[black]'>HARMONY </label>
                    <label className=' text-[10px]'>Bass Boost Technology | Bass/Treble </label>
                    <label className=' text-[15px] font-bold'>₹8,499 </label>
                    <label className=' text-[10px]'>or Rs. 2833/Month

                        Buy on EMI</label>
                    <button className='  py-1  text-[11px]  rounded-sm w-[100%] text-[white]   bg-[#1c1c1c]'>COMMING SOON</button>
                </div>

</div>

<div className='gap-5 lg:gap-0 border border-gray  pt-4 pb-4 lg:px-3 lg:pb-3 lg:flex  flex flex-row lg:flex-col lg:items-center w-[100%]  lg:w-[30%]  '>
                <div className='relative  w-[80%] lg:w-full lg:h-[35vh]  '>
                    <img className='lg:h-[35vh] lg:w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_cf9a3ea1-0fbd-409c-ac01-e218c3974ce5.jpg?v=1714817234&width=533'></img>

                    <div className='absolute lg:left-4 bottom-[-6px] flex items-center justify-center lg:rounded-xl h-[2.5vh] text-[10px] text-[white] w-full lg:w-[80%] bg-[#eb092b]'>Wireless & Powerful Sound</div>
                </div>
                <div className='w-[100%] gap-2 lg:gap-2 justify-center flex flex-col  lg:pt-5'>
                    <label className=' text-[14px] font-bold font-[black]'>DECIBEL 24 </label>
                    <label className=' text-[10px]'>Bluetooth 5.3 | wireless 10W HD </label>
                    <label className=' text-[15px] font-bold'>₹999 </label>
                    <label className=' text-[10px]'>or Rs. 333/Month

                        Buy on EMI</label>
                    <button className='  py-1 text-[11px]  rounded-sm w-[100%] text-[white]   bg-[#1c1c1c]'>COMMING SOON</button>
                </div>

</div>

<div className='gap-5 lg:gap-0 border border-gray  pt-4 pb-4 lg:px-3 lg:pb-3 lg:flex  flex flex-row lg:flex-col lg:items-center w-[100%]  lg:w-[30%] '>
                <div className='relative  w-[80%] lg:w-full lg:h-[35vh] '>
                    <img className='h-[20vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_c48e07a1-d9e6-4ce3-85d0-951a0a7c83a1.jpg?v=1709807194&width=533'></img>

                    <div className='absolute lg:left-4 bottom-[-6px] flex items-center justify-center lg:rounded-xl h-[2.5vh] text-[10px] text-[white] w-full lg:w-[80%] bg-[#eb092b]'>80W HD Soundbar</div>
                </div>
                <div className='w-[100%] gap-2 lg:gap-2 justify-center flex flex-col  lg:pt-5'>
                    <label className=' text-[14px] font-bold font-[black]'>Pure Sound Pro X </label>
                    <label className=' text-[10px]'>Wired Subwoofer for Deep Bass | 2.1 </label>
                    <label className=' text-[15px] font-bold'>₹4,699
Regular price
</label>
                    <label className=' text-[10px]'>or Rs. 1566/Month
                    </label>
                    <button className='  py-1 text-[11px]  rounded-sm w-[100%] text-[white]   bg-[#1c1c1c]'>ADD TO CART</button>
                </div>

</div>





        </div>


        <div className='w-[100%] lg:justify-center lg:items-center  lg:flex gap-4 '>

<div className=' gap-5 lg:gap-0 border border-gray  pt-4 pb-4 lg:px-3 lg:pb-3 lg:flex  flex flex-row lg:flex-col lg:items-center w-[100%]  lg:w-[30%] '>
                <div className='relative  w-[80%] lg:w-full lg:h-[35vh] '>
                    <img className='lg:h-[35vh] lg:w-[100%] w' src='https://www.portronics.com/cdn/shop/files/Artboard1_346bbd8a-f6f2-4523-8fcf-b1fdc0f28c7a.jpg?v=1717501590&width=533'></img>

                    <div className='absolute lg:left-4 bottom-[-6px] flex items-center justify-center lg:rounded-xl h-[2.5vh] text-[10px] text-[white] w-full lg:w-[80%] bg-[#eb092b]'>80W HD Sound</div>
                </div>
                <div className='w-[100%] gap-2 lg:gap-2 justify-center flex flex-col  lg:pt-5'>
                    <label className=' text-[14px] font-bold font-[black]'>HARMONY </label>
                    <label className=' text-[10px]'>Bass Boost Technology | Bass/Treble </label>
                    <label className=' text-[15px] font-bold'>₹8,499 </label>
                    <label className=' text-[10px]'>or Rs. 2833/Month

                        Buy on EMI</label>
                    <button className='  py-1  text-[11px]  rounded-sm w-[100%] text-[white]   bg-[#1c1c1c]'>COMMING SOON</button>
                </div>

</div>

<div className='gap-5 lg:gap-0 border border-gray  pt-4 pb-4 lg:px-3 lg:pb-3 lg:flex  flex flex-row lg:flex-col lg:items-center w-[100%]  lg:w-[30%]  '>
                <div className='relative  w-[80%] lg:w-full lg:h-[35vh]  '>
                    <img className='lg:h-[35vh] lg:w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_cf9a3ea1-0fbd-409c-ac01-e218c3974ce5.jpg?v=1714817234&width=533'></img>

                    <div className='absolute lg:left-4 bottom-[-6px] flex items-center justify-center lg:rounded-xl h-[2.5vh] text-[10px] text-[white] w-full lg:w-[80%] bg-[#eb092b]'>Wireless & Powerful Sound</div>
                </div>
                <div className='w-[100%] gap-2 lg:gap-2 justify-center flex flex-col  lg:pt-5'>
                    <label className=' text-[14px] font-bold font-[black]'>DECIBEL 24 </label>
                    <label className=' text-[10px]'>Bluetooth 5.3 | wireless 10W HD </label>
                    <label className=' text-[15px] font-bold'>₹999 </label>
                    <label className=' text-[10px]'>or Rs. 333/Month

                        Buy on EMI</label>
                    <button className='  py-1 text-[11px]  rounded-sm w-[100%] text-[white]   bg-[#1c1c1c]'>COMMING SOON</button>
                </div>

</div>

<div className='gap-5 lg:gap-0 border border-gray  pt-4 pb-4 lg:px-3 lg:pb-3 lg:flex  flex flex-row lg:flex-col lg:items-center w-[100%]  lg:w-[30%] '>
                <div className='relative  w-[80%] lg:w-full lg:h-[35vh] '>
                    <img className='h-[20vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_c48e07a1-d9e6-4ce3-85d0-951a0a7c83a1.jpg?v=1709807194&width=533'></img>

                    <div className='absolute lg:left-4 bottom-[-6px] flex items-center justify-center lg:rounded-xl h-[2.5vh] text-[10px] text-[white] w-full lg:w-[80%] bg-[#eb092b]'>80W HD Soundbar</div>
                </div>
                <div className='w-[100%] gap-2 lg:gap-2 justify-center flex flex-col  lg:pt-5'>
                    <label className=' text-[14px] font-bold font-[black]'>Pure Sound Pro X </label>
                    <label className=' text-[10px]'>Wired Subwoofer for Deep Bass | 2.1 </label>
                    <label className=' text-[15px] font-bold'>₹4,699
Regular price
</label>
                    <label className=' text-[10px]'>or Rs. 1566/Month
                    </label>
                    <button className='  py-1 text-[11px]  rounded-sm w-[100%] text-[white]   bg-[#1c1c1c]'>ADD TO CART</button>
                </div>

</div>





        </div>
        

        </div>   
        </div>
    </div>
  )
}

export default Proinfo