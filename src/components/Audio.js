import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Audio() {
    const Navigate=useNavigate()
    return (
        <div className='application lg:overflow-visible overflow-scroll flex items-center lg:w-[100%] py-8'>
            <div className='lg:flex lg:items-center lg:flex-col lg:justify-center lg:gap-4 lg:w-[100%]'>
                <label className='font-bold text-[24px] text-start w-[84%]'>AUDIO</label>
                <div className='component hidden lg:flex justify-center items-center w-[90%] gap-10'>

                    <div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[20%] '>
                        <div className='relative  h-[32vh] '>
                            <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_346bbd8a-f6f2-4523-8fcf-b1fdc0f28c7a.jpg?v=1717501590&width=533'></img>

                            <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>80W HD Sound</div>
                        </div>
                        <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                            <label className=' text-[14px] font-bold font-[black]'>HARMONY </label>
                            <label className=' text-[10px]'>Bass Boost Technology | Bass/Treble </label>
                            <label className=' text-[15px] font-bold'>₹8,499 </label>
                            <label className=' text-[10px]'>or Rs. 2833/Month

                                Buy on EMI</label>
                            <button className='  py-1   rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                        </div>

                    </div>
                    <div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[20%] '>
                        <div className='relative  h-[35vh] '>
                            <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/products/HarmonicsTwinsS51200X12001.jpg?v=1680168370&width=533'></img>

                            <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Digital Display</div>
                        </div>
                        <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                            <label className=' text-[14px] font-bold font-[black]'>Harmonics Twins S5</label>
                            <label className=' text-[10px]'>15 Hour Playtime | Low Latency </label>
                            <label className=' text-[15px] font-bold'>₹949</label>
                            <label className=' text-[10px]'>or Rs. 316/Month

                                Buy on EMI </label>
                            <button className=' py-1 font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                        </div>


                    </div>

                    <div onClick={()=> Navigate('/Productinfo')} className=' border border-gray px-3 pb-3 flex flex-col items-center com  w-[20%] '>
                        <div className='relative  h-[35vh] '>
                            <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/products/1200x1200-1_6f2b2de7-03aa-4f48-bc07-c2a67ed0ee12.jpg?v=1662549387&width=533'></img>

                            <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>16W Speaker</div>
                        </div>
                        <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                            <label className=' text-[14px] font-bold font-[black]'>Decibel 20</label>
                            <label className=' text-[10px]'>5 Hour Playtime | Heavy Bass </label>
                            <label className=' text-[15px] font-bold'>₹1,049</label>
                            <label className=' text-[10px]'>or Rs. 350/Month

                                Buy on EMI </label>
                            <button className=' py-1  font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                        </div>


                    </div>

                    <div onClick={()=> Navigate('/Productinfo')} className='border border-gray px-3 pb-3 flex flex-col items-center     w-[20%] '>
                        <div className='relative  h-[35vh] '>
                            <img className='h-[35vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_51b3d5ad-367a-4feb-b3c7-9ec5cfae1415.jpg?v=1683536688&width=533'></img>

                            <div className=' absolute left-4 bottom-[-6px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Powerfull Bass</div>
                        </div>
                        <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                            <label className=' text-[14px] font-bold font-[black]'>Muffs M2</label>
                            <label className=' text-[10px]'>40 Hour Playtime | 40mm Dynamic </label>
                            <label className=' text-[15px] font-bold'>₹1,049</label>
                            <label className=' text-[10px]'>or Rs. 350/Month

                                Buy on EMI</label>
                            <button className='  py-1  font-[600] rounded-sm w-[90%] text-[white]  bg-[#1c1c1c]'>ADD TO CART</button>
                        </div>


                    </div>

                </div>

                <div className=''>


                    <div className='component w-[300%]  lg:hidden flex px-2 items-center gap-10'>

                        <div className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[25%] '>
                            <div className='relative  h-[35vh] '>
                                <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_346bbd8a-f6f2-4523-8fcf-b1fdc0f28c7a.jpg?v=1717501590&width=533'></img>

                                <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>80W HD Sound</div>
                            </div>
                            <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                                <label className=' text-[15px] font-bold font-[black]'>HARMONY </label>
                                <label className=' text-[15px]'>Bass Boost Technology | Bass/Treble </label>
                                <label className=' text-[20px] font-bold'>₹8,499 </label>
                                <label className=' text-[15px]'>or Rs. 2833/Month

                                    Buy on EMI</label>
                                <button className='  py-1  font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                            </div>

                        </div>
                        <div className=' border border-gray px-3 pb-3 flex flex-col items-center   w-[20%] '>
                            <div className='relative  h-[35vh] '>
                                <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/products/HarmonicsTwinsS51200X12001.jpg?v=1680168370&width=533'></img>

                                <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Digital Display</div>
                            </div>
                            <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                                <label className=' text-[15px] font-bold font-[black]'>Harmonics Twins S5</label>
                                <label className=' text-[15px]'>15 Hour Playtime | Low Latency </label>
                                <label className=' text-[20px] font-bold'>₹949</label>
                                <label className=' text-[15px]'>or Rs. 316/Month

                                    Buy on EMI </label>
                                <button className=' py-1 font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                            </div>


                        </div>

                        <div className=' border border-gray px-3 pb-3 flex flex-col items-center com  w-[20%] '>
                            <div className='relative  h-[35vh] '>
                                <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/products/1200x1200-1_6f2b2de7-03aa-4f48-bc07-c2a67ed0ee12.jpg?v=1662549387&width=533'></img>

                                <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>16W Speaker</div>
                            </div>
                            <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                                <label className=' text-[15px] font-bold font-[black]'>Decibel 20</label>
                                <label className=' text-[15px]'>5 Hour Playtime | Heavy Bass </label>
                                <label className=' text-[20px] font-bold'>₹1,049</label>
                                <label className=' text-[15px]'>or Rs. 350/Month

                                    Buy on EMI </label>
                                <button className=' py-1  font-[600] rounded-sm w-[90%] text-[white] font-bold bg-[#1c1c1c]'>ADD TO CART</button>
                            </div>


                        </div>

                        <div className='border border-gray px-3 pb-3 flex flex-col items-center     w-[20%] '>
                            <div className='relative  h-[35vh] '>
                                <img className='h-[40vh] w-[100%]' src='https://www.portronics.com/cdn/shop/files/Artboard1_51b3d5ad-367a-4feb-b3c7-9ec5cfae1415.jpg?v=1683536688&width=533'></img>

                                <div className=' absolute left-4 bottom-[-35px] flex items-center justify-center rounded-xl h-[2.5vh] text-[10px] text-[white] w-[80%] bg-[#eb092b]'>Powerfull Bass</div>
                            </div>
                            <div className='w-[100%] gap-2 justify-center flex flex-col  pt-5'>
                                <label className=' text-[15px] font-bold font-[black]'>Muffs M2</label>
                                <label className=' text-[15px]'>40 Hour Playtime | 40mm Dynamic </label>
                                <label className=' text-[20px] font-bold'>₹1,049</label>
                                <label className=' text-[15px]'>or Rs. 350/Month

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

export default Audio