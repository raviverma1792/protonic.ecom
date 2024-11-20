import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
function Item() {
    const Navigate =useNavigate()
    const [hover, sathover] = useState(false)

    return (
        <div className='  items-center flex flex-col gap-10   lg:w-[100%] py-[5%] '>
            <label className=' text-start lg:w-[80%] w-[90%] tracking-wide text-[16px] lg:text-[24px]'>POPULAR CATEGORIES</label>
           
            <div className='lg:w-[82%] w-[100%] flex-wrap lg:gap-5 lg:flex  lg:justify-center flex gap-5 justify-center '>
                <div className='lg:w-[23%] w-[40%]  '>
                    <div onClick={()=> Navigate("/Proitem")} className=' relative  gap-4 flex flex-col items-center    '>
                        <img className=' cursor-pointer rounded-2xl z-10 hover:z-[-1]' src='https://www.portronics.com/cdn/shop/files/Untitled_design_2_13942d30-b96e-427a-b7b5-69e37e697dc3.png?v=1712385385'></img>
                        <label className='  font-bold text-[15px]'>Audio</label>
                        <img className='flex absolute '  src='https://www.portronics.com/cdn/shop/files/Audio.gif?v=1715162800'></img>
                    </div>
                </div>

                <div className='lg:w-[23%] w-[40%]  '>
                    <div className=' relative  gap-4 flex flex-col items-center    '>
                        <img className=' cursor-pointer rounded-2xl z-10 hover:z-[-1]' src='https://www.portronics.com/cdn/shop/files/Untitled_design_4.png?v=1712387076'></img>
                        <label className='  font-bold text-[15px]'>Mobile Accessories</label>
                        <img className='flex absolute' src='https://www.portronics.com/cdn/shop/files/Mobile_Accessories.gif?v=1715163300'></img>
                    </div>
                </div>

                <div className='lg:w-[23%] w-[40%]  '>
                    <div className=' relative  gap-4 flex flex-col items-center    '>
                        <img className=' cursor-pointer rounded-2xl z-10 hover:z-[-1]' src='https://www.portronics.com/cdn/shop/files/Untitled_design_26146574-265a-41c2-b4b0-95880c452f1e.png?v=1712385260'></img>
                        <label className='  font-bold text-[15px]'>Computer Accessories</label>
                        <img className='flex absolute' src='https://www.portronics.com/cdn/shop/files/Computer_Accessories.gif?v=1715165794'></img>
                    </div>
                </div>

                <div className='lg:w-[23%] w-[40%]  '>
                    <div className=' relative  gap-4 flex flex-col items-center    '>
                        <img className=' cursor-pointer z-10 hover:z-[-1] rounded-2xl' src='https://www.portronics.com/cdn/shop/files/Untitled_design_1_71c36f38-cf09-46c7-8240-75007f87dbda.png?v=1712385418'></img>
                        <label className='  font-bold text-[15px]'>Car Accessories</label>
                        <img className=' flex absolute' src='https://www.portronics.com/cdn/shop/files/Car_Accessories.gif?v=1715163713'></img>
                    </div>
                </div>
                

            </div>
           
           
           
           
           
           
            {/* <div className='  bg-black gap-20 lg:flex lg:justify-center lg:flex-row lg:items-center'>

                <div className=' cursor-pointer   gap-5 lg:flex-col lg:flex justify-center lg:items-center    lg:w-[18%] lg:h-[40vh]'>
                       
                        <div className='  relative'>

                            <div className='absolute top-0 hover:z-[-1] '>
                                <img className=' rounded-lg lg:h-[40vh]' src='https://m.media-amazon.com/images/I/71X1biF+-qL.jpg'></img>

                            </div>
                            <img className=' rounded-lg lg:h-[40vh]  lg:flex  hidden ' src='https://www.portronics.com/cdn/shop/files/Audio.gif?v=1715162800'></img>


                        </div>
                        <label className=' font-serif font-bold text-[15px]'>Audio</label>
                    </div>

                     
                    <div className=' cursor-pointer gap-5  flex-col flex justify-center items-center w-[18%] h-[40vh]'>
                        <div className=' relative'>
                            <div className='absolute top-0 hover:z-[-1] ' >
                                <img className=' rounded-lg h-[40vh]' src='https://m.media-amazon.com/images/I/71X1biF+-qL.jpg'></img>


                            </div>
                            <img className='rounded-lg h-[40vh]' src='https://www.portronics.com/cdn/shop/files/Computer_Accessories.gif?v=1715165794'></img>
                        </div>
                        <label className=' font-serif font-bold text-[15px]'>Computer Accessories</label>
                    </div> 
                    <div className=' cursor-pointer gap-5 flex-col flex justify-center items-center w-[18%] h-[40vh]'>
                        <div className=' relative'>
                            <div className='absolute top-0 hover:z-[-1] '>
                                <img className=' rounded-lg h-[40vh]' src='https://m.media-amazon.com/images/I/71X1biF+-qL.jpg'></img>


                            </div>
                            <img className='rounded-lg h-[40vh]' src='https://www.portronics.com/cdn/shop/files/Car_Accessories.gif?v=1715163713'></img>

                        </div>
                        <label className=' font-serif font-bold text-[15px]'>Car Accessories</label>
                    </div>
                
                
                <div className=' bg-[red] h-[20vh]  lg:flex-row flex-wrap justify-center flex w-[20%]  gap-5'>
                </div>
                    

            </div>
             */}


                

        </div>
    )
}

export default Item