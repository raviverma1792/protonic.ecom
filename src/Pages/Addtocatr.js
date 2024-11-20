import React, { useState } from 'react'

function Addtocatr() {
    const [move,setMove] = useState(0)
    const [value,setvalue]= useState(0)

  return (
    <div className='  lg:flex w-full lg:justify-center h-[100vh] lg:items-center'>
        <div className=' relative lg:w-[60%]  lg:flex rounded-xl justify-between  items-center py-[3%] px-[3%]  bg-white '>

            <div className='lg:w-[50%] w-[80%] h-[35vh] overflow-hidden  '>
            <div style={{transform : `translateX(-${move}%)`}} className=' flex gap-2 w-[928%] lg:w-[900%] duration-700 flex lg:flex'>
                <img className=' border bg-cover lg:w-[100%] h-[35vh]' src='https://www.portronics.com/cdn/shop/files/Artboard1_c48e07a1-d9e6-4ce3-85d0-951a0a7c83a1_1080x.jpg?v=1709807194'></img>
                <img className=' border bg-cover lg:w-[100%] h-[35vh]' src='https://www.portronics.com/cdn/shop/files/Artboard2_bb9136f4-7d8f-410b-b541-b9c3997c2935_1080x.jpg?v=1709807193'></img>
                <img className=' border bg-cover lg:w-[100%] h-[35vh]' src='https://www.portronics.com/cdn/shop/files/1_54984606-09e6-4de1-b8a2-f211fd1e6219_1080x.jpg?v=1712211649'></img>
                <img className=' border bg-cover lg:w-[100%] h-[35vh]' src='https://www.portronics.com/cdn/shop/files/Artboard4_353e4a99-398e-4e5a-ab5a-d0b765086c52_1080x.jpg?v=1712211649'></img>
                <img className=' border bg-cover lg:w-[100%] h-[35vh]' src='https://www.portronics.com/cdn/shop/files/Artboard5_956b21b1-ec3e-4f5e-9be0-00751ec3fb18_1080x.jpg?v=1712211649'></img>
                <img className=' border bg-cover lg:w-[100%] h-[35vh]' src='https://www.portronics.com/cdn/shop/files/Artboard6_100a4e1d-1240-4dcd-bff8-045315c4bcf1_1080x.jpg?v=1712211649'></img>
                <img className=' border bg-cover lg:w-[100%] h-[35vh]' src='https://www.portronics.com/cdn/shop/files/Artboard7_cbbd7e0e-4546-4fc3-98fc-2b745b28a828_1080x.jpg?v=1712211649'></img>
                <img className=' border bg-cover lg:w-[100%] h-[35vh]' src='https://www.portronics.com/cdn/shop/files/Artboard8_94834680-c13e-459f-acc8-98d9483570f3_1080x.jpg?v=1712211649'></img>
                <img className=' border bg-cover lg:w-[100%] h-[35vh]' src='https://www.portronics.com/cdn/shop/files/Artboard9_f06f62d1-b0e0-4da6-81d3-efc001162092_1080x.jpg?v=1712211649'></img>
            </div>
                
            </div>
            <div className=' lg:absolute z-10 text-[red] lg:top-[40%] absolute top-[25%] w-[80%]  justify-between  lg:w-[36%] flex lg:flex lg:justify-between lg:h-[5vh]'>
                    <button onClick={()=> move>0 ? setMove(move-11.11):null} ><i class=" text-[35px] fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                    <button onClick={()=> move<79 ? setMove(move+11.11):null}><i class=" text-[35px] fa fa-angle-right" aria-hidden="true"></i>
                    </button>
                    {/* <button onClick={()=> move<79 ? setMove(88.88):null}><i class=" text-[35px] fa fa-angle-right" aria-hidden="true"></i>
                        </button> */}
                </div>
            {/* <label>View Product</label> */}
            <div className=' lg:pl-[18%] pt-5 lg:pt-0 pl-[15px] lg:w-[70%] w-[80%] flex flex-col lg:flex lg:flex-col gap-2 '>
                <label className=' cursor-pointer text-[16px] font-semibold'>  Pure Sound Pro X</label>
                <label className='lg:text-[12px] text-[15px] w-full lg:w-[100%]'> Wired Subwoofer for Deep Bass | 2.1 Channel | 3 EQ Modes | Sleek Remote Control</label>
                <label className='lg:text-[16px] text-[18px] font-semibold'> ₹4,699</label>
                <label className='lg:text-[12px] text-[15px]'> Tax included.</label>
                <label className='lg:text-[12px] text-[15px]'> Color</label>
                <div className='bg-black lg:w-[15px] lg:h-[15px] rounded-full'> </div>
                <div className=' lg:flex py-3 lg:w-[15px]  lg:h-[15px] lg:items-center  flex  items-center gap-3  w-[100%]  lg:gap-3'> 
                    <label className='text-[15px]'>Quantity</label>
                    <i onClick={()=> setvalue(value -1)}  class=" cursor-pointer text-[25px] fa fa-minus-square-o" aria-hidden="true"></i>
                    {value}
                    <i onClick={()=> setvalue(value +1)}  class="cursor-pointer text-[25px] fa fa-plus-square-o" aria-hidden="true"></i>
                </div>
                <div className='gap-2 flex'>
                    <button className='text-[white] lg:w-[50%] w-[60%] h-[5vh] lg:h-[6vh] bg-[#eb0027]'>Add to cart</button>
                    <button className='text-[white] lg:w-[50%] w-[60%] h-[5vh] lg:h-[6vh] bg-[#121212]'>Buy it now</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Addtocatr