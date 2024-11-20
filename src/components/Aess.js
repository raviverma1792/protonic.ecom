import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Aess() {
    const Navigate = useNavigate()
  return (
    <div className='application lg:overflow-visible overflow-scroll lg:flex lg:items-center lg:w-[100%] '>
       <div className='lg:flex lg:items-center lg:flex-col lg:justify-center lg:gap-4 lg:w-[100%]'>
        <label className='font-bold text-[24px] text-start lg:w-[84%] '>NEW LAUNCHES</label>
        <div className='component  hidden lg:flex lg:justify-center lg:items-center lg:w-[90%] lg:gap-10'>
           
            

<div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 lg:flex lg:flex-col lg:items-center   lg:w-[20%] '>
                <div className='relative  lg:h-[35vh] '>
                    <img className='lg:h-[35vh] lg:w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_ef03c2d7-69f7-4da6-802d-621b10f85c50.jpg?v=1726138038&width=533'></img>

                    <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Long playtime</div>
                </div>
                <div className='lg:w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                    <label className=' lg:text-[14px] font-bold font-[black]'>Harmonic Twins</label>
                    <label className=' lg:text-[10px]'>Ergonomic Light Design| Game/Music</label>
                    <label className=' lg:text-[15px] font-bold'>₹799</label>
                    <label className=' lg:text-[10px]'>or rs.260/Month</label>
                    <button className=' py-1   rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                </div>
                

            </div>
            <div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 lg:flex lg:flex-col lg:items-center   lg:w-[20%] '>
                <div className='relative  lg:h-[35vh] '>
                    <img className='lg:h-[35vh] lg:w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image1_39413fba-9dd3-4fd9-b55f-ee0b48648979.png?v=1726035461&width=533'></img>

                    <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Adjustable DPI</div>
                </div>
                <div className='lg:w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                    <label className=' lg:text-[14px] font-bold font-[black]'>Toad 33</label>
                    <label className=' lg:text-[10px]'>2.4 GHz Wireless | Ergonomic Design </label>
                    <label className=' lg:text-[15px] font-bold'>₹349</label>
                    <label className=' lg:text-[10px]'>or rs.260/Month</label>
                    <button className=' py-1   rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                </div>
                

            </div>

            <div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 flex flex-col items-center com  w-[20%] '>
                <div className='relative  lg:h-[35vh] '>
                    <img className='lg:h-[35vh] lg:w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image1_81a72adb-4da2-48de-a931-a2766104b603.png?v=1725963669&width=533'></img>

                    <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Two-Wheelers</div>
                </div>
                <div className='lg:w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                    <label className=' lg:text-[14px] font-bold font-[black]'>Spark</label>
                    <label className=' lg:text-[10px]'>55.5 W Output | Dual Port Design </label>
                    <label className=' lg:text-[15px] font-bold'>₹649</label>
                    <label className=' lg:text-[10px]'>or rs.260/Month</label>
                    <button className=' py-1    rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                </div>
                

            </div>

            <div onClick={()=> Navigate('/Productinfo')}  className='border border-gray px-3 pb-3 flex flex-col items-center     w-[20%] '>
                <div className='relative  lg:h-[35vh] '>
                    <img className='lg:h-[35vh] lg:w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_9c9aaef1-dc9e-4f15-8932-385f0b9a6dc9.jpg?v=1725880144&width=533'></img>

                    <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Mobile Cooling Fan</div>
                </div>
                <div className='lg:w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                    <label className=' lg:text-[14px] font-bold font-[black]'>Cool Pulse</label>
                    <label className=' lg:text-[10px]'>Instant Cooling | Radiator Cooling  </label>
                    <label className=' lg:text-[15px] font-bold'>₹949</label>
                    <label className=' lg:text-[10px]'>or rs.260/Month</label>
                    <button className='  py-1    rounded-sm w-[90%] text-[white]  bg-[#1c1c1c]'>ADD TO CART</button>
                </div>
                

            </div>

           

        </div>


        <div className=''>
            
        <div className='  component w-[300%]  lg:hidden flex px-2 items-center gap-10'>
           
            <div className=' cursor-pointer border border-gray   flex flex-col items-center  w-[25%]  '>
                <div className='relative  h-[35vh] '>
                    <img className=' h-[40vh]  w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_ef03c2d7-69f7-4da6-802d-621b10f85c50.jpg?v=1726138038&width=533'></img>

                    <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Long playtime</div>
                </div>
                <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                    <label className=' text-[15px] font-bold font-[black]'>HARMONIC TWINS S17</label>
                    <label className=' text-[15px]'>Ergonomic Light Design| Game/Music </label>
                    <label className=' text-[20px] font-bold'>₹799 </label>
                    <label className=' text-[15px]'>or rs.260/Month</label>
                    <button className='  py-1  rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                </div>

            </div>
            <div className=' border border-gray px-3 pb-3 flex flex-col items-center w-[20%] '>
                <div className='relative  h-[35vh] '>
                    <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image1_39413fba-9dd3-4fd9-b55f-ee0b48648979.png?v=1726035461&width=533'></img>

                    <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Adjustable DPI</div>
                </div>
                <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                    <label className=' text-[15px] font-bold font-[black]'>Toad 33</label>
                    <label className=' text-[15px]'>2.4 GHz Wireless | Ergonomic Design </label>
                    <label className=' text-[20px] font-bold'>₹349</label>
                    <label className=' text-[15px]'>or rs.260/Month</label>
                    <button className=' py-1   rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                </div>
                

            </div>

            <div className=' border border-gray px-3 pb-3 flex flex-col items-center com  w-[20%] '>
                <div className='relative  h-[40vh] '>
                    <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Image1_81a72adb-4da2-48de-a931-a2766104b603.png?v=1725963669&width=533'></img>

                    <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Two-Wheelers</div>
                </div>
                <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                    <label className=' text-[15px] font-bold font-[black]'>Spark</label>
                    <label className=' text-[15px]'>55.5 W Output | Dual Port Design </label>
                    <label className=' text-[20px] font-bold'>₹649</label>
                    <label className=' text-[15px]'>or rs.260/Month</label>
                    <button className=' py-1  rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                </div>
                

            </div>

            <div className='border border-gray px-3 pb-3 flex flex-col items-center     w-[20%] '>
                <div className='relative  h-[40vh] '>
                    <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_9c9aaef1-dc9e-4f15-8932-385f0b9a6dc9.jpg?v=1725880144&width=533'></img>

                    <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Mobile Cooling Fan</div>
                </div>
                <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                    <label className=' text-[15px] font-bold font-[black]'>Cool Pulse</label>
                    <label className=' text-[15px]'>Instant Cooling | Radiator Cooling  </label>
                    <label className=' text-[20px] font-bold'>₹949</label>
                    <label className=' text-[15px]'>or rs.260/Month</label>
                    <button className='  py-1 rounded-sm w-[90%] text-[white]  bg-[#1c1c1c]'>ADD TO CART</button>
                </div>
                

            </div>

           

        </div>
        </div>

       </div>
    </div>
  )
}

export default Aess